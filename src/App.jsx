import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardHome from "./Pages/DashboardPCC/DashboardHome";

import DashboardHomeBCC from "./Pages/DashboardBCC/DashboardHome";

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
import Wallet from "./Pages/DashboardPCC/Wallets/Wallet";
import MTR from "./Pages/DashboardPCC/MTR";
import ServiceOrderReportBCC from "./Pages/DashboardBCC/Reports/ServiceOrderReport";
import GoodsOrderReportBCC from "./Pages/DashboardBCC/Reports/GoodsOrderReport";

import CreateBusiness from "./Pages/DashboardBCC/Business/CreateBusiness";
import AllOrders from "./Pages/DashboardBCC/Orders/AllOrders";
import AllBusinesses from "./Pages/DashboardBCC/Business/AllBusinesses";
import AddNewBusiness from "./Pages/DashboardBCC/Business/AddNewBusiness";
import AddNewBusiness2 from "./Pages/DashboardBCC/Business/AddNewBusiness2";
import AddNewBusiness3 from "./Pages/DashboardBCC/Business/AddNewBusiness3";
import ProcessingOrders from "./Pages/DashboardBCC/Orders/ProcessingOrders";
import AwaitingPayment from "./Pages/DashboardBCC/Orders/AwaitingPayment";
import PendingOrders from "./Pages/DashboardBCC/Orders/PendingOrder";
import DispatchedOrders from "./Pages/DashboardBCC/Orders/DispatchedOrders";
import CompletedOrders from "./Pages/DashboardBCC/Orders/CompletedOrders";
import UnfulfilledOrders from "./Pages/DashboardBCC/Orders/UnfulfilledOrders";
import OTPInput from "./Pages/Auth/OTP";
import BusinessOnboarding from "./Pages/DashboardBCC/Business/BusinessOnboarding";
import AQB from "./Pages/DashboardBCC/BusinessCommunity/AQB";
import PMB from "./Pages/DashboardBCC/BusinessCommunity/PMB";
import AllServices from "./Pages/DashboardBCC/Services/AllServices";
import { AddNewService } from "./Pages/DashboardBCC/Services/AddNewService";
import GeneralReportBCC from "./Pages/DashboardBCC/Reports/GeneralReport";
import MTRReportBCC from "./Pages/DashboardBCC/Reports/MTRReport";
import WalletTransactionsBCC from "./Pages/DashboardBCC/Reports/WalletTransactions";
import EarningTransactionsBCC from "./Pages/DashboardBCC/Reports/EarningTransactions";
import OnlineInvoiceReportBCC from "./Pages/DashboardBCC/Reports/OnlineInvoiceReport";
import OfflineInvoiceReportBCC from "./Pages/DashboardBCC/Reports/OfflineInvoiceReport";
import OfflineSalesInvoice from "./Pages/DashboardBCC/Orders/OfflineSalesInvoice";
import OnlineSalesInvoice from "./Pages/DashboardBCC/Orders/OnlineSalesInvoice";
import PickupLocation from "./Pages/DashboardBCC/Goods/PickupLocation";
import AllGoods from "./Pages/DashboardBCC/Goods/AllGoods";
import Promotions from "./Pages/DashboardBCC/Goods/Promotions";
import AddNewGoods from "./Pages/DashboardBCC/Goods/AddNewGoods";
import SignOnBCC from "./Pages/DashboardBCC/Wallets/SignOn";
import BuyOnBCC from "./Pages/DashboardBCC/Wallets/BuyOn";
import SellOnBCC from "./Pages/DashboardBCC/Wallets/SellOn";
import BraBCC from "./Pages/DashboardBCC/Wallets/Bra";
import AppContextProvider from "./context/AppContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

