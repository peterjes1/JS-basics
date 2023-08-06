import { useState } from "react";
import Alert from "./Alert";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  color?: "primary" | "secondary";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  function handleClick(): void {
    onClick();
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClick()}
        className={"btn btn-" + color}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
