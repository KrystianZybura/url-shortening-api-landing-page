import { StyledButton } from "./styled";

const Button = ({
  formButton,
  content,
}: {
  formButton?: boolean;
  content: string;
}) => (
  <StyledButton
    className={`btn text-white ${
      formButton ? "w-100 h-100" : "px-5 py-3 fw-bold fs-sm-5 rounded-5"
    } `}
  >
    {content}
  </StyledButton>
);

export default Button;
