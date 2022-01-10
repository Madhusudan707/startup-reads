import { Heading, Logo, Button, LinkText, Join, Login } from "../Reusable";
import { useLanguage } from "../../contexts";
import { useLanguageHandler } from "../../hooks";
export const Landing = () => {
  const { languageState } = useLanguage();
  const { languageHandler } = useLanguageHandler();
  return (
    <div className=" flex flex-col lg:border-0 w-96 h-screen lg:w-1/3 lg:h-2/3 justify-evenly items-center bg-blue-brand lg:rounded-lg lg:shadow-lg ">
      {/* <Heading
        text={languageState.data.startup_reads || "Digitally-Course"}
        nameClass="text-3xl lg:text-5xl text-white font-bold  "
      /> */}
      {/* <Logo nameClass="rounded-full w-24 h-24 lg:h-52 lg:w-52  shadow-md" /> */}
      <div className="flex justify-center w-full px-0 sm:px-10 md:px-16 lg:px-20">
        <img src="images/hero.png" alt="hero" className="lg:h-96" />
      </div>
      {/* <a href="#join">
        <Button
          text={
            languageState.data.join_startup_reads || "Join Digitally-Course"
          }
          nameClass=" p-2   w-72 text-2xl text-white rounded-lg hover:bg-gray-600 bg-red-500 "
        />
      </a> */}
      <a href="/home">
        <Button
          text="Explore Courses"
          nameClass=" p-2   w-72 text-2xl text-white rounded-lg hover:bg-gray-600 bg-red-500 "
        />
      </a>

      {/* <Button
          text="Continue As Guest"
          nameClass="bg-blue-brand p-2  w-72 text-2xl text-white rounded-lg "
        /> */}

      {/* <LinkText
        text={
          languageState.data.already_have_an_account ||
          "Already have an account?"
        }
      />
      <a href="#login" className="text-2xl hover:text-white">
        {languageState.data.login || "Login"}
      </a> */}
      <Join />
      <Login />
    </div>
  );
};
