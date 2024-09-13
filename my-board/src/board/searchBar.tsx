import { useState } from "react";
import "./index.css";
import MyButton from "../components/button";
import { useNavigate } from "react-router-dom";

export type tSearchOptions = "id" | "title" | "content" | "writer";

function SearchBar({
  handleSearch,
}: {
  handleSearch: (type: tSearchOptions, search: string) => void;
}) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<tSearchOptions>("title");

  return (
    <div className="search-bar-main-container">
      <div className="search-bar-container">
        <select
          className="search-bar-select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value as tSearchOptions)}
        >
          <option value="title">제목</option>
          <option value="id">글 번호</option>
          <option value="content">내용</option>
          <option value="writer">작성자</option>
        </select>
        <input
          className="search-bar-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색할 단어를 입력하세요."
        />
        <MyButton
          bgColor="#2196f3"
          bgHover="#1976d2"
          text="검색"
          size="sm"
          onClick={() => handleSearch(selectedOption, searchTerm)}
        />
      </div>
      <div style={{ marginRight: "30px" }}>
        <MyButton
          bgColor="#2196f3"
          bgHover="#1976d2"
          text="글 작성"
          size="sm"
          onClick={() => {
            navigate("/board/create");
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
