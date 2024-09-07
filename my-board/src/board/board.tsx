import "./index.css";
import SearchBar from "./searchBar";
import Table from "./table";

export default function Board() {
  return (
    <div className="board-main-container">
      <SearchBar />
      <Table />
    </div>
  );
}
