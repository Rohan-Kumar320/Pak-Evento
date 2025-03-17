import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  const details = [
    {
      id: 1,
      name: "Wedding Planning",
      description: "We plan elegant and memorable weddings, offering complete event coordination, decoration, and catering. Let us make your dream day flawless and unforgettable.",
      image: "Images/wedding.jpg",
    },
    {
      id: 2,
      name: "Corporate Events",
      description: "Our corporate event planning services ensure that your business gatherings run smoothly. From conferences to gala dinners, we handle every detail with precision.",
      image: "Images/gallery1.jpg",
    },
    {
      id: 3,
      name: "Catering Service",
      description: "Delight your guests with gourmet cuisine crafted by our expert chefs. We offer diverse menu options to suit any event or dietary requirement.",
      image: "Images/cateringservice.jpeg",
    },
  ]
  return (
    
<div
  className="relative min-h-screen flex flex-col items-start justify-center bg-cover bg-center text-white px-6 py-12"
  style={{
    backgroundImage: "url('/Images/SliderImg4.jpeg')",
  }}
>
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text at the Start (Top-Left) */}
  <div className="relative z-10 text-left mx-auto container  max-w-5xl">
    <h1 className="text-3xl md:text-5xl font-bold uppercase">
      A Range of Services
    </h1>
    <h2 className="text-lg md:text-2xl font-medium mt-2">
      Adapted to Your Needs
    </h2>
  </div>

  {/* Cards Container */}
  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 z-10 mx-auto">
    {details.map((item, index) => (
      <div
        key={index}
        className="bg-transparent bg-opacity-10 backdrop-blur-md shadow-lg overflow-hidden w-80 text-start transform transition-all hover:scale-105"
      >
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h5 className="text-xl font-bold mb-2 text-white">{item.name}</h5>
          <p className="text-gray-300 text-sm">{item.description}</p>
          <button className="border-2 mt-4 px-4 py-2 text-white hover:text-cyan-300 transition">
            <Link to={`/viewdetail/${item.id}`}>View Detail</Link>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    )
}

export default Cards