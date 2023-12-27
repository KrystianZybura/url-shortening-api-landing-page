import workingImage from "../../assets/illustration-working.svg";

const Introduction = () => (
  <div className="div my-5">
    <div className="row">
      <div className="col">
        <h1 className="fw-bold text-black">More than just shorter links</h1>
        <p className="m-0">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <div className="col">
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
