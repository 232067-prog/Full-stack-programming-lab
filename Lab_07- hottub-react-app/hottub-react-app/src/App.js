import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import EditAccountPage from "./pages/EditAccountPage";
import EditBillingPage from "./pages/EditBillingPage";
import EditShippingPage from "./pages/EditShippingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";
import PaymentPage from "./pages/PaymentPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/edit-account" element={<EditAccountPage />} />
        <Route path="/edit-billing" element={<EditBillingPage />} />
        <Route path="/edit-shipping" element={<EditShippingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="/order-details" element={<OrderDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
