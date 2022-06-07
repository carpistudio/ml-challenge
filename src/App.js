import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import SearchContainer from './components/search-box/SearchContainer';
import Home from './components/home/Home';
import SearchResultsContainer from './components/search-results/SearchResultsContainer';
import ProductDetailContainer from './components/product-detail/ProductDetailContainer';
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
      <SearchContainer />
      <Routes>
        <Route exact path="/ml-challenge" element={<Home />} />
        <Route exact path="/ml-challenge/items" element={<SearchResultsContainer />} />
        <Route exact path="/ml-challenge/items/:id" element={<ProductDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
