import { useState } from "react";
import { StyledForm } from "./styled";

const Form = () => {
  const [linkValue, setLinkValue] = useState<string>("");

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={onFormSubmit} className="rounded-3">
      <div className="row">
        <div className="col-10">
          <input
            value={linkValue}
            onChange={({ target }) => setLinkValue(target.value)}
            placeholder="Shorten a link here.."
            type="text"
            className="form-control py-3"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary px-5 py-3">
            Shorten it!
          </button>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
