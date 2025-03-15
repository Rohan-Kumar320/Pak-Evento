import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const ExhibitorTable = () => {
    const { isDarkMode } = useTheme();
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedExhibitor, setSelectedExhibitor] = useState(null);

    const exhibitors = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", eventDate: "2024-08-12", eventType: "Conference" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", eventDate: "2024-09-15", eventType: "Workshop" },
    ];

    const handleDelete = (exhibitor) => {
        if (window.confirm("Are you sure you want to delete this exhibitor?")) {
            console.log("Deleted exhibitor with ID:", exhibitor.id);
        }
    };
    const handleUpdate = (exhibitor) => {
        if (window.confirm("Are you sure you want to Update this exhibitor?")) {
            console.log("Updated exhibitor with ID:", exhibitor.id);
        }
    };

    return (
        <div className={`p-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md rounded-xl mt-8 overflow-x-auto`}>
            <h2 className="text-xl font-bold mb-4">Exhibitors</h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
                        <th className="p-3 border">S.No</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Email</th>
                        <th className="p-3 border">Phone Number</th>
                        <th className="p-3 border">Date of Event</th>
                        <th className="p-3 border">Event Type</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exhibitors.map((exhibitor) => (
                        <tr key={exhibitor.id} className={`${isDarkMode ? "even:bg-gray-800 hover:bg-gray-700" : "even:bg-gray-50 hover:bg-gray-100"}`}>
                            <td className="p-3 border">{exhibitor.id}</td>
                            <td className="p-3 border">{exhibitor.name}</td>
                            <td className="p-3 border">{exhibitor.email}</td>
                            <td className="p-3 border">{exhibitor.phone}</td>
                            <td className="p-3 border">{exhibitor.eventDate}</td>
                            <td className="p-3 border">{exhibitor.eventType}</td>
                            <td className="p-3 border">
                                <button
                                    onClick={() => handleDelete(exhibitor)}
                                    className={`text-red-500 hover:text-white bg-transparent hover:bg-red-600 px-2 py-1 rounded transition duration-200`}
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleUpdate(exhibitor)}
                                    className={`text-blue-500 hover:text-white bg-transparent hover:bg-blue-600 px-2 py-1 rounded transition duration-200`}
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExhibitorTable;
