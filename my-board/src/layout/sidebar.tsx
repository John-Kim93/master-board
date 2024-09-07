import { FaHome, FaTh } from "react-icons/fa";
import "./index.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="menu-container">
        <div className="menu-icon">
          <FaHome size={28} />
        </div>
        HOME
      </div>
      <Link className="menu-container" to={"/board"}>
        <div className="menu-icon">
          <FaTh size={28} />
        </div>
        BORAD
      </Link>
    </div>
  );
}
