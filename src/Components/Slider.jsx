import React from 'react'

const Slider = () => {
    return (
    <div className="relative w-full h-[500px]">
    <img src="/Images/SliderImg.jpeg" alt="Event Management" className="w-full h-full object-cover brightness-50" />
    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center text-white">
        <h1 className="text-4xl font-extrabold uppercase tracking-wide">
        Event Management
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
        We bring your ideas to life with seamless planning, flawless execution, and memorable experiences. 
        From corporate gatherings to grand celebrations, we ensure every detail is perfect.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
        Learn More
        </button>
    </div>
    </div>
    
    )
}

export default Slider