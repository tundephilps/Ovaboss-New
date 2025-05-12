import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BussinessService from "./Pages/BussinessService/BussinessService";
import DashboardHome from "./Pages/Dashboard/DashboardHome";

import EcommerceLayout from "./layouts/EcommerceLayout";
import BusinessLayout from "./layouts/BusinessLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import SignUpForm from "./Pages/Auth/SignUpForm";

import Homepage from "../src/Pages/Ecommerce/Homepage";
import ProductDetails from "./Pages/Ecommerce/ProductDetails";
import Categories from "./Pages/Ecommerce/Categories";
import ContactUs from "./Pages/Ecommerce/ContactUs";
import BusinessPage from "./Pages/Ecommerce/BusinessPage";
import SellOnOvaboss from "./Pages/Ecommerce/SellOnOvaboss";
import FindStore from "./Pages/Ecommerce/FindStore";
import ShoppingCart from "./Pages/Ecommerce/CartPage";
import PaymentPage from "./Pages/Ecommerce/PaymentPage";
import CheckoutPage from "./Pages/Ecommerce/CheckoutPage";
import FrequentlyAskedQuestions from "./Pages/Ecommerce/FrequentlyAskedQuestions";
import CategoryPage from "./Pages/BussinessService/CategoryPage";
import BussinessDetails from "./Pages/BussinessService/BussinessDetails";
import PasswordReset from "./Pages/Auth/PasswordReset";
import SignUpPage from "./Pages/Auth/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<EcommerceLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Signup" element={<SignUpPage />} />

            <Route path="/Signupform" element={<SignUpForm />} />
            <Route path="/Resetpasswprd" element={<PasswordReset />} />

            <Route path="/ProductDetails" element={<ProductDetails />} />

            <Route path="/Payment" element={<PaymentPage />} />

            <Route path="/ShoppingCart" element={<ShoppingCart />} />

            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route path="/BusinessPage" element={<BusinessPage />} />
          </Route>

          <Route element={<BusinessLayout />}>
            <Route path="/BussinessService" element={<BussinessDetails />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/Dashboard" element={<DashboardHome />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
