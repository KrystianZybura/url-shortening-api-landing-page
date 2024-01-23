import { StyledButton } from "./styled";

const Button = ({
  content,
  classes,
  onClick,
}: {
  content: string;
  classes?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
}) => (
  <StyledButton onClick={onClick} className={`btn text-white ${classes}`}>
    {content}
  </StyledButton>
);

export default Button;
