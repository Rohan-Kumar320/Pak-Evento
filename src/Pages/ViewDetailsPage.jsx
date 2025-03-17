import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetailsPage = () => {
  const { id } = useParams();
  const serviceDetails = {
    1: {
      name: 'Wedding Planning',
      image: '/Images/serviceevent1.jpg',
      description: 'Our Wedding Planning service ensures a seamless and magical experience on your special day. From venue selection to floral arrangements, we take care of every detail, allowing you to cherish each moment.',
      title: 'Make Your Dream Wedding a Reality',
    },
    2: {
      name: 'Corporate Events',
      image: '/Images/gallery1.jpg',
      description: 'Our Corporate Event services are designed to impress. From conferences to product launches, we handle logistics, audio-visual support, and more to ensure a professional and memorable event.',
      title: 'Professional and Seamless Corporate Events',
    },
    3: {
      name: 'Catering Service',
      image: '/Images/cateringservice.jpeg',
      description: 'Our Catering Service offers a variety of delicious dishes, prepared with the freshest ingredients. Whether it’s a small gathering or a grand celebration, our team is ready to serve.',
      title: 'Delectable Cuisine Tailored to Your Event',
    }
  };

  const currentService = serviceDetails[id];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in ${currentService.name}!`);
  };

  return (
    <div className="min-h-0 bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-6">
      <div className="relative w-full h-72">
        <img src={currentService.image} alt={currentService.name} className="w-full h-full object-cover brightness-50 rounded-b-3xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white shadow-lg bg-gray-900/50 px-6 py-2 rounded-md">{currentService.name}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">{currentService.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{currentService.description}</p>
      </div>

      <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl ">
        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Register for This Service</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea name="message" placeholder="Message (Optional)" value={formData.message} onChange={handleChange} className="w-full p-4 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
          <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
