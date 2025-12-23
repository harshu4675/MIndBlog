import React from "react";
import { Target, Shield, MessageSquare, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Uptime", val: "99.9%" },
    { label: "Nodes", val: "1,204" },
    { label: "Latency", val: "0.2ms" },
    { label: "Security", val: "Lvl 9" },
  ];

  return (
    <div className="animate-in fade-in duration-700 max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-black mb-16 text-center tracking-tighter uppercase">
        System <span className="text-cyan-400">Specs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-[11px] mb-3 flex items-center">
              <Target size={18} className="mr-2" /> The Vision
            </h4>
            <p className="text-gray-400 leading-relaxed text-base">
              CORE.OS is an experimental content hub built to demonstrate modern
              React proficiency. This project explores the intersection of
              aesthetic futurism and complex data visualization.
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-black uppercase tracking-widest text-[11px] mb-3 flex items-center">
              <MessageSquare size={18} className="mr-2" /> Integration
            </h4>
            <p className="text-gray-400 leading-relaxed text-base">
              All broadcast data is sourced from global nodes. Our mission is to
              bridge the gap between human intuition and machine precision.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:border-cyan-500/30 transition-colors"
            >
              <p className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-black text-white">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
