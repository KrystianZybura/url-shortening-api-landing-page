import { ButtonLink } from "./styled";

const Navigation = () => (
  <header className="bg-light">
    <nav className="container navbar navbar-expand-sm navbar-light ">
      <a className="navbar-brand fs-2 me-5 fw-bold" href="#">
        Shortly
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div
        className="collapse navbar-collapse text-secondary"
        id="collapsibleNavId"
      >
        <ul className="navbar-nav me-auto mt-2 mt-lg-0 gap-2">
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
        <div className="d-flex">
          <a className="nav-link me-5 my-auto" href="#">
            Login
          </a>
          <ButtonLink
            className="nav-link btn btn-primary text-white px-4 py-2"
            href="#"
          >
            Sign Up
          </ButtonLink>
        </div>
      </div>
    </nav>
  </header>
);

export default Navigation;
