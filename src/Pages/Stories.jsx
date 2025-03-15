import React from 'react';

const OurStories = () => {
    const stories = [
        {
            id: 1,
            title: 'How It All Began',
            description: 'Our journey started with a small event...',
            image: '/Images/gallery2.jpg',
        },
        {
            id: 2,
            title: 'Our Biggest Event',
            description: 'We hosted a grand wedding with over 500 guests...',
            image: '/Images/gallery5.jpeg',
        },
        {
            id: 3,
            title: 'Client Testimonials',
            description: 'Hear from our amazing clients...',
            image: '/Images/gallery8.jpeg',
        },
        {
            id: 4,
            title: 'Destination Wedding Bliss',
            description: 'An unforgettable beachside wedding experience...',
            image: '/Images/gallery10.jpeg',
        },
        {
            id: 5,
            title: 'Corporate Event Success',
            description: 'Helping businesses shine through professional events...',
            image: '/Images/gallery11.jpg',
        },
        {
            id: 6,
            title: 'Magical Themed Parties',
            description: 'Bringing dreams to life with stunning themes...',
            image: '/Images/gallery6.jpeg',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-800">Our Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                    >
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-64 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 p-4 flex flex-col justify-end rounded-xl">
                            <h3 className="text-white text-2xl font-bold">{story.title}</h3>
                            <p className="text-gray-300 mt-2">{story.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurStories;
