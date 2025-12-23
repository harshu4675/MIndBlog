import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Labs";
import ArticleDetail from "./components/ArticleDetail";
import {
  Cpu,
  Zap,
  Rocket,
  Globe,
  Shield,
  Heart,
  FlaskConical,
  Globe as FooterIcon,
} from "lucide-react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPost, setSelectedPost] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Quantum Computing: The Next Frontier",
      excerpt:
        "How qubits are set to redefine computational limits and break legacy encryption standards...",
      author: "Dr. Ishan Malhotra",
      date: "Dec 15, 2025",
      category: "Future Tech",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      icon: <Cpu />,
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      excerpt:
        "A deep dive into useEffect and useMemo for performance optimization.",
      author: "Arjun Mehta",
      date: "Oct 12, 2023",
      category: "Development",
    },
    {
      id: 3,
      title: "Why Vite is Faster than Webpack",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      excerpt:
        "Exploring the power of ES Modules and why development speed matters.",
      author: "Kavya Iyer",
      date: "Oct 15, 2023",
      category: "Tools",
    },
    {
      id: 4,
      title: "Styling with Tailwind CSS",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      excerpt:
        "How utility-first CSS changed the way we build modern user interfaces.",
      author: "Aarav Sharma",
      date: "Oct 18, 2023",
      category: "Design",
    },
    {
      id: 5,
      title: "The Future of Web Development",
      image:
        "https://cdn.webdura.in/wp-content/uploads/2023/11/30094227/shutterstock_396058687-scaled.jpg",
      excerpt:
        "What to expect from AI integration and server-side components in 2024.",
      author: "Ananya Verma",
      date: "Oct 20, 2023",
      category: "Trends",
    },
    {
      id: 6,
      title: "Node.js Best Practices",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
      excerpt: "Structuring your backend for scalability and maintainability.",
      author: "Harsh Solanki",
      date: "Oct 22, 2023",
      category: "Backend",
    },
    {
      id: 7,
      title: "Responsive Design Secrets",
      image:
        "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?q=80&w=800&auto=format&fit=crop",
      excerpt:
        "Beyond media queries: using Grid and Flexbox for fluid layouts.",
      author: "Vikram S.",
      date: "Oct 25, 2023",
      category: "Frontend",
    },
    {
      id: 8,
      title: "Getting Started with TypeScript",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
      excerpt:
        "How to add type safety to your Javascript projects without the headache.",
      author: "Devansh K.",
      date: "Oct 28, 2023",
      category: "Development",
    },
    {
      id: 9,
      title: "Neuralink & The Human Interface",
      excerpt:
        "Exploring the ethical and technical challenges of direct brain-to-computer communication protocols...",
      author: "Amit Agarwal",
      date: "Nov 28, 2025",
      category: "BioTech",
      image:
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
      icon: <Zap />,
    },
    {
      id: 10,
      title: "Mars Colony Architecture",
      excerpt:
        "Designing sustainable, radiation-shielded habitats using 3D printed Martian regolith...",
      author: "Shradha Sharma",
      date: "Oct 12, 2025",
      category: "Space",
      image:
        "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
      icon: <Rocket />,
    },
    {
      id: 11,
      title: "Decentralized Web 4.0 Protocols",
      excerpt:
        "Moving beyond blockchain to a truly autonomous, peer-to-peer internet infrastructure...",
      author: "Varun Krishnan ",
      date: "Sep 30, 2025",
      category: "Web",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      icon: <Globe />,
    },
    {
      id: 12,
      title: "Zero-Knowledge Proofs in Security",
      excerpt:
        "How ZK-Rollups are ensuring total data privacy while maintaining verifiable integrity...",
      author: "K. Mitnick",
      date: "Aug 22, 2025",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      icon: <Shield />,
    },
    {
      id: 13,
      title: "Autonomous Swarm Robotics",
      excerpt:
        "Coordinated drone swarms for rapid disaster response and planetary exploration...",
      author: "Riya K.",
      date: "July 05, 2025",
      category: "Robotics",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      icon: <Cpu />,
    },
    {
      id: 14,
      title: "Deploying to Vercel",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
      excerpt:
        "A step-by-step guide to hosting your Vite projects in under 5 minutes.",
      author: "Leo DaVinci",
      date: "Oct 30, 2023",
      category: "DevOps",
    },
  ];

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentPage("article");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans">
      <Navbar
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateTo={navigateTo}
        currentPage={currentPage}
      />

      <div className="pt-24">
        {currentPage === "home" && (
          <Home blogPosts={blogPosts} handlePostClick={handlePostClick} />
        )}
        {currentPage === "about" && <About />}
        {currentPage === "labs" && <Labs />}
        {currentPage === "article" && (
          <ArticleDetail selectedPost={selectedPost} navigateTo={navigateTo} />
        )}
      </div>

      <footer className="mt-20 py-10 border-t border-white/5 flex flex-col items-center opacity-50">
        <p className="text-[10px] tracking-[0.8em] uppercase italic">
          Core.OS Transmission Terminated
        </p>
      </footer>
    </div>
  );
};

export default App;
