import { useEffect, useState } from "react";
import { IRows } from "./table";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/button";

interface IArticle extends IRows {
  content: string;
}

export default function Article() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState<IArticle[]>([]);
  const [article, setArticle] = useState<IArticle>({
    id: 0,
    title: "",
    content: "",
    createdDate: "",
    writer: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const getArticle = async () => {
      const articles = localStorage.getItem("articles");
      if (articles === null) {
        return <div>데이터 없음;</div>;
      } else {
        const parsedArticles = JSON.parse(articles);
        setArticles(parsedArticles);
        setArticle(() =>
          parsedArticles.find((article: IArticle) => article.id === Number(id))
        );
      }
    };

    getArticle();
  }, [id]);

  const handleDelete = () => {
    const newArticles = articles.filter((article) => article.id !== Number(id));
    localStorage.setItem("articles", JSON.stringify(newArticles));
    navigate("/board");
  };

  return (
    <div className="article-main main-container">
      <div className="article-title" style={{ borderBottom: "none" }}>
        {article.title}
      </div>
      <div className="article-writer">{article.writer}</div>
      <div className="article-space-between">
        <div className="article-createdDate">{article.createdDate}</div>
        <div className="article-button-area">
          <MyButton
            bgColor="#4caf50"
            text="수정"
            bgHover="#45a049"
            size="sm"
            onClick={() => {
              navigate(`/board/update/${id}`);
            }}
          />
          <div style={{ width: "10px" }} />
          <MyButton
            bgColor="#ff6b6b"
            text="삭제"
            bgHover="#e74c3c"
            size="sm"
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className="article-content">{article.content}</div>
    </div>
  );
}
