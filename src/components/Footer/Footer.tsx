import React, {
  useState,
} from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  Link, useNavigate,
} from "react-router-dom";
import "./Footer.css";
const Footer = ()=>{
  const [
    email,
    setEmail,
  ] = useState (``);

  const navigate = useNavigate ();

  const handleSubscribe = ()=>{
    if (! email) {
      alert (`Please enter a valid email address.`);

      return;
    }
    alert (`Subscribed successfully with ${email}`);
    setEmail (``);
  };

  return (
    <footer className={`footer`}>
      <div className={`footer-content`}>
        {/* Left - Call + Social + Ratings */}
        <div className={`footer-left`}>
          <p className={`footer-call`}>
            <img alt={`Call`} src={`/assets/call.svg`}/>
            {`Call `}
            <strong>
              {`866.901.3826`}
            </strong>
          </p>
          <div className={`footer-social`}>
            <a href={`https://www.facebook.com/`} rel={`noopener noreferrer`} target={`_blank`}>
              <Facebook/>
            </a>
            <a href={`https://twitter.com/`} rel={`noopener noreferrer`} target={`_blank`}>
              <Twitter/>
            </a>
            <a href={`https://www.youtube.com/`} rel={`noopener noreferrer`} target={`_blank`}>
              <Youtube/>
            </a>
            <a href={`https://www.linkedin.com/`} rel={`noopener noreferrer`} target={`_blank`}>
              <Linkedin/>
            </a>
            <a href={`https://www.instagram.com/`} rel={`noopener noreferrer`} target={`_blank`}>
              <Instagram/>
            </a>
          </div>
          <div className={`footer-ratings`}>
            <img alt={`BBB A+ Rating`} src={`/assets/bb.png`}/>
            <Link to={`/reviews`}>
              <img alt={`G2 Review`} className={`clickable`} src={`/assets/G2.png`}/>
            </Link>
          </div>
        </div>
        {/* Right - Newsletter */}
        <div className={`footer-newsletter`}>
          <h2>
            {`Want to hear from us?`}
          </h2>
          <p>
            {`Join our mailing list and get all of the latest news delivered`}
            {`straight to your inbox.`}
          </p>
          <div className={`footer-subscribe`}>
            <input className={`footer-input`}
              onChange={e=>setEmail (e.target.value)}
              placeholder={`Email`}
              type={`email`}
              value={email}
            />
            <button className={`footer-btn`} onClick={handleSubscribe}>
              {`Subscribe`}
            </button>
          </div>
          <label className={`footer-privacy`}>
            <input type={`checkbox`}/>
            {` `}
            {`I would like to sign up to receive email`}
            {`from Rightworks. See`}
            {` `}
            <Link className={`privacy-link`} to={`/privacy`}>
              {`Privacy Policy`}
            </Link>
          </label>
        </div>
      </div>
      {/* Links */}
      <div className={`footer-links`}>
        <div>
          <h3>
            {`Contact Us`}
          </h3>
          <ul>
            <li>
              <Link to={`/login`}>
                {`Account Login`}
              </Link>
            </li>
            <li>
              <Link to={`/get-started`}>
                {`Contact Sales`}
              </Link>
            </li>
            <li>
              <Link to={`/support`}>
                {`Support`}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            {`Products`}
          </h3>
          <ul>
            <li>
              <Link to={`/products/cloud-premier`}>
                {`Cloud Premier`}
              </Link>
            </li>
            <li>
              <Link to={`/products/cloud-hosting`}>
                {`Cloud Hosting`}
              </Link>
            </li>
            <li>
              <Link to={`/products/cloud-protect`}>
                {`Cloud Protect`}
              </Link>
            </li>
            <li>
              <Link to={`/products/smartvault`}>
                {`SmartVault`}
              </Link>
            </li>
            <li>
              <Link to={`/products/transaction-pro`}>
                {`Transaction Pro`}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            {`Partners`}
          </h3>
          <ul>
            <li>
              <Link to={`/why/partners`}>
                {`Partners Overview`}
              </Link>
            </li>
            <li>
              <Link to={`/partners/offers`}>
                {`Featured Offers`}
              </Link>
            </li>
            <li>
              <Link to={`/partners/become`}>
                {`Become a Partner`}
              </Link>
            </li>
            <li>
              <Link to={`/partners/advocates`}>
                {`Advocates Program`}
              </Link>
            </li>
            <li>
              <Link to={`/partners/affiliate`}>
                {`Transaction Pro Affiliate`}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            {`About Us`}
          </h3>
          <ul>
            <li>
              <Link to={`/about/story`}>
                {`Our Story`}
              </Link>
            </li>
            <li>
              <Link to={`/why/leadership`}>
                {`Our Team`}
              </Link>
            </li>
            <li>
              <Link to={`/about/careers`}>
                {`Careers`}
              </Link>
            </li>
            <li>
              <Link to={`/why/news`}>
                {`News`}
              </Link>
            </li>
            <li>
              <Link to={`/why/customers-love-us`}>
                {`Our Customers`}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            {`About Rightworks`}
          </h3>
          <p>
            {`Since 2002, we've been delivering purpose-built solutions for`}
            {`accounting professionals and their connected clients. Our focus has`}
            {`been clear: To help the profession continually progress by providing`}
            {`secure, advanced and easy-to-use solutions and services.`}
          </p>
        </div>
      </div>
      {/* Bottom */}
      <div className={`footer-bottom`}>
        {`© `}
        {(new Date).getFullYear ()}
        {` `}
        {`Rightworks. All rights reserved.`}
      </div>
    </footer>
  );
};
export default Footer;
