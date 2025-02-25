import React, { useState } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

const Menu = () => {
  const handleClick = () => {
    toast.success("Your order has been placed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [quantities, setQuantities] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const food = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWxuA6FX2OKRNFz_4MLNiHdYWq3rqdIpEPg&s",
      title: "Onion Samosa",
      price: "$15",
    },
    {
      img: "https://wallpapers.com/images/hd/samosaswith-chutneys-61vnlhkcnwcjjyr6-61vnlhkcnwcjjyr6.png",
      title: "Potato Samosa",
      price: "$15",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2B2zoFJ_jFe4mw_kEVwozaywDdFqZ8blyg&s",
      title: "Chicken Samosa",
      price: "$20",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBBluAqTnXkW3WZ9ztHhVkVOKM3pqKjuXUw&s",
      title: "Mushroom Samosa",
      price: "$15",
    },
    {
      img: "https://www.pngkit.com/png/full/257-2577683_paneer-samosa.png",
      title: "Paneer Samosa",
      price: "$15",
    },
    {
      img: "https://thomsonline.in/wp-content/uploads/2020/07/Thoms-chicken-samosa-122.jpg",
      title: "Meal Maker Samosa",
      price: "$15",
    },
  ];

  const updateQuantity = (itemTitle, operation) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[itemTitle] || 0;
      let newQuantity = currentQuantity;

      if (operation === "increment") {
        newQuantity = currentQuantity + 1;
      } else if (operation === "decrement" && currentQuantity > 0) {
        newQuantity = currentQuantity - 1;
      }

      return {
        ...prevQuantities,
        [itemTitle]: newQuantity,
      };
    });
  };

  const toggleFavorite = (title) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(title)) {
        return prevFavorites.filter((item) => item !== title);
      } else {
        return [...prevFavorites, title];
      }
    });
  };

  const filteredFood = food.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-orange-100 min-h-screen">
      <div className="container mx-auto p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600 mb-4 sm:mb-0">
            Our Menu
          </h1>
          <div className="flex items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 p-3 rounded-l-md w-full sm:w-auto focus:ring-2 focus:ring-orange-400"
            />
            <button className="bg-orange-600 text-white p-3 rounded-r-md hover:bg-orange-500">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFood.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-600 text-center mb-4">
                  {item.price}
                </p>
                <div className="flex flex-col items-center">
                  {/* Favorite Button */}
                  <button
                    className={`w-full py-2 font-semibold rounded-md mb-4 ${
                      favorites.includes(item.title)
                        ? "bg-orange-400 text-white"
                        : "bg-orange-600 text-white"
                    }`}
                    onClick={() => toggleFavorite(item.title)}
                  >
                    <FaHeart
                      className={`inline-block mr-2 ${
                        favorites.includes(item.title)
                          ? "text-white"
                          : "text-white"
                      }`}
                    />
                    {favorites.includes(item.title)
                      ? "Remove from Favorites"
                      : "Add to Favorites"}
                  </button>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <button
                      onClick={() => updateQuantity(item.title, "decrement")}
                      className="bg-red-500 text-white px-5 py-2 rounded-full"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">
                      {quantities[item.title] || 0}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.title, "increment")}
                      className="bg-green-500 text-white px-5 py-2 rounded-full"
                    >
                      +
                    </button>
                  </div>

                  {/* Order Button */}
                  <button
                    onClick={handleClick}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-6 rounded-lg hover:from-orange-600 hover:to-orange-500 transition duration-300"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toast Notification */}
        <ToastContainer />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Menu;
