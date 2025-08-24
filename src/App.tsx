import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Advocates from "./pages/Partners/Advocates"; // if needed
import TransactionProAffiliate from "./pages/Partners/Affiliate"; // new import
import Story from "./pages/About/Story";  // new import
import Careers from "./pages/About/Careers"; // new import

// Pages
import Home from "./pages/Home";          // create this if not exists
import GetStarted from "./pages/GetStarted"; // from the code I gave earlier

function App() {
  return (
    <div className="min-h-screen bg-white text-xl font-semibold">
      <Router>
        {/* Topbar + Header always visible */}
        <TopBar />
        <Header />
      
        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<Home />} />
            <Route path="/scroll-to-top" element={<ScrollToTop />} />

            // Products
            <Route path="/products/cloud-premier" element={<CloudPremier />} />
            <Route path="/products/cloud-hosting" element={<CloudHosting />} />
            <Route path="/products/quickbooks-hosting" element={<QuickBooksHosting />} />
            <Route path="/products/cloud-protect" element={<CloudProtect />} />
            <Route path="/products/total-security" element={<TotalSecurity />} />
            <Route path="/products/wisp-compliance" element={<WISPCompliance />} />
            <Route path="/products/transaction-pro" element={<TransactionPro />} />
            <Route path="/products/smartvault" element={<SmartVault />} />

            // Solutions
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/firms" element={<SolutionsFirms />} />
            <Route path="/solutions/business" element={<SolutionsBusiness />} />

            // Pricing
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/pricing/firms" element={<PricingFirms />} />
            <Route path="/pricing/business" element={<PricingBusiness />} />
            <Route path="/pricing/transaction-pro" element={<PricingTransactionPro />} />
            <Route path="/pricing/wisp" element={<PricingWisp />} />

            // Resources
            <Route path="/resources/hub" element={<ResourceHub />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/ebooks" element={<Ebooks />} />
            <Route path="/resources/events" element={<Events />} />
            <Route path="/resources/webinars" element={<Webinars />} />
            <Route path="/resources/podcasts" element={<Podcasts />} />
            <Route path="/resources/cybersecurity-ebook" element={<CyberEbook />} />

            // Why Rightworks
            <Route path="/why/built-for-pros" element={<BuiltForPros />} />
            <Route path="/why/customers-love-us" element={<CustomersLoveUs />} />
            <Route path="/why/app-integrations" element={<AppIntegrations />} />
            <Route path="/why/leadership" element={<Leadership />} />
            <Route path="/why/partners" element={<Partners />} />
            <Route path="/why/news" element={<News />} />
            <Route path="/why/reviews" element={<Reviews />} />
            <Route path="/case-study/sutton-frost-cary" element={<CaseStudySutton />} />
            <Route path="/reviews" element={<Reviews />} />   {/* new route */}
            <Route path="/get-started" element={<GetStarted />} />

           //Partners
           <Route path="/partners/offers" element={<Offers />} />
            <Route path="/partners/become" element={<Become />} />
            <Route path="/partners/advocates" element={<Advocates />} />
            <Route path="/partners/affiliate" element={<TransactionProAffiliate />} />

            // About
            <Route path="/about/story" element={<Story />} />
            <Route path="/about/careers" element={<Careers />} />

          </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
