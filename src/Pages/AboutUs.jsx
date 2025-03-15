import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-6xl p-8 bg-white rounded-xl shadow-xl">
          <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
            At <span className="text-blue-600 font-semibold">Pak Evento</span>, we believe that every occasion tells a story, and our passion lies in crafting memorable experiences that last a lifetime. With years of experience and countless events hosted, we have grown from humble beginnings to become a trusted name in event management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img src="/Images/gallery1.jpg" alt="Event Planning" className="rounded-xl shadow-md w-full h-64 object-cover" />
              <p className="text-gray-600 text-center mt-4 px-4">
                Our commitment to excellence and personal touch make every event unique. From glamorous weddings to corporate galas, our team handles every detail with care and dedication.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-600 text-center mb-4 px-4">
                Whether it’s an intimate gathering or a grand celebration, our creative approach and meticulous planning ensure flawless execution. Let us make your dream event a reality.
              </p>
              <img src="/Images/gallery2.jpg" alt="Event Setup" className="rounded-xl shadow-md w-full h-64 object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img src="/Images/gallery1.jpg" alt="Memorable Events" className="rounded-xl shadow-md w-full h-64 object-cover" />
              <p className="text-gray-600 text-center mt-4 px-4">
                We take pride in delivering unforgettable experiences that exceed our clients' expectations. Our diverse portfolio showcases our dedication to quality and creativity.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-600 text-center mb-4 px-4">
                From managing logistics to designing captivating themes, we do it all with passion and precision. Trust us to bring your vision to life with professionalism and flair.
              </p>
              <img src="/Images/gallery3.jpg" alt="Client Satisfaction" className="rounded-xl shadow-md w-full h-64 object-cover" />
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our clients trust us to deliver seamless, stress-free experiences. We handle everything from planning and logistics to execution and post-event support, ensuring that your special moments are cherished forever.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              With our expertise and dedication, you can relax and enjoy your event while we take care of every detail. Choose Pak Evento to make your dreams come true!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
