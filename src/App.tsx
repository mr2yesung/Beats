import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/product-detail/ProductDetail";
import NotFound from "./pages/not-found/NotFound";
import PageLayout from "./layout/PageLayout";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <ScrollToTop />

      <CartProvider>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="product">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
