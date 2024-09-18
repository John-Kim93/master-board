import { useEffect, useState } from "react";
import "./index.css";
import SearchBar, { tSearchOptions } from "./searchBar";
import Table, { IColumns, IRows } from "./table";
import axios from "axios";

export default function Board() {
  const [rows, setRows] = useState<IRows[]>([]);
  const [columns, setColumns] = useState<IColumns[]>([]);

  useEffect(() => {
    const initTable = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/John-Kim93/master-board/main/main/db.json"
        );

        setColumns(response.data.columns);

        const orgArticles = localStorage.getItem("articles");
        if (orgArticles === null) {
          localStorage.setItem("articles", JSON.stringify(response.data.posts));
          setRows(response.data.posts);
        } else {
          setRows(JSON.parse(orgArticles));
        }
      } catch (error) {
        throw error;
      }
    };

    initTable();
  }, []);

  const searchArticles = (type: tSearchOptions, search: string) => {
    if (type === "id" && isNaN(Number(search))) return;
    setRows(() => {
      const orgArticles = localStorage.getItem("articles");
      return JSON.parse(orgArticles!).filter((article) => {
        switch (type) {
          case "id":
            return article.id === Number(search);
          case "content":
          case "title":
          case "writer":
          default:
            return article[type].includes(search);
        }
      });
    });
  };

  return (
    <div className="board-main-container main-container">
      <div style={{ width: "100%" }}>
        <SearchBar handleSearch={searchArticles} />
        <Table rows={rows} columns={columns} />
      </div>
    </div>
  );
}
