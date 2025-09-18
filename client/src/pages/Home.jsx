import React from "react";
import BlogCard from "../components/BlogCard"; // Adjust the path as needed

const Home = () => {
  const blogs = [
    {
      title: "Blog Post 1",
      description: "This is a short description of the first blog post.",
      imageUrl: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with an actual image URL
      blogLink: "/blog/1", // Link to a detailed blog post page
    },
    {
      title: "Blog Post 2",
      description: "This is a short description of the second blog post.",
      imageUrl: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with an actual image URL
      blogLink: "/blog/2", // Link to a detailed blog post page
    },
    {
      title: "Blog Post 3",
      description: "This is a short description of the third blog post.",
      imageUrl: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with an actual image URL
      blogLink: "/blog/3", // Link to a detailed blog post page
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 font-Hachi">
      <h1 className="text-4xl text-white cursor-default font-extrabold tracking-wider uppercase text-center mb-8">Our Blogs</h1>

      {/* Displaying Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            imageUrl={blog.imageUrl}
            blogLink={blog.blogLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
