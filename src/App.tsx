import { Suspense, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import PageLayout from "./layout/PageLayout";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

const Products = lazy(() => import("./pages/products/Products"));
const ProductDetail = lazy(
  () => import("./pages/product-detail/ProductDetail"),
);
const NotFound = lazy(() => import("./pages/not-found/NotFound"));
const Policy = lazy(() => import("./pages/policy/Policy"));
const About = lazy(() => import("./pages/about/About"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/sign-up/SignUp"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Orders = lazy(() => import("./pages/orders/Orders"));

function App() {
  return (
    <>
      <ScrollToTop />

      <AuthProvider>
        <CartProvider>
          <Suspense fallback={<Loading />}>
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
                  <Route path="orders" element={<Orders />} />
                  <Route path="checkout" element={<Checkout />} />
                </Route>
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </CartProvider>
      </AuthProvider>

      <Toaster />
    </>
  );
}

export default App;