import Partner from "./Pages/Ecommerce/Partner";
import BusinessRep from "./Pages/Ecommerce/BusinessRep";
import TermsOfService from "./Pages/Ecommerce/Terms";
import Privacy from "./Pages/Ecommerce/Privacy";
import Blog from "./Pages/Ecommerce/Blog";
import BlogDetails from "./Pages/Ecommerce/BlogDetails";
import BusinessContract from "./Pages/Ecommerce/BusinessContract";
import DashboardCCCLayout from "./layouts/DashboardCCCLayout";
import NewsFeed from "./Pages/DashboardCCC/NewsFeed";
import ChatCenter from "./Pages/DashboardCCC/ChatCenter";
import Support from "./Pages/DashboardCCC/Support";
import ProfileCCC from "./Pages/DashboardCCC/Profile";
function App() {
  return (
    <>
      <Router>
        <AppContextProvider>
          <Routes>
            <Route element={<EcommerceLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/Signin" element={<SignIn />} />
              <Route path="/Signup" element={<SignUpPage />} />
              <Route path="/Signupform/:user_type" element={<SignUpForm />} />
              <Route path="/Resetpassword" element={<PasswordReset />} />
              <Route path="/OTP" element={<OTPInput />} />

              <Route path="/ProductDetails/:productId" element={<ProductDetails />} />

              <Route path="/Categories" element={<Categories />} />
              <Route path="/Payment" element={<PaymentPage />} />
              <Route path="/ShoppingCart" element={<ShoppingCart />} />
              <Route path="/Checkout" element={<CheckoutPage />} />
              <Route path="/BusinessPage" element={<BusinessPage />} />

              <Route path="/ContactUs" element={<ContactUs />} />

              <Route path="/SellOnOvaboss" element={<SellOnOvaboss />} />

              <Route path="/FindStore" element={<FindStore />} />

              <Route path="/FAQ" element={<FrequentlyAskedQuestions />} />

              <Route path="/Partner" element={<Partner />} />

              <Route path="/BusinessRepresentative" element={<BusinessRep />} />

              <Route path="/BusinessContract" element={<BusinessContract />} />

              <Route path="/TermsofService" element={<TermsOfService />} />

              <Route path="/PrivacyPolicy" element={<Privacy />} />

              <Route path="/Blog" element={<Blog />} />

              <Route path="/BlogDetails" element={<BlogDetails />} />
            </Route>

            <Route element={<BusinessLayout />}>
              <Route path="/BussinessService" element={<BussinessService />} />
              <Route path="/BussinessDetails" element={<BussinessDetails />} />
              <Route path="/BussinessCategory" element={<CategoryPage />} />
              <Route path="/ServiceChat" element={<ServiceChat />} />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardPCCLayout />}>
                <Route path="/PCCDashboard" element={<DashboardHome />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/EditBankInfo" element={<EditBankInfo />} />
                <Route path="/Community/AQM" element={<AQM />} />
                <Route path="/Community/PCM" element={<PCM />} />
                <Route path="/Wallets/:walletName" element={<Wallet />} />
                <Route
                  path="/Reports/GeneralReport"
                  element={<GeneralReport />}
                />
                <Route
                  path="/Reports/GeneralReport/MTR"
                  element={<MTRReport />}
                />
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
                <Route path="/MTR" element={<MTR />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute section="bcc" />}>
              <Route element={<DashboardBCCLayout />}>
                <Route path="/BCCDashboard" element={<DashboardHomeBCC />} />
                <Route path="/CreateBusiness" element={<CreateBusiness />} />
                <Route path="/Business/All" element={<AllBusinesses />} />
                <Route path="/Business/AddNew" element={<AddNewBusiness />} />

                <Route path="/Business/AddNew2" element={<AddNewBusiness2 />} />

                <Route path="/Business/AddNew3" element={<AddNewBusiness3 />} />
                <Route
                  path="/Business/BusinessOnboarding"
                  element={<BusinessOnboarding />}
                />
                <Route path="/Orders" element={<AllOrders />} />
                <Route
                  path="/Orders/AwaitingPayment"
                  element={<AwaitingPayment />}
                />
                <Route
                  path="/Orders/PendingOrders"
                  element={<PendingOrders />}
                />
                <Route
                  path="/Orders/ProcessingOrders"
                  element={<ProcessingOrders />}
                />
                <Route
                  path="/Orders/DispatchedOrders"
                  element={<DispatchedOrders />}
                />
                <Route
                  path="/Orders/CompleteOrders"
                  element={<CompletedOrders />}
                />
                <Route
                  path="/Orders/UnfulfilledOrders"
                  element={<UnfulfilledOrders />}
                />
                <Route
                  path="/Orders/OfflineSalesInvoice"
                  element={<OfflineSalesInvoice />}
                />
                <Route
                  path="/Orders/OnlineSalesInvoice"
                  element={<OnlineSalesInvoice />}
                />

                <Route path="/BusinessCommunity/AQB" element={<AQB />} />
                <Route path="/BusinessCommunity/PMB" element={<PMB />} />

                <Route path="/Wallets/BCCSignon" element={<SignOnBCC />} />

                <Route path="/Wallets/BCCBuyon" element={<BuyOnBCC />} />

                <Route path="/Wallets/SELLOn" element={<SellOnBCC />} />

                <Route path="/Wallets/BRA" element={<BraBCC />} />

                <Route path="/Services" element={<AllServices />} />
                <Route path="/Services/AddNew" element={<AddNewService />} />

                <Route
                  path="/Reports/GeneralReports"
                  element={<GeneralReportBCC />}
                />
                <Route path="/Reports/MTRReports" element={<MTRReportBCC />} />

                <Route
                  path="/Reports/GoodsOrder"
                  element={<GoodsOrderReportBCC />}
                />
                <Route
                  path="/Reports/ServiceOrder"
                  element={<ServiceOrderReportBCC />}
                />

                <Route
                  path="/Reports/WalletTransactions"
                  element={<WalletTransactionsBCC />}
                />
                <Route
                  path="/Reports/EarningTransactions"
                  element={<EarningTransactionsBCC />}
                />

                <Route
                  path="/Reports/OnlineInvoice"
                  element={<OnlineInvoiceReportBCC />}
                />
                <Route
                  path="/Reports/OfflineInvoice"
                  element={<OfflineInvoiceReportBCC />}
                />
                <Route
                  path="/Goods/PickupLocations"
                  element={<PickupLocation />}
                />
                <Route path="/Goods/AllGoods" element={<AllGoods />} />

                <Route path="/Goods/product/:section" element={<AddNewGoods />} />
                <Route path="/Goods/Promotions" element={<Promotions />} />
              </Route>
            </Route>

            <Route element={<DashboardCCCLayout />}>
              <Route path="/NewsFeed" element={<NewsFeed />} />
              <Route path="/CCCProfile" element={<ProfileCCC />} />
              <Route path="/ChatCenter" element={<ChatCenter />} />
              <Route path="/Support" element={<Support />} />
            </Route>
          </Routes>
        </AppContextProvider>
      </Router>
    </>
  );
}

export default App;
