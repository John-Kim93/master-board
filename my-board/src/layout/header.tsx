import { useState } from "react";
import "./index.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-container">
      <div className="header-title">ServiceName</div>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#fff",
          marginRight: "50px",
        }}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
}
