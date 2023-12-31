import { useState } from "react";
import { Input, StyledForm } from "./styled";

const Form = () => {
  const [linkValue, setLinkValue] = useState<string>("");

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={onFormSubmit} className="rounded-3">
      <div className="row">
        <div className="col-8 col-lg-10">
          <Input
            value={linkValue}
            onChange={({ target }) => setLinkValue(target.value)}
            placeholder="Shorten a link here.."
            type="text"
            className="form-control py-3"
          />
        </div>
        <div className="col-4 col-lg-2">
          <button type="submit" className="btn btn-primary w-100 h-100 ">
            Shorten it!
          </button>
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
