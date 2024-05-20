import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import FavoritesPage from "./Pages/FavoritesPage/FavoritesPage";
import ReadBooksPage from "./Pages/ReadBooksPage/ReadBooksPage";
import BookDetails from "./components/BookDetails/BookDetails";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import NavBar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/read-books" element={<ReadBooksPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;