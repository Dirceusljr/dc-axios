import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Conteudo from "./pages/Conteudo";
import { ThemeProvider } from "./contexts/ThemeContext";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Home />}></Route>
            <Route path="conteudo" element={<Conteudo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;
