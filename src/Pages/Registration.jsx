import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        phone: ""
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) tempErrors.email = "Invalid email format";
        if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
        if (!formData.age || formData.age < 18) tempErrors.age = "Age must be 18 or older";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.phone.match(/^\d{10}$/)) tempErrors.phone = "Phone number must be 10 digits";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully");
        }
    };

    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: "url('/Images/login_bg_photo.png')" }}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Registration Form</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold">Name:</label>
                        <input type="text" name="name" placeholder="John Kennedy" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block font-semibold">Email:</label>
                        <input type="email" name="email" placeholder="johnkennedy@gmail.com" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block font-semibold">Password:</label>
                        <input type="password" name="password" placeholder="********" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div>
                        <label className="block font-semibold">Confirm Password:</label>
                        <input type="password" name="confirmPassword" placeholder="********" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                    <div>
                        <label className="block font-semibold">Age:</label>
                        <input type="number" name="age" placeholder="18" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                    </div>
                    <div>
                        <label className="block font-semibold">Gender:</label>
                        <select name="gender" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                    </div>
                    <div>
                        <label className="block font-semibold">Phone Number:</label>
                        <input type="tel" name="phone" placeholder="1234567890" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
                </form>
                <p className="text-center mt-4">Already Have An Account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;
