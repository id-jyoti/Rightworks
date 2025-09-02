import type React from "react";
import {
  useNavigate, Link,
} from "react-router-dom";
import {
  useState,
} from "react";
import "./ResetCode.css";
const ResetCode: React.FC = ()=>{
  const navigate = useNavigate ();

  const [
    message,
    setMessage,
  ] = useState<string | null> (null);

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault ();
    setMessage (`Your password has been reset successfully!`);
    setTimeout (()=>{
      navigate (`/`).catch ((err: unknown)=>{
        console.error (`Navigation failed:`, err);
      });
    }, 2000);
  };

  return (
    <div className={`reset-page`}>
      <div className={`reset-box`}>
        <h2>
          {`Enter Reset Code`}
        </h2>
        <p>
          {`Please enter the `}
          <b>
            {`reset code`}
          </b>
          {` `}
          {`we sent to your email, along with`}
          {`your new password.`}
        </p>
        <form onSubmit={handleResetPassword}>
          <label htmlFor={`email`}>
            {`Email`}
          </label>
          <input aria-label={`email`} id={`email`}
            placeholder={`user@website.com`}
            type={`email`}
            required
          />
          <label htmlFor={`code`}>
            {`Reset Code`}
          </label>
          <input aria-label={`code`} id={`code`}
            placeholder={`Enter reset code`}
            type={`text`}
            required
          />
          <label htmlFor={`password`}>
            {`New Password`}
          </label>
          <input aria-label={`password`}id={`password`}
            placeholder={`New password`}
            type={`password`}
            required
          />
          <button className={`primary`} type={`submit`}>
            {`Reset Password`}
          </button>
        </form>
        {message && <p className={`success-message`}>
          {message}
        </p>}
        <Link className={`signin-link`} to={`/loginpage`}>
          {`Return to sign in`}
        </Link>
      </div>
    </div>
  );
};
export default ResetCode;
