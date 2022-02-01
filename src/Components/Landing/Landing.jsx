import { Heading, Logo, Button, LinkText, Join, Login } from "../Reusable";
// import { useLanguage } from "../../contexts";
// import { useLanguageHandler } from "../../hooks";
import { Link } from "react-router-dom";
export const Landing = () => {
  // const { languageState } = useLanguage();
  // const { languageHandler } = useLanguageHandler();
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 py-20 lg:py-12 lg:px-48  ">
        <div className=" lg:px-12 flex flex-col items-center justify-center w-100 hidden">
          <div className="pb-4 text-2xl lg:text-4xl text-justify bg-black text-white p-4 font-bold">
            Let's get digital.
          </div>
          <div className="pb-4 pt-4 text-1xl lg:text-4xl text-justify">
            Our New Courses are here
          </div>
          <div className="hidden">
            <Link to="/Courses">
              <button className="bg-blue-900 text-white font-bold rounded-lg p-4">
                EXPLORE NOW
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center hidden">
          <img
            src="images/connecting_team.svg"
            className="w-72 lg:w-96 "
            alt="hero"
            width="400"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center font-bold  text-2xl lg:text-4xl pt-4 ">
        <div className="border p-4 hidden">Grow Your NetWork</div>
        <div className="pb-4 text-2xl lg:text-4xl text-justify bg-black text-white p-4 font-bold">
          Let's get digital.
        </div>
        <div className="pb-4 pt-4 text-1xl lg:text-4xl text-justify">
          Our New Courses are here
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-24">
        <div className="flex justify-center items-center">
          <img
            src="images/hero2.svg"
            className="w-96 lg:flex hidden"
            alt="connecting team"
          />
          <img
            src="images/social_girl.svg"
            className="w-96 pt-12 lg:pt:0 lg:hidden flex "
            alt="social girl"
          />
        </div>
        <div className="flex flex-col justify-center item-center  justify-content">
          <div className="text-center  text-2xl lg:text-2xl pt-12 lg:pt-0 lg:pb-4">
            We will help you on the digital map,
          </div>
          <div className="text-center text-2xl pb-4">through our courses.</div>
          <div className="  w-100 flex item-center justify-center text-2xl lg:text-3xl pt-12 pb-8 lg:pb-0 lg:pt-8  text-white">
            {/* <div className=" bg-black p-4">GET STARTED NOW !!</div> */}
            <Link to="/Courses">
              <button className="bg-blue-900 text-white font-bold rounded-lg p-4">
                EXPLORE NOW
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <img
            src="images/social_girl.svg"
            className="w-96 pt-12 lg:pt:0 lg:flex hidden "
            alt="social girl"
          />
        </div>
      </div>
    </div>
  );
};
