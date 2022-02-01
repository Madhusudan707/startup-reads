import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer-distributed lg:flex justify-around items-center xl:flex flex-column">
      <div className="footer-left">
        <p className="text-2xl text-white">About Digitally Course</p>

        <p className="footer-links w-full text-sm font-light text-justify">
          Digitally course is about learning to reach customers via various
          digital channels like search engines, social media, email, and many
          more. Digitally course will make sure you learn the skill of online
          marketing by reaching your target audiences in a more powerful and
          accurate way through several digital channels, to create an impact and
          engage with them. Later, converting them to customers. It helps you to
          develop and manage marketing techniques for your company website. You
          will be certified by a Completion Certification after completing the
          digitally course and clearing the examinations.
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span></span>Sikanderpur DLF Phase 3, Sector 26,
            <br />
            Gurugram, Delhi 122002
          </p>
        </div>

        <div>{/* <i className="fa fa-phone"></i> */}</div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:info@digitallycourse.com">
              info@digitallycourse.com
            </a>
          </p>
        </div>
        <div>
          <i className="fa fa-linkedin"></i>
          <p>
            <a href="https://www.linkedin.com/company/digitally-course/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* <div className="footer-right hidden">
        <p className="footer-company-about">
          <p className="text-2xl text-white">Social Connect</p>
        </p>

        <div className="footer-icons ">
          <a href="!#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="!#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="!#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="!#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div> */}
      {/* <div className=" font-bold flex justify-center items-center text-white ">
        DigitallyCourse©2021
      </div> */}
    </footer>
  );
};
