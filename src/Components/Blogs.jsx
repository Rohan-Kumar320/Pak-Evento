import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const items = [
    {
      ccid: 1,
      image: "/Images/wedding.jpg",
      title: "10 Wedding Tips for a Stress-Free Celebration",
      title2: "March 25, 2025",
    },
    {
      ccid: 2,
      image: "/Images/gallery2.jpg",
      title: "Event Planning Made Easy: A Step-by-Step Guide",
      title2: "April 10, 2025",
    },
    {
      ccid: 3,
      image: "/Images/cateringservice.jpeg",
      title: "Catering Essentials: Impress Your Guests",
      title2: "May 15, 2025",
    },
  ];

  return (
    <>
      <div
        id="Blogs"
        className="relative bg-cover bg-center text-white py-16"
        style={{ backgroundImage: "url('/Images/SliderImg5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-xl sm:text-3xl md:text-4xl pt-3 font-roboto">
              Latest Blogs & News
            </p>
            <p className="text-sm md:text-xl pt-2 font-roboto text-gray-300">
              Inspiring Success Stories
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-lg group transition-all duration-500 bg-white/10 backdrop-blur-lg hover:bg-red-400"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="text-white border-2 border-white rounded-md py-2 px-4 hover:bg-white hover:text-black transition-all">
                      <Link
                        to={`/blog/${item.ccid}`}
                      >
                        View More
                      </Link>{" "}
                    </button>
                  </div>
                  <p className="uppercase text-start px-3 py-1.5 font-semibold text-sm font-roboto text-white">
                    {item.title}
                  </p>
                  <p className="text-start px-3 py-1.5 text-xs font-roboto text-white">
                    {item.title2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
