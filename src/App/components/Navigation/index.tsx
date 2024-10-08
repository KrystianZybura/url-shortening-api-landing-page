import { ButtonBackgroundLine, NavButton } from "./NavButton/styled";
import { ButtonLink } from "./styled";

const Navigation = () => (
  <nav className="container navbar navbar-expand-md px-2">
    <a className="navbar-brand fs-2 me-5 fw-bold" href="#">
      Shortly
    </a>
    <NavButton
      className=" d-md-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <ButtonBackgroundLine />
    </NavButton>
    <div
      className="collapse navbar-collapse text-secondary"
      id="collapsibleNavId"
    >
      <ul className="navbar-nav me-md-auto mt-lg-0 gap-2 me-md-3 d-flex flex-wrap align-content-center text-center text-md-start">
        <li className="nav-item">
          <a className="nav-link" href="#" aria-current="page">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resources
          </a>
        </li>
      </ul>
      <div className="d-flex flex-column flex-md-row gap-4 ">
        <a
          className="nav-link me-4 mt-3 mt-md-6 my-md-auto text-center"
          href="#"
        >
          Login
        </a>
        <ButtonLink
          className="nav-link btn text-white px-4 py-2 rounded-5"
          href="#"
        >
          Sign Up
        </ButtonLink>
      </div>
    </div>
  </nav>
);

export default Navigation;
