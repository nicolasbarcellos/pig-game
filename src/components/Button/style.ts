import styled from "styled-components";


interface ButtonStylesProps {
  top: string;
}

export const ButtonStyles = styled.button<ButtonStylesProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: ${(props) => props.top};
  border: 0;
  padding: 0 30px;
  height: 50px;
  border-radius: 999px;
  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;

  background: rgba(255, 255, 255, 0.6);
  color: #444;
  box-shadow: 0 1.75rem 3.5rem rgb(0 0 0 / 10%);
  backdrop-filter: blur(10px);
`;
