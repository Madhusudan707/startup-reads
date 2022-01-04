import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="text-2xl text-white">About Digitally Course</p>

        <p className="footer-links w-72 font-light text-justify">
          {/* <a href="!#" className="link-1">
            Home
          </a>

          <a href="!#">Blog</a>

          <a href="!#">Pricing</a>

          <a href="!#">About</a>

          <a href="!#">Faq</a>

          <a href="!#">Contact</a> */}
          Digitally Course is an e-learning platform which focuses on secondary
          school education in india
        </p>

        <p className="footer-company-name font-bold">DigitallyCourse©2021</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
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
    </footer>
  );
};
