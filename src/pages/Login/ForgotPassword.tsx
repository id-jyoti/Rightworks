import type React from "react";
import "./ForgotPassword.css";
const ForgotPassword: React.FC = ()=>{
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
        />
        {/* Buttons */}
        <div className={`button-group`}>
          <button className={`secondary`}>
            {`I HAVE A CODE`}
          </button>
          <button className={`primary`}>
            {`SEND EMAIL`}
          </button>
        </div>
        {/* Sign in link */}
        <a className={`signin-link`} href={`/#`}>
          {`Return to sign in`}
        </a>
      </div>
      {/* Footer */}
      <div className={`forgot-footer`}>
        <p>
          {`Questions? Go to our`}
          {` `}
          <a href={`/#`}>
            {`status and support`}
          </a>
          {` `}
          {`page.`}
          <br/>
          {`Copyright ©2025 Rightworks LLC. All rights reserved.`}
        </p>
        <p>
          <a href={`/#`}>
            {`Terms and Conditions`}
          </a>
          {` `}
          {`|`}
          {` `}
          <a href={`/#`}>
            {`Privacy Policy`}
          </a>
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;
