import React from "react";
import award1 from "../assets/2.webp";
import award2 from "../assets/4.webp";
import award3 from "../assets/5.webp";
import {
  FaBuilding, FaBriefcase, FaPhoneAlt,
} from "react-icons/fa";
const GetStarted = ()=>{
  return (
    <div className={`getstarted-section`}>
      <div className={`getstarted-container`}>
        {/* LEFT CONTENT */}
        <div className={`getstarted-left`}>
          <h1>
            {`Ready to get started? `}
            <br/>
            {` `}
            <span className={`highlight`}>
              {`Let’s talk.`}
            </span>
          </h1>
          <p>
            {`Fill out and submit our contact form or schedule a meeting below to`}
            {`connect with a sales consultant. We’ll work 1:1 with you to:`}
          </p>
          <ul>
            <li>
              {`Review your cloud hosting and security requirements`}
            </li>
            <li>
              {`Identify the right products and solutions for your needs`}
            </li>
            <li>
              {`Customize a pricing plan that works for you`}
            </li>
          </ul>
          <p>
            {`Want to speak with someone right away? Call`}
            {` `}
            <a href={`tel:8669315402`}>
              {`866.931.5402`}
            </a>
            {`.`}
          </p>
          {/* AWARDS ICONS */}
          <div className={`award-icons`}>
            <img alt={`Award 1`} src={award1}/>
            <img alt={`Award 2`} src={award2}/>
            <img alt={`Award 3`} src={award3}/>
          </div>
        </div>
        {/* RIGHT FORM */}
        <div className={`getstarted-form`}>
          <h2>
            {`Complete the form and we'll be in touch soon!`}
          </h2>
          <p className={`required`}>
            {`“*” indicates required fields`}
          </p>
          <form>
            <div className={`form-row`}>
              <input placeholder={`First name*`} type={`text`} required/>
              <input placeholder={`Last name*`} type={`text`} required/>
            </div>
            <div className={`form-row`}>
              <input placeholder={`Email*`} type={`email`} required/>
              <input placeholder={`Phone*`} type={`tel`}/>
            </div>
            <input placeholder={`Company*`} type={`text`} required/>
            <div className={`form-row`}>
              <select>
                <option>
                  {`Alabama`}
                </option>
                <option>
                  {`California`}
                </option>
                <option>
                  {`New York`}
                </option>
              </select>
              <select>
                <option>
                  {`United States or US Territories`}
                </option>
                <option>
                  {`Canada`}
                </option>
                <option>
                  {`UK`}
                </option>
              </select>
            </div>
            <select required>
              <option>
                {`Which describes you?*`}
              </option>
              <option>
                {`Individual`}
              </option>
              <option>
                {`Business`}
              </option>
            </select>
            <div className={`checkbox-row`}>
              <input type={`checkbox`}/>
              <label>
                {` `}
                {`Sign me up to receive news, product updates and event invites`}
              </label>
            </div>
            <button className={`submit-btn`} type={`submit`}>
              {`SUBMIT →`}
            </button>
          </form>
        </div>
      </div>
      {/* CONSULTATION SECTION */}
      <div className={`consultation-section`}>
        <h2>
          {`Book a 30-minute consultation`}
        </h2>
        <p>
          {`Select your business type to schedule an appointment with one of our sales consultants.`}
        </p>
        <div className={`consultation-boxes`}>
          <div className={`consult-box`}>
            <FaBuilding className={`consult-icon`}/>
            <h3>
              {`Schedule: Accounting firms`}
            </h3>
            <p>
              {`Whether you’re a small firm or a large firm, we can customize a plan to meet your unique needs.`}
            </p>
            <button className={`consult-btn`}>
              {`BOOK A CONSULTATION →`}
            </button>
          </div>
          <div className={`consult-box`}>
            <FaBriefcase className={`consult-icon`}/>
            <h3>
              {`Schedule: Small businesses`}
            </h3>
            <p>
              {`Find out how we can help you make your financial operations simpler, faster and more secure.`}
            </p>
            <button className={`consult-btn`}>
              {`BOOK A CONSULTATION →`}
            </button>
          </div>
          <div className={`consult-box`}>
            <FaPhoneAlt className={`consult-icon`}/>
            <h3>
              {`Call us today`}
            </h3>
            <p>
              {`We’re here to help, so if you’d like to speak with someone right away just give us a call.`}
            </p>
            <button className={`consult-btn purple`}>
              {`CALL 866.931.5402 →`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
