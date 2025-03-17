import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
    1: {
        title: 'Perfect Tips For a Dream Wedding',
        date: 'March 25, 2025',
        image: '/Images/wedding.jpg',
        content: 'Planning a wedding can be overwhelming. Here are some tips to make your big day perfect. Start with a budget, choose a theme, and find the perfect venue...',
        fullContent: '1. Set a budget that suits your vision. 2. Choose a theme that reflects your personality. 3. Find the perfect venue early. 4. Book vendors in advance. 5. Personalize your ceremony and reception. 6. Plan a rehearsal to ensure smooth coordination. 7. Capture every moment with a professional photographer. 8. Don’t forget to enjoy your special day!'
    },
    2: {
        title: 'Corporate Event Success Tips',
        date: 'April 10, 2025',
        image: '/Images/gallery2.jpg',
        content: 'A successful corporate event requires meticulous planning and organization. Here are strategies to ensure everything goes smoothly, from guest management to event flow...',
        fullContent: '1. Define clear objectives and goals. 2. Create a detailed agenda. 3. Select a suitable venue. 4. Plan engaging activities. 5. Offer networking opportunities. 6. Provide excellent catering. 7. Gather feedback to measure success.'
    },
    3: {
        title: 'Best Catering Ideas for Your Event',
        date: 'May 15, 2025',
        image: '/Images/cateringservice.jpeg',
        content: 'Food is a crucial aspect of any event. Explore unique catering ideas that will leave a lasting impression on your guests and make your event unforgettable...',
        fullContent: '1. Offer a variety of cuisines. 2. Set up live cooking stations. 3. Include vegetarian and vegan options. 4. Offer personalized desserts. 5. Hire experienced staff. 6. Incorporate local flavors and ingredients.'
    }
};

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData[id];
    const [showFullContent, setShowFullContent] = useState(false);

    const handleReadMore = () => {
        setShowFullContent(true);
    };

    const handleClose = () => {
        setShowFullContent(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                    <p className="text-gray-400 mb-4">{blog.date}</p>
                    <p className="text-lg leading-relaxed">{blog.content}</p>
                    <div className="mt-6 text-center">
                        <button onClick={handleReadMore} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            {showFullContent && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl text-white">
                        <h2 className="text-2xl font-bold mb-4">{blog.title} - Full Content</h2>
                        <p className="text-gray-300 mb-6">{blog.fullContent}</p>
                        <button onClick={handleClose} className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-all">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogDetails;
