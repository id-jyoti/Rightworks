import React from "react";
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Search from "./pages/Search";
import CloudPremier from "./pages/products/CloudPremier";
import CloudHosting from "./pages/products/CloudHosting";
import QuickBooksHosting from "./pages/products/QuickBooksHosting";
import CloudProtect from "./pages/products/CloudProtect";
import TotalSecurity from "./pages/products/TotalSecurity";
import WISPCompliance from "./pages/products/WISPCompliance";
import TransactionPro from "./pages/products/TransactionPro";
import Solutions from "./pages/solutions/Solutions";
import SolutionsFirms from "./pages/solutions/SolutionsFirms";
import SolutionsBusiness from "./pages/solutions/SolutionsBusiness";
import Pricing from "./pages/pricing/Pricing";
import PricingFirms from "./pages/pricing/PricingFirms";
import PricingBusiness from "./pages/pricing/PricingBusiness";
import PricingTransactionPro from "./pages/pricing/PricingTransactionPro";
import PricingWisp from "./pages/pricing/PricingWISP";
import ResourceHub from "./pages/resources/ResourceHub";
import Blog from "./pages/resources/Blog";
import Ebooks from "./pages/resources/Ebooks";
import Events from "./pages/resources/Events";
import Webinars from "./pages/resources/Webinars";
import Podcasts from "./pages/resources/Podcasts";
import CyberEbook from "./pages/resources/CyberEbook";
import BuiltForPros from "./pages/why/BuiltForPros";
import CustomersLoveUs from "./pages/why/CustomersLoveUs";
import AppIntegrations from "./pages/why/AppIntegrations";
import Leadership from "./pages/why/Leadership";
import Partners from "./pages/why/Partners";
import News from "./pages/why/News";
import Reviews from "./pages/why/Reviews";
import CaseStudySutton from "./pages/CaseStudySutton";
import SmartVault from "./pages/products/SmartVault";
import Offers from "./pages/Partners/Offers";
import Become from "./pages/Partners/Become";
import Advocates from "./pages/Partners/Advocates";
import TransactionProAffiliate from "./pages/Partners/Affiliate";
import Story from "./pages/About/Story";
import Careers from "./pages/About/Careers";
// Pages
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
function App () {
  return (
    <div className={`min-h-screen bg-white text-xl font-semibold`}>
      <Router>
        {/* Topbar + Header always visible */}
        <TopBar/>
        <Header/>
        <ScrollToTop/>
        {/* Page Content */}
        <main>
          <Routes>
            <Route element={<Support/>} path={`/support`}/>
            <Route element={<Contact/>} path={`/contact`}/>
            <Route element={<Login/>} path={`/login`}/>
            <Route element={<Search/>} path={`/search`}/>
            <Route element={<Home/>} path={`/`}/>
            <Route element={<ScrollToTop/>} path={`/scroll-to-top`}/>
            {`// Products`}
            <Route element={<CloudPremier/>} path={`/products/cloud-premier`}/>
            <Route element={<CloudHosting/>} path={`/products/cloud-hosting`}/>
            <Route element={<QuickBooksHosting/>} path={`/products/quickbooks-hosting`}/>
            <Route element={<CloudProtect/>} path={`/products/cloud-protect`}/>
            <Route element={<TotalSecurity/>} path={`/products/total-security`}/>
            <Route element={<WISPCompliance/>} path={`/products/wisp-compliance`}/>
            <Route element={<TransactionPro/>} path={`/products/transaction-pro`}/>
            <Route element={<SmartVault/>} path={`/products/smartvault`}/>
            {`// Solutions`}
            <Route element={<Solutions/>} path={`/solutions`}/>
            <Route element={<SolutionsFirms/>} path={`/solutions/firms`}/>
            <Route element={<SolutionsBusiness/>} path={`/solutions/business`}/>
            {`// Pricing`}
            <Route element={<Pricing/>} path={`/pricing`}/>
            <Route element={<PricingFirms/>} path={`/pricing/firms`}/>
            <Route element={<PricingBusiness/>} path={`/pricing/business`}/>
            <Route element={<PricingTransactionPro/>} path={`/pricing/transaction-pro`}/>
            <Route element={<PricingWisp/>} path={`/pricing/wisp`}/>
            {`// Resources`}
            <Route element={<ResourceHub/>} path={`/resources/hub`}/>
            <Route element={<Blog/>} path={`/resources/blog`}/>
            <Route element={<Ebooks/>} path={`/resources/ebooks`}/>
            <Route element={<Events/>} path={`/resources/events`}/>
            <Route element={<Webinars/>} path={`/resources/webinars`}/>
            <Route element={<Podcasts/>} path={`/resources/podcasts`}/>
            <Route element={<CyberEbook/>} path={`/resources/cybersecurity-ebook`}/>
            {`// Why Rightworks`}
            <Route element={<BuiltForPros/>} path={`/why/built-for-pros`}/>
            <Route element={<CustomersLoveUs/>} path={`/why/customers-love-us`}/>
            <Route element={<AppIntegrations/>} path={`/why/app-integrations`}/>
            <Route element={<Leadership/>} path={`/why/leadership`}/>
            <Route element={<Partners/>} path={`/why/partners`}/>
            <Route element={<News/>} path={`/why/news`}/>
            <Route element={<Reviews/>} path={`/why/reviews`}/>
            <Route element={<CaseStudySutton/>} path={`/case-study/sutton-frost-cary`}/>
            <Route element={<Reviews/>} path={`/reviews`}/>
            {` `}
            {/* new route */}
            <Route element={<GetStarted/>} path={`/get-started`}/>
            {`//Partners`}
            <Route element={<Offers/>} path={`/partners/offers`}/>
            <Route element={<Become/>} path={`/partners/become`}/>
            <Route element={<Advocates/>} path={`/partners/advocates`}/>
            <Route element={<TransactionProAffiliate/>} path={`/partners/affiliate`}/>
            {`// About`}
            <Route element={<Story/>} path={`/about/story`}/>
            <Route element={<Careers/>} path={`/about/careers`}/>

          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
