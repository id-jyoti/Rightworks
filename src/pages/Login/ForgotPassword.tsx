import type React from "react";
import {
  useNavigate, Link,
} from "react-router-dom";
import {
  useState,
} from "react";
import "./ForgotPassword.css";
const ForgotPassword: React.FC = ()=>{
  const navigate = useNavigate ();

  const [
    message,
    setMessage,
  ] = useState<string | null> (null);

  const handleSendEmail = ()=>{
    setMessage (`Password reset email sent! Check your inbox.`);
  };

  const handleIHaveCode = ()=>{
    navigate (`/resetcode`).catch ((err: unknown)=>{
      console.error (`Navigation failed:`, err);
    });
  };

  return (
    <div className={`forgot-page`}>
      <div className={`forgot-box`}>
        {/* Title */}
        <h2>
          {`Reset your password`}
        </h2>
        {/* Instructions */}
        <p>
          {`Enter your account email and select `}
          <b>
            {`SEND EMAIL`}
          </b>
          {`. Then, check`}
          {`your inbox (or spam folder) for our email. If you've already received`}
          {`a reset code, enter your email and click`}
          <b>
            {`I HAVE A CODE`}
          </b>
          {`.`}
        </p>
        {/* Email input */}
        <label htmlFor={`email`}>
          {`Email`}
        </label>
        <input aria-label={`user@website.com`}
          id={`email`}
          placeholder={`user@website.com`}
          type={`email`}
          required
        />
        {/* Buttons */}
        <div className={`button-group`}>
          <button className={`secondary`} onClick={handleIHaveCode}>
            {`I HAVE A CODE`}
          </button>
          <button className={`primary`} onClick={handleSendEmail}>
            {`SEND EMAIL`}
          </button>
        </div>
        {/* ✅ Success message */}
        {message && <p className={`success-message`}>
          {message}
        </p>}
        {/* Sign in link */}
        <Link className={`signin-link`} to={`/loginpage`}>
          {`Return to sign in`}
        </Link>
      </div>
      {/* Footer */}
      <div className={`forgot-footer`}>
        <p>
          {`Questions? Go to our`}
          {` `}
          <Link to={`/support`}>
            {`status and support`}
          </Link>
          {` `}
          {`page.`}
          <br/>
          {`Copyright ©2025 Rightworks LLC. All rights reserved.`}
        </p>
        <p>
          <Link to={`/termsandconditions`}>
            {`Terms and Conditions`}
          </Link>
          {` `}
          {`|`}
          {` `}
          <Link to={`/privacy`}>
            {`Privacy Policy`}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;
