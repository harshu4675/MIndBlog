import React from "react";
import { MoveRight, User } from "lucide-react";
import "./Styles/Home.css";

const Home = ({ blogPosts, handlePostClick }) => (
  <div className="home-container">
    {/* HERO SECTION */}
    <section className="home-hero">
      <h1 className="home-title">
        THE <span>CORE</span> ARCHIVE
      </h1>
      <p className="home-subtitle">
        Deep dives into the mechanics of the future. Exploration of code,
        design, and the systems that power tomorrow.
      </p>
    </section>

    {/* BLOG GRID */}
    <div className="blog-grid">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          onClick={() => handlePostClick(post)}
          className="blog-card"
        >
          <div className="blog-image-wrapper">
            <img src={post.image} alt={post.title} className="blog-image" />
          </div>

          <div className="blog-content">
            <span className="blog-category">{post.category}</span>

            <h3 className="blog-title">{post.title}</h3>

            <p className="blog-excerpt">{post.excerpt}</p>

            <div className="blog-footer">
              <div className="blog-author">
                <User size={12} /> <span>{post.author}</span>
              </div>
              <MoveRight className="blog-arrow" />
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default Home;
