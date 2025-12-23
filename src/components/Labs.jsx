import React, { useState } from "react";
import { FlaskConical, Send, Zap } from "lucide-react";

const Labs = () => {
  const [feedback, setFeedback] = useState({ name: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFeedback({ name: "", msg: "" });
  };

  return (
    <div className="animate-in slide-in-from-bottom-10 duration-700 max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <FlaskConical size={40} className="mx-auto text-cyan-400 mb-6" />
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
          Feedback Terminal
        </h2>
        <p className="text-gray-500 text-xs tracking-[0.3em] uppercase italic">
          Transmit your thoughts to the central node.
        </p>
      </div>
      <form
        onSubmit={handleFeedback}
        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-2xl shadow-cyan-500/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="ENTITY NAME"
            value={feedback.name}
            onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-cyan-500 outline-none text-xs font-bold tracking-widest transition-all text-white"
            required
          />
          <div className="flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-6 text-[10px] font-bold text-cyan-400 uppercase">
            Encryption: Active
          </div>
        </div>
        <textarea
          placeholder="TRANSMIT MESSAGE..."
          rows="4"
          value={feedback.msg}
          onChange={(e) => setFeedback({ ...feedback, msg: e.target.value })}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-cyan-500 outline-none text-xs font-bold tracking-widest transition-all mb-6 text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black py-4 rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-95 uppercase tracking-[0.2em] text-xs"
        >
          {submitted ? (
            <>
              <Zap className="animate-pulse" /> <span>Transmitted</span>
            </>
          ) : (
            <>
              <Send size={16} /> <span>Send Feedback</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Labs;
