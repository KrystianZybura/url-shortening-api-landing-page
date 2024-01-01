import Button from "../Button";
import { ShortenedLink } from "./styled";

const Output = () => (
  <section className="my-5">
    <ul className="list-group gap-4">
      <li className="list-group-item py-3 rounded-3">
        <div className="row gap-3 px-2">
          <span className="col-md-6 my-auto">
            https://github.com/KrystianZybura/Personal-Homepage
          </span>
          <div className="col-md d-flex flex-column flex-md-row gap-3 text-end">
            <ShortenedLink className="my-auto flex-grow-1">
              https://shorturl.at/xyST6
            </ShortenedLink>
            <Button classes="px-4" content={`Copy`} />
          </div>
        </div>
      </li>
    </ul>
  </section>
);

export default Output;
