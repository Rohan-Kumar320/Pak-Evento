import React, { useState } from 'react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
      const [errors, setErrors] = useState({});
    
      const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) tempErrors.email = "Invalid email format";
        if (!formData.message) tempErrors.message = "Message is required";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
          alert("Message sent successfully");
        }
      };
    
  return (
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6" style={{backgroundImage: "url(Images/contact_bg_image.png)"}}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/Images/contact_image.png" alt="Contact" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">Enter Your Name:</label>
              <input type="text" name="name" placeholder="John Kennedy" className="w-full p-2 border rounded" onChange={handleChange} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-semibold">Enter Your Email:</label>
              <input type="text" name="email" placeholder="e.g. johnkennedy@gmail.com" className="w-full p-2 border rounded" onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-semibold">Enter Your Comments/Message:</label>
              <textarea name="message" rows={4} placeholder="e.g. This is a good website..." className="w-full p-2 border rounded" onChange={handleChange}></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs