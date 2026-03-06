/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Anchor, Target, User, Calendar, Briefcase, Sparkles } from 'lucide-react';

export default function App() {
  const profile = {
    name: "萩野 怜夏",
    nameEn: "Reika Hagino",
    birthday: "2002年5月26日",
    occupation: "歯科衛生士",
    likes: ["MBTI", "海鮮"],
    goal2026: "健康に生きる",
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-[#2d2d2d] font-sans selection:bg-emerald-100">
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#f5f2ed]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-emerald-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-100 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-semibold mb-4 block">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-serif font-light mb-2 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xl text-stone-500 font-light italic">{profile.nameEn}</p>
        </motion.div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-24 space-y-32">
        {/* Profile Section */}
        <section id="profile" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50"
          >
            <img 
              src="https://picsum.photos/seed/reika/800/1200" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif italic border-b border-stone-200 pb-4">About Me</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Birthday</p>
                    <p className="text-lg">{profile.birthday}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Occupation</p>
                    <p className="text-lg">{profile.occupation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif mb-4">Favorite Things</h2>
            <p className="text-stone-500 italic">好きなこと</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-semibold">MBTI</h3>
              <p className="text-stone-600 leading-relaxed">
                性格診断や心理学に興味があります。人それぞれの個性を理解するのが好きです。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-3xl border border-stone-100 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                <Anchor size={24} />
              </div>
              <h3 className="text-xl font-semibold">海鮮</h3>
              <p className="text-stone-600 leading-relaxed">
                新鮮な海の幸が大好きです。美味しいお寿司や海鮮丼を求めて出かけることもあります。
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2026 Goal Section */}
        <section id="goal" className="relative py-24 px-8 bg-stone-900 rounded-[3rem] text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm tracking-widest uppercase">
              <Target size={14} />
              2026 Goal
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic">
              "{profile.goal2026}"
            </h2>
            <p className="max-w-md mx-auto text-stone-400 leading-relaxed">
              心も体も健やかに。毎日を大切に、笑顔で過ごせる一年にしたいと思っています。
            </p>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-100 text-center text-stone-400 text-sm">
        <p>&copy; 2026 Reika Hagino. Crafted with care.</p>
      </footer>
    </div>
  );
}
