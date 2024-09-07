import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Board from "./board/board";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/board" element={<Board />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
