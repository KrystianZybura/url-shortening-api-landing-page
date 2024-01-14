import { StyledButton } from "./styled";

const Button = ({
  content,
  classes,
}: {
  content: string;
  classes?: string;
}) => (
  <StyledButton className={`btn text-white ${classes}`}>{content}</StyledButton>
);

export default Button;
