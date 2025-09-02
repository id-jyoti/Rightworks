import type React from "react";
import {
  useNavigate, Link,
} from "react-router-dom";
import "./LoginPage.css";
const LoginPage: React.FC = ()=>{
  const navigate = useNavigate ();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault ();
    navigate (`/dashboard`).catch ((err: unknown)=>{
      console.error (`Navigation failed:`, err);
    });
  };

  return (
    <div className={`login-wrapper`}>
      <div className={`login-card`}>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label>
            {`Email`}
          </label>
          <input aria-label={`user@website.com`}
            placeholder={`user@website.com`}
            type={`email`}
            required
          />
          <label>
            {`Password`}
          </label>
          <input aria-label={`Password`}
            placeholder={`Password`}
            type={`password`}
            required
          />
          <button className={`signin-btn`} type={`submit`}>
            {`SIGN IN`}
          </button>
        </form>
        {/* Forgot password */}
        <div className={`links`}>
          <Link to={`/forgotpassword`}>
            {`Forgot password?`}
          </Link>
        </div>
        {/* Footer with dark background */}
        <div className={`login-footer-dark`}>
          <p>
            {`Questions? Go to our `}
            <Link to={`/support`}>
              {`status and support`}
            </Link>
            {` `}
            {`page.`}
          </p>
          <p className={`copyright`}>
            {`Copyright ©2025 Rightworks LLC. All rights reserved.`}
          </p>
          <p className={`policies`}>
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
    </div>
  );
};
export default LoginPage;
