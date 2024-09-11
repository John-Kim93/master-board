import "./index.css";
import SearchBar from "./searchBar";
import Table from "./table";

export default function Board() {
  return (
    <div className="board-main-container">
      <div style={{ width: "80%" }}>
        <SearchBar />
        <Table />
      </div>
    </div>
  );
}
