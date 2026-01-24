import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Labs";
import ArticleDetail from "./components/ArticleDetail";
import Toast from "./components/Toast";
import "./App.css";
import blogPosts from "./data/blogPosts";

const App = () => {
  const [toast, setToast] = useState({ show: false, message: "" });
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SAVED BLOGS
  const [savedPosts, setSavedPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("savedBlogs")) || [];
  });

  useEffect(() => {
    localStorage.setItem("savedBlogs", JSON.stringify(savedPosts));
  }, [savedPosts]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentPage("article");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSavePost = (post) => {
    setSavedPosts((prev) => {
      const exists = prev.some((p) => p.id === post.id);

      if (exists) {
        setToast({ show: true, message: "❌ Removed from Saved" });
        return prev.filter((p) => p.id !== post.id);
      } else {
        setToast({ show: true, message: "✅ Blog Saved" });
        return [...prev, post];
      }
    });
  };

  return (
    <div className="app-root">
      <Navbar
        scrolled={scrolled}
        navigateTo={navigateTo}
        currentPage={currentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="app-content">
        {currentPage === "home" && (
          <Home blogPosts={blogPosts} handlePostClick={handlePostClick} />
        )}

        {currentPage === "about" && <About />}
        {currentPage === "labs" && <Labs />}

        {/* SAVED PAGE */}
        {currentPage === "saved" && (
          <div className="saved-page">
            <h1 className="saved-title">Saved Blogs</h1>

            {savedPosts.length > 0 ? (
              <Home blogPosts={savedPosts} handlePostClick={handlePostClick} />
            ) : (
              <p className="saved-empty">No saved blogs yet.</p>
            )}
          </div>
        )}

        {/* ARTICLE PAGE */}
        {currentPage === "article" && selectedPost && (
          <ArticleDetail
            selectedPost={selectedPost}
            navigateTo={navigateTo}
            toggleSavePost={toggleSavePost}
            isSaved={savedPosts.some((p) => p.id === selectedPost.id)}
          />
        )}
      </main>

      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: "" })}
      />

      <Footer />
    </div>
  );
};

export default App;
