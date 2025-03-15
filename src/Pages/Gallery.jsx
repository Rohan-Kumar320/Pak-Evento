import React from 'react';

const Gallery = () => {
    const images = [
        { id: 1, src: '/Images/gallery1.jpg', alt: 'Party Event' },
        { id: 2, src: '/Images/gallery3.jpg', alt: 'Wedding Event' },
        { id: 3, src: '/Images/gallery2.jpg', alt: 'Conference Event' },
        { id: 4, src: '/Images/SliderImg.jpg', alt: 'Festival Event' },
        { id: 5, src: '/Images/gallery5.jpeg', alt: 'Business Meeting' },
        { id: 6, src: '/Images/gallery4.jpeg', alt: 'Award Ceremony' },
        { id: 7, src: '/Images/gallery6.jpeg', alt: 'Music Concert' },
        { id: 8, src: '/Images/gallery7.jpeg', alt: 'Art Exhibition' },
        { id: 9, src: '/Images/gallery8.jpeg', alt: 'Fashion Show' },
        { id: 10, src: '/Images/gallery9.jpeg', alt: 'Workshop' },
        { id: 11, src: '/Images/gallery10.jpeg', alt: 'Sports Event' },
        { id: 12, src: '/Images/gallery11.jpg', alt: 'Cultural Event' },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="relative overflow-hidden rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-60 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition duration-300">
                            <span className="text-white text-lg font-semibold">{image.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
