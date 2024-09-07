import Header from "./header";
import Sidebar from "./sidebar";
import "./index.css";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="page-container">
      <Header />
      <div className="content-container">
        <Sidebar />
        <div className="content-page">
          <div className="content-title">Board</div>
          {children}
        </div>
      </div>
    </div>
  );
}
