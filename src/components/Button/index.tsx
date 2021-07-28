import { ReactNode } from "react";

import { ButtonStyles } from "./style";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  winner?: boolean;
  top: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  return <ButtonStyles disabled={props.winner} onClick={props.onClick} type='submit' top={props.top}>{props.children}</ButtonStyles>;
}
