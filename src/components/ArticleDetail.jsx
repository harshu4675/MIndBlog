import React from "react";
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Calendar,
  User as UserIcon,
  Clock,
} from "lucide-react";
import ReadingProgress from "./ReadingProgress";
import "./Styles/ArticleDetail.css";

const ArticleDetail = ({
  selectedPost,
  navigateTo,
  toggleSavePost,
  isSaved,
}) => {
  if (!selectedPost) return null;

  return (
    <div className="article-page">
      <ReadingProgress />

      {/* HERO HEADER */}
      <header className="article-hero">
        <img
          src={selectedPost.image}
          className="hero-image"
          alt={selectedPost.title}
        />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <button onClick={() => navigateTo("home")} className="back-btn">
            <ArrowLeft size={14} /> Back
          </button>

          <h1 className="hero-title">{selectedPost.title}</h1>

          <div className="hero-meta">
            <span>
              <UserIcon size={14} /> {selectedPost.author}
            </span>
            <span>
              <Calendar size={14} /> {selectedPost.date}
            </span>
            <span>
              <Clock size={14} /> 5 MIN READ
            </span>
          </div>
        </div>
      </header>

      {/* ARTICLE BODY */}
      <article className="article-body">
        <p className="article-excerpt">{selectedPost.excerpt}</p>

        {selectedPost.content.split("\n").map((para, i) => {
          if (para.startsWith("##")) {
            return (
              <h2 key={i} className="article-heading">
                {para.replace("##", "")}
              </h2>
            );
          }
          return para.trim() && <p key={i}>{para}</p>;
        })}

        {/* ACTIONS */}
        <div className="article-actions">
          <button onClick={() => navigateTo("home")} className="home-link">
            <ArrowLeft size={14} /> Home
          </button>

          <div className="action-buttons">
            <button className="icon-btn">
              <Share2 size={18} />
            </button>

            <button
              onClick={() => toggleSavePost(selectedPost)}
              className={`icon-btn save-btn ${isSaved ? "saved" : "not-saved"}`}
            >
              <Bookmark size={18} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;
