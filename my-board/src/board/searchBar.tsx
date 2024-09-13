import React, { useState } from "react";
import "./index.css";
import MyButton from "../components/button";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleSearch = () => {
    alert(`"${selectedOption}"에서 "${searchTerm}" 찾기`);
  };

  return (
    <div className="search-bar-container">
      <select
        className="search-bar-select"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="제목">제목</option>
        <option value="내용">내용</option>
        <option value="작성자">작성자</option>
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
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
