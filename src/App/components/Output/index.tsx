import { selectLinks } from "../../features/ShortenLink/linksSlice";
import Button from "../Button";
import { ShortenedLink } from "./styled";
import { useSelector } from "react-redux";

const Output = () => {
  const { links } = useSelector(selectLinks);

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
                <Button classes="px-4" content={`Copy`} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Output;
