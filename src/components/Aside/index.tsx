import Button from "../Button";
import { StyledAside } from "./styled";

const Aside = () => (
  <StyledAside className="py-5 mt-5">
    <div className="d-grid justify-content-center">
      <h3 className="text-white fs-2 fw-bold">Boost your links today</h3>
      <div className="text-center">
        <Button
          content="Get Started"
          classes="rounded-5 py-3 px-5 mt-4 fw-bold"
        />
      </div>
    </div>
  </StyledAside>
);

export default Aside;
