import workingImage from "../../assets/illustration-working.svg";
import Button from "../Button";

const Introduction = () => (
  <div className="div my-5">
    <div className="row align-content-center text-center text-md-start">
      <div className="col-md d-block d-md-none mx-auto my-5 px-3">
        <div>
          <img
            className="w-100 h-100"
            src={workingImage}
            alt="working illustration"
          />
        </div>
      </div>
      <div className="col-md d-grid align-content-center gap-3">
        <h1 className="fw-bold text-black display-3">
          More than just shorter links
        </h1>
        <p className="mx-0 fs-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div>
          <Button
            classes="px-5 py-3 fw-bold fs-sm-5 rounded-5"
            content="Get Started"
          />
        </div>
      </div>
      <div className="col-md d-none d-md-block my-auto">
        <div>
          <img
            className="w-100 h-100"
            src={workingImage}
            alt="working illustration"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Introduction;
