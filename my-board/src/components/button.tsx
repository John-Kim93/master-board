import { useEffect, useState } from "react";
import "./button.css";

interface Props {
  bgColor: string;
  bgHover: string;
  text: string;
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => any;
}
export default function MyButton(props: Props) {
  const { bgColor, text, bgHover, size, disabled, onClick } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [width, setWidth] = useState<string>();
  const [padding, setPadding] = useState<string>();
  useEffect(() => {
    switch (size) {
      case "sm":
        setWidth("100px");
        setPadding("6px 20px");
        break;
      case "md":
        setWidth("200px");
        setPadding("8px 25px");
        break;
      case "lg":
        setWidth("300px");
        setPadding("10px 30px");
        break;
    }
  }, [size]);

  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: `${disabled ? "#ccc" : isHovered ? bgHover : bgColor}`,
        width,
        padding,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
