import { Heading, Logo, Button, LinkText, Join, Login } from "../Reusable";
// import { useLanguage } from "../../contexts";
// import { useLanguageHandler } from "../../hooks";
export const Landing = () => {
  // const { languageState } = useLanguage();
  // const { languageHandler } = useLanguageHandler();
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 py-24 px-24">
        <div className="border px-12 flex flex-col items-center justify-center w-100">
          <div className="pb-10 text-justify">
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet, consectetur adip
          </div>
          <div>
            <button className="bg-blue-400 p-4">EXPLORE NOW</button>
          </div>
        </div>
        <div className="">
          <img src="images/test_hero.svg" alt="test_hero" width="400" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        Grow Your NetWork
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-24">
        <div className="bg-red-500">
          <img
            src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            alt="pic1"
          />
        </div>
        <div className="bg-blue-500">
          <div>Will help you on the digital map through our courses</div>
          <div>GET STARTED NOW !!</div>
        </div>
        <div className="bg-red-500">
          <img
            src="https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            alt="pic1"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-24">
        <div className="bg-red-500">
          <div>About</div>
          <div>About Description</div>
        </div>
        <div className="bg-blue-500">
          <div>Location</div>
          <div>Mail</div>
          <div>Linkedin</div>
          <div>Phone</div>
        </div>
      </div>
    </div>
  );
};
