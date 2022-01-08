import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer-distributed flex justify-around items-center">
      <div className="footer-left">
        <p className="text-2xl text-white">About Digitally Course</p>

        <p className="footer-links w-full text-sm font-light text-justify">
          {/* <a href="!#" className="link-1">
            Home
          </a>

          <a href="!#">Blog</a>

          <a href="!#">Pricing</a>

          <a href="!#">About</a>

          <a href="!#">Faq</a>

          <a href="!#">Contact</a> */}
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
