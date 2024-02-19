import { useState } from "react";
import { selectLinks } from "../../features/ShortenLink/linksSlice";
import Button from "../Button";
import { ShortenedLink } from "./styled";
import { useSelector } from "react-redux";

const Output = () => {
  const [copiedLinkId, setCopiedLinkId] = useState(null);
  const { links } = useSelector(selectLinks);

  const copyToClipboard = ({
    id,
    shortenedLink,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    shortenedLink: any;
  }) => {
    console.log(shortenedLink);
    navigator.clipboard.writeText(shortenedLink);
    setCopiedLinkId(id); // Update state to indicate which link has been copied
    setTimeout(() => setCopiedLinkId(null), 2000); // Reset copiedLinkId after 2 seconds
  };

  return (
    <section className="container text-break">
      <ul className="list-group gap-4">
        {links.map(({ id, defaultLink, shortenedLink }) => (
          <li key={id} className="list-group-item py-3 rounded-3">
            <div className="row gap-3 px-2">
              <span className="col-lg-6 my-auto">{defaultLink}</span>
              <div className="col-lg d-flex flex-column flex-lg-row gap-3 text-lg-end">
                <ShortenedLink className="my-auto flex-grow-1">
                  {shortenedLink}
                </ShortenedLink>
                <Button
                  onClick={() => copyToClipboard({ id, shortenedLink })}
                  classes="px-4"
                  content={copiedLinkId === id ? "Copied" : "Copy"}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Output;
