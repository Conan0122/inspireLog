import React, { useState } from "react";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send data to the server
    console.log({ title, description, content, image });
  };

  return (
    <div className="min-h-screen bg-myblack text-myamber flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 bg-myindigo rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-myamber mb-6 text-center">
          Create a Blog
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              className="block text-myamber font-semibold mb-2"
              htmlFor="title"
            >
              Blog Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-4 py-2 text-myblack bg-myoffwhite border border-myoffwhite rounded-lg focus:outline-none focus:ring-2 focus:ring-mycyan"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your blog title"
            />
          </div>

          {/* Description */}
          <div>
            <label
              className="block text-myamber font-semibold mb-2"
              htmlFor="description"
            >
              Short Description
            </label>
            <input
              id="description"
              type="text"
              className="w-full px-4 py-2 text-myblack bg-myoffwhite border border-myoffwhite rounded-lg focus:outline-none focus:ring-2 focus:ring-mycyan"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a short description"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label
              className="block text-myamber font-semibold mb-2"
              htmlFor="image"
            >
              Blog Image
            </label>
            <input
              id="image"
              type="file"
              className="block w-full text-myblack bg-myoffwhite border border-myoffwhite rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mycyan"
              onChange={handleImageUpload}
            />
          </div>

          {/* Content */}
          <div>
            <label
              className="block text-myamber font-semibold mb-2"
              htmlFor="content"
            >
              Blog Content
            </label>
            <textarea
              id="content"
              className="w-full px-4 py-2 text-myblack bg-myoffwhite border border-myoffwhite rounded-lg focus:outline-none focus:ring-2 focus:ring-mycyan"
              rows="8"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 text-myblack bg-myamber font-bold rounded-full hover:bg-myamber-dark transition-all duration-300"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreate;
