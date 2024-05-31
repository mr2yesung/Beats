import { Outlet, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/product-detail/ProductDetail";
import NotFound from "./pages/not-found/NotFound";
import PageLayout from "./layout/PageLayout";
import { CartProvider } from "./contexts/CartContext";
import Policy from "./pages/policy/Policy";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const queryClient = useQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />

      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="product">
                <Route index element={<Products />} />
                <Route path=":productId" element={<ProductDetail />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="policy" element={<Policy />} />

              <Route
                element={
                  <ProtectedRoute>
                    <Outlet />
                  </ProtectedRoute>
                }
              >
                <Route path="checkout" element={<Checkout />} />
              </Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </AuthProvider>

      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
