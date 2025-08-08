import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: data.error || "Something went wrong" });
      }
    } catch (error) {
      setStatus({ success: false, message: "Server error. Try again later." });
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded h-32"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className={`mt-6 text-center ${status.success ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </p>
      )}
    </div>
  );
};

export default Contact;
