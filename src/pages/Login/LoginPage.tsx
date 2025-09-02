import type React from "react";
import "./LoginPage.css";
const LoginPage: React.FC = ()=>{
  return (
    <div className={`login-wrapper`}>
      <div className={`login-card`}>
        {/* Form */}
        <form>
          <label>
            {`Email`}
          </label>
          <input aria-label={`user@website.com`} placeholder={`user@website.com`}
            type={`email`}
            required
          />
          <label>
            {`Password`}
          </label>
          <input aria-label={`Password`}placeholder={`Password`}
            type={`password`}
            required
          />
          <button className={`signin-btn`} type={`submit`}>
            {`SIGN IN`}
          </button>
        </form>
        {/* Forgot password */}
        <div className={`links`}>
          <a href={`/#`}>
            {`Forgot password?`}
          </a>
        </div>
        {/* Footer with dark background */}
        <div className={`login-footer-dark`}>
          <p>
            {`Questions? Go to our`}
            {` `}
            <a href={`/#`}>
              {`status and support`}
            </a>
            {` `}
            {`page.`}
          </p>
          <p className={`copyright`}>
            {`Copyright ©2025 Rightworks LLC. All rights reserved.`}
          </p>
          <p className={`policies`}>
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
    </div>
  );
};
export default LoginPage;
