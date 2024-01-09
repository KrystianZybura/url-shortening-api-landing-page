import { useState } from "react";
import { Input, StyledForm, Wrapper } from "./styled";
import Button from "../Button";

const Form = () => {
  const [linkValue, setLinkValue] = useState<string>("");

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={onFormSubmit} className="rounded-3 container">
        <div className="row gap-2 gap-md-0">
          <div className="col-md-8 col-lg-10">
            <Input
              value={linkValue}
              onChange={({ target }) => setLinkValue(target.value)}
              placeholder="Shorten a link here.."
              type="text"
              className="form-control py-2 py-md-3"
            />
          </div>
          <div className="col-md-4 col-lg-2">
            <Button classes="w-100 h-100 py-2" content="Shorten it!" />
          </div>
        </div>
      </StyledForm>
    </Wrapper>
  );
};

export default Form;
