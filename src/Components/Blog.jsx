import React from "react";
import Image from "../../public/assets/bloge/Image.png";
import Image2 from "../../public/assets/bloge/Image2.png";
import Image3 from "../../public/assets/bloge/Image3.png";
import Image4 from "../../public/assets/bloge/Image4.png";
import AI from "../../public/assets/bloge/Image 12.png";
import "../Components/CSS/blog/Blog.css";

const blogData = [
  {
    image: Image,
    title: "Cheer Life Through Reels",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam volutpat eros at varius ultricies.",
  },
  {
    image: Image2,
    title: "Cheer Life Through Reels",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam volutpat eros at varius ultricies.",
  },
  {
    image: Image3,
    title: "Cheer Life Through Reels",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam volutpat eros at varius ultricies.",
  },
  {
    image: Image4,
    title: "Cheer Life Through Reels",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullam volutpat eros at varius ultricies.",
  },
];

const BlogCard = ({ image, title, text }) => {
  return (
    <div className="blog-cart">
      <img src={image} alt={title} />
      <h2 className="life-through">{title}</h2>
      <p className="blog-cart-info">{text}</p>
      <a href="#" className="read-more">
        read more
      </a>
    </div>
  );
};

const Blog = () => {
  return (
    <main className="bloge-page-main-container">
      <section className="bloge-page-main">
        <h2 className="blog-head">blog</h2>
        <section className="blog-cart-container">
          {blogData.map((item, index) => (
            <BlogCard key={index} {...item} />
          ))}
        </section>
      </section>
      <section className="ai-photo">
          <img src={AI} alt="AI Illustration" />
        </section>
    </main>
  );
};

export default Blog;
