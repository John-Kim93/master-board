import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout";
import Board from "./board/board";
import Article from "./board/article";
import CreateArticles from "./board/control/create-articles";
import UpdateArticles from "./board/control/update-articles";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="" element={<Navigate to={"/board"} />} />
          <Route path="board" element={<Board />} />
          <Route path="board/:id" element={<Article />} />
          <Route path="board/create" element={<CreateArticles />} />
          <Route path="board/update/:id" element={<UpdateArticles />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
