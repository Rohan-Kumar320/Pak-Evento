import React from "react";
import { useTheme } from "./ThemeContext";

const AttendeesTable = () => {
  const attendees = [
    { id: 1, name: "Alice Brown", email: "alice@example.com", phone: "555-1234" },
    { id: 2, name: "Bob Green", email: "bob@example.com", phone: "555-5678" },
  ];

  const { isDarkMode, toggleTheme } = useTheme();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this attendee?")) {
      console.log("Deleted attendee with ID:", id);
    }
  };

  return (
    <div className={`p-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} shadow-md rounded-xl mt-8 overflow-x-auto`}>
      <h2 className="text-xl font-bold mb-4">Other Attendees</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone Number</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <tr
              key={attendee.id}
              className={`${
                isDarkMode ? "even:bg-gray-800 hover:bg-gray-700" : "even:bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <td className="p-3 border">{attendee.id}</td>
              <td className="p-3 border">{attendee.name}</td>
              <td className="p-3 border">{attendee.email}</td>
              <td className="p-3 border">{attendee.phone}</td>
              <td className="p-3 border">
                <button
                  onClick={() => handleDelete(attendee.id)}
                  className={`text-red-500 hover:text-white bg-transparent hover:bg-red-600 px-2 py-1 rounded transition duration-200`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendeesTable;
