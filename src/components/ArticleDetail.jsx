import React from "react";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";

const ArticleDetail = ({ selectedPost, navigateTo }) => {
  if (!selectedPost) return null;

  return (
    <div className="animate-in slide-in-from-right-20 fade-in duration-700 max-w-4xl mx-auto px-6 pb-20">
      <button
        onClick={() => navigateTo("home")}
        className="flex items-center text-cyan-400 mb-10 font-black uppercase tracking-[0.3em] text-[11px] hover:text-white transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" /> Disconnect Terminal
      </button>

      <h2 className="text-5xl md:text-7xl font-black mb-10 leading-none tracking-tighter uppercase">
        {selectedPost.title}
      </h2>

      <div className="relative group mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <img
          src={selectedPost.image}
          className="relative w-full h-[550px] object-cover rounded-[3rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          alt={selectedPost.title}
        />
      </div>

      <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center font-black text-cyan-400">
            {selectedPost.author[0]}
          </div>
          <div>
            <p className="font-black text-white uppercase tracking-widest text-sm">
              {selectedPost.author}
            </p>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
              {selectedPost.date} // {selectedPost.category}
            </p>
          </div>
        </div>
        <div className="flex space-x-6 text-gray-500">
          <Share2
            size={20}
            className="hover:text-cyan-400 cursor-pointer transition-colors"
          />
          <Bookmark
            size={20}
            className="hover:text-cyan-400 cursor-pointer transition-colors"
          />
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-gray-400 text-xl leading-relaxed space-y-8">
        <p className="first-letter:text-8xl first-letter:text-cyan-400 first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:leading-none">
          {selectedPost.excerpt} This research marks a pivotal moment in our
          understanding of {selectedPost.category.toLowerCase()}.
        </p>
        <p>
          The architecture described here is not theoretical. We are seeing
          active implementation across global nodes, signaling a shift in how we
          process data at the edge of the network.
        </p>
        <div className="border-l-4 border-cyan-500 pl-8 my-16 py-4 italic text-3xl text-white font-light bg-white/5 rounded-r-2xl shadow-xl shadow-cyan-500/5">
          "The best way to predict the future is to build it with protocols that
          are resilient to the entropy of time."
        </div>
        <p>
          Data points suggest a significant increase in integration over the
          next fiscal quarter. This project serves as a foundational blueprint
          for those looking to master the next layer of the stack.
        </p>
      </div>
    </div>
  );
};

export default ArticleDetail;
