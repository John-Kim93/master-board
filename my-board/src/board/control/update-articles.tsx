import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../../components/button";

export default function UpdateArticles() {
  const navigate = useNavigate();
  const { id } = useParams();

  const TITLE = "게시글 수정";
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const initForm = () => {
      const articles = localStorage.getItem("articles");
      if (articles === null) return;
      const article = JSON.parse(articles).find(
        (article) => article.id === Number(id)
      );
      setTitle(article.title);
      setContent(article.content);
    };

    initForm();
  }, [id]);

  const handleSubmit = () => {
    const articles = localStorage.getItem("articles");
    if (articles === null) return;
    const parsedArticles = JSON.parse(articles);
    const newArticles = parsedArticles.map((article) => {
      if (article.id === Number(id)) {
        return {
          ...article,
          title,
          content,
        };
      } else {
        return article;
      }
    });
    localStorage.setItem("articles", JSON.stringify(newArticles));

    navigate(`/board/${id}`);
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
          bgColor="#4caf50"
          text="수정"
          bgHover="#45a049"
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
            navigate(`/board/${id}`);
          }}
        />
      </div>
    </div>
  );
}
