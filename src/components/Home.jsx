import React from "react";
import { User, Clock } from "lucide-react";

const Home = ({ blogPosts, handlePostClick }) => (
  <div className="animate-in fade-in zoom-in-95 duration-700">
    <header className="pt-32 pb-20 text-center px-6">
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase">
        The{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Intel.
        </span>
      </h2>
      <p className="text-gray-500 tracking-[0.5em] text-xs uppercase">
        Decentralized Archive // 2025 Edition
      </p>
    </header>
    <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => handlePostClick(post)}
          className="group bg-white/5 border border-white/10 rounded-[2rem] cursor-pointer hover:border-cyan-500/50 transition-all duration-500 p-2"
        >
          <div className="h-56 overflow-hidden rounded-[1.5rem] relative">
            <img
              src={post.image}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt=""
            />
            <div className="absolute top-4 left-4 bg-[#0a0a0f]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-500/30">
              {post.category}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center text-[10px] text-gray-500 space-x-4 uppercase font-bold tracking-widest">
              <span className="flex items-center">
                <User size={12} className="mr-1" /> {post.author}
              </span>
              <span className="flex items-center">
                <Clock size={12} className="mr-1" /> 4m Read
              </span>
            </div>
          </div>
        </div>
      ))}
    </main>
  </div>
);

export default Home;
