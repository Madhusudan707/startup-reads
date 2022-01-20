import { useEffect, useState } from "react";
import { ProductCard, Footer } from "../";
import { Widget, Loader } from "../Reusable";
import { useFetchLibrary } from "../../hooks";
import { Link } from "react-router-dom";

export const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const [courseID, setCourseID] = useState();
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

  const courses = [
    {
      id: "1",
      imgURL: "images/dm-1.jpg",
      courseName: "Basic Digital Marketing",
      desc: "Digital Marketing basics is understanding the study of a digital marketing concept that is widely known all around the world. Digital marketing is also known to the term ‘’Internet Marketing’’ referring to the marketing done on the internet.",
      actualPrice: "₹ 499/-",
      discountedPrice: "₹ 199/-",
    },
    {
      id: "2",
      imgURL: "images/dm-2.jpg",
      courseName: "Advance Digital Marketing",
      desc: "This online digital marketing certification course gives you an in-depth understanding and advanced knowledge of the eight most important digital marketing domains and for gaining domain experience to help you become industry-ready.",
      actualPrice: "₹ 999/-",
      discountedPrice: "₹ 499/-",
    },
    {
      id: "3",
      imgURL: "images/dm-3.jpg",
      courseName: "Digital Marketing AP",
      desc: "Digital Marketing associate program will give you an opportunity to implement the skills you learned in the Digital Marketing. Through dedicated mentoring sessions, you’ll learn how to solve a real-world, industry-aligned case studies.",
      actualPrice: "₹ 2999/-",
      discountedPrice: "₹ 1499/-",
    },
  ];
  return (
    <div>
      {/* <Widget /> */}
      {libraryLoading ? (
        <Loader toggle="opacity-50" />
      ) : (
        <>
          <div className="mt-24 lg:py-20 mx-5 lg:mx-20 mb-20">
            {/* <div className="flex justify-center w-full px-0 sm:px-10 md:px-16 lg:px-20">
              <img src="images/hero.png" alt="hero" className="lg:h-96" />
            </div> */}

            <div className="text-2xl font-bold text-center text-blue-400 pt-3  lg:text-4xl">
              Course Catalog
            </div>
            {/* <div className="text-sm font-light tracking-wider text-center lg:text-lg">
              Start Learning Smartly
            </div> */}
            {/* <div className="flex justify-center w-full mt-5">
              <a
                href="#courses"
                className="text-white bg-blue-brand text-center rounded-lg px-7 py-3 font-bold hover:bg-blue-500 hover:shadow-lg "
              >
                Explore Courses
              </a>
            </div> */}

            <div
              id="courses"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16 py-10"
            >
              {courses.map((item) => {
                return (
                  <div
                    className="border-2 border-blue-400 rounded-lg p-4 flex flex-col items-center"
                    key={item.id}
                    onClick={() => {
                      setCourseID(item.id);
                    }}
                  >
                    <div>
                      <img
                        src={item.imgURL}
                        style={{ width: "320px", height: "210px" }}
                        alt="course"
                      />
                    </div>
                    <div className="font-bold text-xl pt-3 pb-2">
                      {item.courseName}
                    </div>
                    <div
                      className={`${
                        readMore ? "" : "line-clamp-2"
                      } text-sm  font-light text-gray-700 tracking-wide text-justify`}
                    >
                      {item.desc}
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
                        {item.actualPrice}
                      </div>
                      <div className="font-bold pl-2">
                        {" "}
                        {item.discountedPrice}
                      </div>
                    </div>

                    <a
                      href="https://rzp.io/i/u8IlsRa"
                      className="text-white bg-blue-brand text-center rounded-lg w-full mt-2 py-3  hover:bg-blue-500 hover:shadow-lg "
                    >
                      <button className="font-bold">Buy Now</button>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* <ProductCard /> */}
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};
