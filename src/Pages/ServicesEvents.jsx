import React, { useState } from 'react';

function PreviousEvents({ events }) {
    return (
        <div className="my-12 bg-gradient-to-r from-blue-500 to-slate-600 p-8 rounded-xl shadow-2xl">
            <h2 className="text-5xl font-extrabold text-white mb-8 text-center">Previous Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src={event.image} alt={event.title} className="w-full h-56 object-cover rounded-lg mb-4 shadow-md hover:opacity-90 transition-opacity duration-300" />
                        <h3 className="text-3xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                        <p className="text-gray-600 text-lg">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function BookingForm({ title, fields }) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${title} Booking Submitted!`);
        console.log(`${title} Booking Data:`, formData);
    };

    return (
        <div className="p-10 bg-white bg-opacity-80 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto my-12">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">{title} Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {fields.map((field, index) => (
                    <input
                        key={index}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:shadow-xl transition duration-300"
                    />
                ))}
                <button type="submit" className="w-full bg-slate-700 hover:bg-black text-white py-4 rounded font-semibold transform hover:scale-105 transition duration-300">Submit</button>
            </form>
        </div>
    );
}

function EventPlanningForm() {
    const fields = [
        { type: 'text', name: 'eventName', placeholder: 'Event Name' },
        { type: 'date', name: 'eventDate', placeholder: 'Event Date' },
        { type: 'number', name: 'guests', placeholder: 'Number of Guests' },
        { type: 'text', name: 'eventType', placeholder: 'Event Type' },
        { type: 'text', name: 'location', placeholder: 'Location' },
        { type: 'text', name: 'requirements', placeholder: 'Additional Requirements' },
    ];
    const events = [
        { title: 'Royal Wedding', image: '/Images/serviceevent1.jpg', description: 'A grand wedding with royal decorations and catering.' },
        { title: 'Beach Party', image: '/Images/serviceevent2.jpg', description: 'A beautiful beachside setup with food and music.' },
        { title: 'Birthday Bash', image: '/Images/serviceevent3.jpg', description: 'A lively celebration with vibrant decorations and delicious cake.' },
        { title: 'Gala Dinner', image: '/Images/serviceevent4.jpg', description: 'An elegant formal dinner event with gourmet meals.' }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-700 to-blue-500 p-6">
            <BookingForm title="Event Planning" fields={fields} />
            <PreviousEvents events={events} />
        </div>
    );
}

function CateringBookingForm() {
    const fields = [
        { type: 'text', name: 'cuisineType', placeholder: 'Cuisine Type' },
        { type: 'number', name: 'guests', placeholder: 'Number of Guests' },
        { type: 'text', name: 'menuItems', placeholder: 'Preferred Menu Items' },
        { type: 'text', name: 'dietary', placeholder: 'Allergies/Dietary Preferences' },
        { type: 'date', name: 'cateringDate', placeholder: 'Catering Date' },
        { type: 'text', name: 'contact', placeholder: 'Contact Information' },
    ];
    const events = [
        { title: 'Corporate Lunch', image: '/Images/cateevent1.jpg', description: 'A formal corporate lunch with gourmet dishes.' },
        { title: 'Birthday Feast', image: '/Images/cateevent2.jpg', description: 'A festive birthday spread with cake and desserts.' },
        { title: 'Wedding Banquet', image: '/Images/cateevent3.jpg', description: 'A lavish feast with exquisite dishes and presentation.' }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-700 to-blue-500 p-6">
            <BookingForm title="Catering Service" fields={fields} />
            <PreviousEvents events={events} />
        </div>
    );
}

function DecorationBookingForm() {
    const fields = [
        { type: 'text', name: 'theme', placeholder: 'Theme' },
        { type: 'date', name: 'eventDate', placeholder: 'Event Date' },
        { type: 'text', name: 'venue', placeholder: 'Venue Address' },
        { type: 'text', name: 'colorScheme', placeholder: 'Color Scheme' },
        { type: 'text', name: 'decorationType', placeholder: 'Decoration Type' },
        { type: 'text', name: 'requests', placeholder: 'Additional Requests' },
    ];
    const events = [
        { title: 'Garden Wedding', image: '/Images/decorevent1.jpg', description: 'A stunning garden setup with flowers and lights.' },
        { title: 'Anniversary Decor', image: '/Images/decorevent2.jpg', description: 'Elegant decor for a memorable anniversary.' },
        { title: 'Themed Party', image: '/Images/decorevent3.jpg', description: 'Custom themes with creative decor elements.' }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-700 to-blue-500 p-6">
            <BookingForm title="Decoration Service" fields={fields} />
            <PreviousEvents events={events} />
        </div>
    );
}

export { EventPlanningForm, CateringBookingForm, DecorationBookingForm };
