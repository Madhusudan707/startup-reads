import { useEffect, useState } from "react";
import { ProductCard, Footer } from "../";
import { Widget, Loader } from "../Reusable";
import { useFetchLibrary } from "../../hooks";
import { Link } from "react-router-dom";

export const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const { refresh, setRefresh, libraryLoading } = useFetchLibrary();
  useEffect(() => {
    (async () => {
      setRefresh(!refresh);
    })();
    //Below Line remove the useEffect dependency warning
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const readMoreHandler = () => {
    console.log("hello");
    setReadMore(!readMore);
  };
  return (
    <div>
      {/* <Widget /> */}
      {libraryLoading ? (
        <Loader toggle="opacity-50" />
      ) : (
        <>
          <div className="mt-24 lg:py-20 mx-5 lg:mx-20 mb-20">
            <div className="flex justify-center w-full px-0 sm:px-10 md:px-16 lg:px-20">
              <img src="images/hero.png" alt="hero" className="lg:h-96" />
            </div>

            <div className="text-2xl font-bold text-center text-blue-400 pt-8 pb-2 lg:text-4xl">
              Digitally Course
            </div>
            <div className="text-sm font-light tracking-wider text-center lg:text-lg">
              Start Learning Smartly
            </div>
            <div className="flex justify-center w-full mt-5">
              <a
                href="#courses"
                className="text-white bg-blue-brand text-center rounded-lg px-7 py-3 font-bold hover:bg-blue-500 hover:shadow-lg "
              >
                Explore Courses
              </a>
            </div>

            <div
              id="courses"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 py-20"
            >
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <a
                  href="#!"
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </a>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
              <div className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center">
                <div>
                  <img src="images/course.png" alt="course" />
                </div>
                <div className="font-bold text-xl pt-3 pb-2">Course Name</div>
                <div
                  className={`${
                    readMore ? "" : "line-clamp-2"
                  } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                >
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                  ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum
                  dolor sit amet lorem ipsum dolor sit amet
                </div>
                <div
                  onClick={readMoreHandler}
                  className="self-end text-xs text-blue-400 font-medium py-2"
                >
                  {readMore ? "Show Less" : "Read More"}
                </div>
                <div className="py-2 flex">
                  <div className="line-through font-bold text-blue-400">
                    ₹ 400/-
                  </div>
                  <div className="font-bold pl-2">₹ 200/-</div>
                </div>

                <button className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3 font-bold hover:bg-blue-500 hover:shadow-lg ">
                  Buy Now
                </button>
              </div>
            </div>

            {/* <ProductCard /> */}
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};
