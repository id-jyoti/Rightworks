// src/components/Header.tsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);

  // Auto-close dropdowns when route changes
  useEffect(() => {
    setOpenMenu(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper to toggle dropdowns
  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="header" ref={headerRef}>
      {/* Logo */}
      <div
        className="header-logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <span className="logo-main">rightworks</span>
        <span className="logo-sub">formerly Right Networks</span>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        {/* Products */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("products")} className="dropdown-btn">
            Products {openMenu === "products" ? "▲" : "▼"}
          </button>
          {openMenu === "products" && (
            <div className="dropdown-menu wide">
              <div className="dropdown-col">
                <h4>ACCOUNTING & TAX PLATFORM</h4>
                <Link to="/products/cloud-premier">Rightworks Cloud Premier</Link>
                <p>Consolidate your apps, data security, and IT support into our all-in-one platform.</p>
              </div>
              <div className="dropdown-col">
                <h4>HOSTING FOR FIRMS & BUSINESSES</h4>
                <Link to="/products/cloud-hosting">Rightworks Cloud Hosting</Link>
                <p>Get secure, remote access to accounting apps like QuickBooks.</p>
                <Link to="/products/quickbooks-hosting">QuickBooks Hosting</Link>
                <p>Securely access QuickBooks files anytime, anywhere.</p>
              </div>
              <div className="dropdown-col">
                <h4>SECURITY & COMPLIANCE</h4>
                <Link to="/products/cloud-protect">Rightworks Cloud Protect</Link>
                <p>Protect your firm’s cloud-based apps & simplify access with secure SSO.</p>
                <Link to="/products/total-security">Total Security</Link>
                <p>Keep your data safe with enhanced cybersecurity tools.</p>
                <Link to="/products/wisp-compliance">WISP Compliance</Link>
                <p>Save time with a custom-built Written Information Security Plan.</p>
              </div>
              <div className="dropdown-col">
                <h4>PRODUCTIVITY</h4>
                <Link to="/products/transaction-pro">Transaction Pro</Link>
                <p>Easily manage data transfers between QuickBooks and Excel/CSV files.</p>
              </div>
            </div>
          )}
        </div>

        {/* Solutions */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("solutions")} className="dropdown-btn">
            Solutions {openMenu === "solutions" ? "▲" : "▼"}
          </button>
          {openMenu === "solutions" && (
            <div className="dropdown-menu wide">
              <div className="dropdown-col">
                <h4>RIGHTWORKS FOR FIRMS</h4>
                <Link to="/solutions/firms">Accounting & Tax Firms</Link>
                <p>Future-proof your firm with hosting and security tools built for modern firms.</p>
              </div>
              <div className="dropdown-col">
                <h4>RIGHTWORKS FOR BUSINESS</h4>
                <Link to="/solutions/business">Businesses</Link>
                <p>Smart tools for businesses of all sizes.</p>
              </div>
              <div className="dropdown-overview">
                <h3>Solutions Overview</h3>
                <p>Discover how tech can help your firm deliver better services and efficiency.</p>
                <button className="overview-btn" onClick={() => navigate("/solutions")}>
                  VIEW SOLUTIONS
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("pricing")} className="dropdown-btn">
            Pricing {openMenu === "pricing" ? "▲" : "▼"}
          </button>
          {openMenu === "pricing" && (
            <div className="dropdown-menu wide">
              <div className="dropdown-col">
                <h4>ACCOUNTING & TAX FIRM PLANS</h4>
                <Link to="/pricing/firms">Rightworks for Firms</Link>
                <p>Custom hosting & security plans for firms.</p>
              </div>
              <div className="dropdown-col">
                <h4>BUSINESS PLANS</h4>
                <Link to="/pricing/business">Rightworks for Business</Link>
                <p>Remote access to accounting apps.</p>
              </div>
              <div className="dropdown-col">
                <h4>ADDITIONAL TOOLS</h4>
                <Link to="/pricing/transaction-pro">Transaction Pro</Link>
                <p>Manage QuickBooks data transfers.</p>
                <Link to="/pricing/wisp">WISP Compliance</Link>
                <p>Stay compliant easily.</p>
              </div>
              <div className="dropdown-overview">
                <h3>Plans Overview</h3>
                <p>Plans tailored for accounting and tax pros.</p>
                <button className="overview-btn" onClick={() => navigate("/pricing")}>
                  VIEW ALL PLANS
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Resources */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("resources")} className="dropdown-btn">
            Resources {openMenu === "resources" ? "▲" : "▼"}
          </button>
          {openMenu === "resources" && (
            <div className="dropdown-menu wide">
              <div className="dropdown-col">
                <h4>READ & LEARN</h4>
                <Link to="/resources/hub">Resource Hub</Link>
                <p>Expert insights and resources.</p>
                <Link to="/resources/blog">Blog</Link>
                <p>Latest news & trends.</p>
                <Link to="/resources/ebooks">eBooks</Link>
                <p>Guides on cloud, security, and more.</p>
              </div>
              <div className="dropdown-col">
                <h4>CONNECT, WATCH & LISTEN</h4>
                <Link to="/resources/events">Live Events</Link>
                <p>Find us at events nationwide.</p>
                <Link to="/resources/webinars">On-Demand Webinars</Link>
                <p>Learn from thought leaders.</p>
                <Link to="/resources/podcasts">Podcasts</Link>
                <p>Hot topics facing modern firms.</p>
              </div>
              <div className="dropdown-overview">
                <h3>Cybersecurity eBook</h3>
                <p>Learn how to secure client data in this eBook.</p>
                <button className="overview-btn" onClick={() => navigate("/resources/cybersecurity-ebook")}>
                  DOWNLOAD EBOOK
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Why Rightworks */}
        <div className="dropdown">
          <button onClick={() => toggleMenu("why")} className="dropdown-btn">
            Why Rightworks {openMenu === "why" ? "▲" : "▼"}
          </button>
          {openMenu === "why" && (
            <div className="dropdown-menu wide">
              <div className="dropdown-col">
                <h4>THE RIGHTWORKS DIFFERENCE</h4>
                <Link to="/why/built-for-pros">Built for Accounting Pros</Link>
                <p>Trusted by 50% of top firms.</p>
                <Link to="/why/customers-love-us">Customers Love Us</Link>
                <p>See reviews from real customers.</p>
                <Link to="/why/app-integrations">App Integrations</Link>
                <p>Explore 3,000+ integrations.</p>
              </div>
              <div className="dropdown-col">
                <h4>ABOUT US</h4>
                <Link to="/why/leadership">Our Leadership Team</Link>
                <p>Meet our leaders.</p>
                <Link to="/why/partners">Our Partners</Link>
                <p>How partnerships help us scale.</p>
                <Link to="/why/news">Rightworks News</Link>
                <p>Latest company updates.</p>
              </div>
              <div className="dropdown-overview">
                <h3>Customer Reviews</h3>
                <blockquote>
                  “We sleep easier with Rightworks hosting our data.” – Fancher S.
                </blockquote>
                <button className="overview-btn" onClick={() => navigate("/why/reviews")}>
                  READ REVIEWS
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* CTA */}
      <div className="header-cta">
        <button className="cta-btn" onClick={() => navigate("/get-started")}>
          TALK TO AN EXPERT →
        </button>
      </div>
    </header>
  );
};

export default Header;
