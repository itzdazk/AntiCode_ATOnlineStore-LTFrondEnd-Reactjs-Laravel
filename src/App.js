import Homepage from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
