import React, { useState } from 'react';
import contact from "../assets/images/contact.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="contact-us container mx-auto p-6 text-white"
      style={{
        backgroundImage: `url(${contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Contact Us
      </h1>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 bg-white rounded-lg"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded-lg hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
