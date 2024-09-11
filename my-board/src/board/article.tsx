import { useEffect, useState } from "react";
import { IRows } from "./table";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IArticle extends IRows {
  content: string;
}

export default function Article() {
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
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/John-Kim93/master-board/main/main/db.json`
        );
        setArticle(() =>
          response.data.posts.find((post: IArticle) => post.id === Number(id))
        );
      } catch (error) {
        throw error;
      }
    };

    getArticle();
  }, [id]);
  return (
    <div className="article-main-container main-container">
      <div className="article-title">{article.title}</div>
      <div className="article-writer">{article.writer}</div>
      <div className="article-createdDate">{article.createdDate}</div>
      <div className="article-content">{article.content}</div>
    </div>
  );
}
