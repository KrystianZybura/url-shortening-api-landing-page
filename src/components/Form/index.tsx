import { useState } from "react";
import { Input, StyledForm } from "./styled";
import Button from "../Button";

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
          <Button formButton content={"Shorten it!"} />
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
