import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/product-detail/ProductDetail";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product">
          <Route path=":productId" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
