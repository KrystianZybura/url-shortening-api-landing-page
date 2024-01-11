import { useState } from "react";
import { Input, StyledForm, Wrapper } from "./styled";
import Button from "../Button";
import axios from "axios";

const Form = () => {
  const [linkValue, setLinkValue] = useState<string>("");

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const payload = {
      destination: linkValue,
      domain: { fullName: "rebrand.ly" },
    };

    const headers = {
      apikey: "49e530bd402740f8a4efb8103c957a8b",
    };

    const response = await axios.post(
      "https://api.rebrandly.com/v1/links",
      payload,
      { headers }
    );
    console.log(response);
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
              required
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
