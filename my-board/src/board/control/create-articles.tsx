import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/button";

export default function CreateArticles() {
  const navigate = useNavigate();

  const TITLE = "게시글 작성";
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    const articles = localStorage.getItem("articles");
    if (articles === null) return;
    const parsedArticles = JSON.parse(articles);
    const curId = parsedArticles[parsedArticles.length - 1].id + 1;
    const reqData = {
      id: curId,
      title,
      createdDate: dayjs().format("YYYY.MM.DD HH:mm:ss"),
      writer: "테스트 유저",
      content,
    };
    parsedArticles.push(reqData);
    localStorage.setItem("articles", JSON.stringify(parsedArticles));

    navigate("/board");
  };

  return (
    <div className="article-main main-container">
      <div className="article-title">{TITLE}</div>
      <form>
        <div>
          <input
            className="article-control-title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목 없음"
            required
          />
        </div>
        <div>
          <textarea
            className="article-control-content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용 없음"
            required
          />
        </div>
      </form>
      <div className="article-control-buttons">
        <MyButton
          bgColor="#2196f3"
          text="생성"
          bgHover="#1976d2"
          size="sm"
          onClick={handleSubmit}
          disabled={title?.length === 0 || content?.length === 0}
        />
        <div style={{ width: "10px" }} />
        <MyButton
          bgColor="#ff6b6b"
          text="취소"
          bgHover="#e74c3c"
          size="sm"
          onClick={() => {
            navigate("/board");
          }}
        />
      </div>
    </div>
  );
}
