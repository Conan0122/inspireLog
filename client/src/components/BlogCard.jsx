import React from "react";
import { NavLink } from "react-router-dom";

const BlogCard = ({ title, description, imageUrl, blogLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto my-4 font-Hachi">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-base tracking-tighter mt-2 font-light">{description}</p>

        {/* Read More Button */}
        <NavLink
          to={blogLink}
          className="block mt-4 text-center text-black bg-myamber hover:bg-myamber-dark py-2 rounded-full transition duration-200"
        >
          Read More
        </NavLink>
      </div>
    </div>
  );
};

export default BlogCard;
