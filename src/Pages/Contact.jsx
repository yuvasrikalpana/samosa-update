import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    toast.success("Your booking has been successfully submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <h2 className="text-xl font-semibold text-gray-600 mt-2">
            How to Get in Touch?
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            We're always happy to hear from you! Whether you have questions,
            feedback, or want to make a booking, feel free to reach out. Our
            team is here to help and ensure your satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800">Contact Info</h1>
            <div className="mt-4 space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-600">Address:</h2>
                <p className="text-gray-700 mt-2">
                  123 Main Street, Southuppakam, Melmaruvathur
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-600">Phone:</h2>
                <p className="text-gray-700 mt-2">+91 1234567890</p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-600">
                  Email Address:
                </h2>
                <p className="text-gray-700 mt-2">
                  kalpanachandrasekar@gmail.com
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-600">Follow Us:</h2>
                <div className="flex justify-start gap-6 mt-4 text-gray-700 text-3xl">
                  <FaFacebook className="hover:text-blue-500 transition duration-300" />
                  <FaTwitter className="hover:text-blue-400 transition duration-300" />
                  <FaInstagramSquare className="hover:text-pink-500 transition duration-300" />
                  <FaYoutube className="hover:text-red-500 transition duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800">Your Details</h1>
            <form className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="product"
                  className="block text-lg font-medium text-gray-600"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-lg font-medium text-gray-600"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter quantity"
                />
              </div>
              <button
                type="button"
                onClick={handleBooking}
                className="w-full py-3 bg-orange-500 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 transition duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Contact;
