import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardHome from "./Pages/DashboardPCC/DashboardHome";

import EcommerceLayout from "./layouts/EcommerceLayout";
import BusinessLayout from "./layouts/BusinessLayout";
import DashboardPCCLayout from "./layouts/DashboardPCCLayout";
import DashboardBCCLayout from "./layouts/DashboardBCCLayout";

import SignIn from "./Pages/Auth/SignIn";
import SignUpPage from "./Pages/Auth/SignUp";
import SignUpForm from "./Pages/Auth/SignUpForm";
import PasswordReset from "./Pages/Auth/PasswordReset";

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
import BussinessService from "./Pages/BussinessService/BussinessService";
import ServiceChat from "./Pages/BussinessService/ServiceChat";
import Profile from "./Pages/DashboardPCC/Profile/Profile";
import EditProfile from "./Pages/DashboardPCC/Profile/EditProfile";
import EditBankInfo from "./Pages/DashboardPCC/Profile/EditBankInfo";
import PCM from "./Pages/DashboardPCC/MyCommunity/PCM";
import AQM from "./Pages/DashboardPCC/MyCommunity/AQM";
import GeneralReport from "./Pages/DashboardPCC/Reports/GeneralReport";
import MTRReport from "./Pages/DashboardPCC/Reports/MTRReport";
import GoodsOrderReport from "./Pages/DashboardPCC/Reports/GoodsOrderReport";
import ServiceOrderReport from "./Pages/DashboardPCC/Reports/ServiceOrderReport";
import OnlineInvoiceReport from "./Pages/DashboardPCC/Reports/OnlineInvoiceReport";
import OfflineInvoiceReport from "./Pages/DashboardPCC/Reports/OfflineInvoiceReport";
import WalletTransactions from "./Pages/DashboardPCC/Reports/WalletTransactions";
import EarningTransactions from "./Pages/DashboardPCC/Reports/EarningTransactions";

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
            <Route path="/Resetpassword" element={<PasswordReset />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />

            <Route path="/Categories" element={<Categories />} />
            <Route path="/Payment" element={<PaymentPage />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/Checkout" element={<CheckoutPage />} />
            <Route path="/BusinessPage" element={<BusinessPage />} />

            <Route path="/ContactUs" element={<ContactUs />} />

            <Route path="/SellOnOvaboss" element={<SellOnOvaboss />} />

            <Route path="/FindStore" element={<FindStore />} />

            <Route path="/FAQ" element={<FrequentlyAskedQuestions />} />
          </Route>

          <Route element={<BusinessLayout />}>
            <Route path="/BussinessService" element={<BussinessService />} />
            <Route path="/BussinessDetails" element={<BussinessDetails />} />
            <Route path="/BussinessCategory" element={<CategoryPage />} />
            <Route path="/ServiceChat" element={<ServiceChat />} />
          </Route>

          <Route element={<DashboardPCCLayout />}>
            <Route path="/PCCDashboard" element={<DashboardHome />} />

            <Route path="/Profile" element={<Profile />} />

            <Route path="/EditProfile" element={<EditProfile />} />

            <Route path="/EditBankInfo" element={<EditBankInfo />} />

            <Route path="/Community/AQM" element={<AQM />} />

            <Route path="/Community/PCM" element={<PCM />} />

            <Route path="/Reports/GeneralReport" element={<GeneralReport />} />

            <Route path="/Reports/GeneralReport/MTR" element={<MTRReport />} />

            <Route
              path="/Reports/GeneralReport/ServiceOrderReport"
              element={<ServiceOrderReport />}
            />

            <Route
              path="/Reports/Invoice/Online"
              element={<OnlineInvoiceReport />}
            />

            <Route
              path="/Reports/Invoice/Offline"
              element={<OfflineInvoiceReport />}
            />

            <Route
              path="/Reports/GeneralReport/GoodsOrderReport"
              element={<GoodsOrderReport />}
            />

            <Route
              path="/Reports/Payout/WalletTransactions"
              element={<WalletTransactions />}
            />

            <Route
              path="/Reports/Payout/EarningTransactions"
              element={<EarningTransactions />}
            />
          </Route>

          <Route element={<DashboardBCCLayout />}>
            <Route path="/BCCDashboard" element={<DashboardHome />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
