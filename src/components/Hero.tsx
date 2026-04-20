"use client";

import {  useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { SITE_CONFIG } from "../constants";

export const Hero = () => {
  // 1. تأثير تتبع الماوس للإضاءة (Mouse Glow)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-background noise-bg overflow-hidden select-none">
      
      {/* الإضاءة التفاعلية التي تتبع الماوس */}
      <motion.div 
        className="fixed pointer-events-none z-0 w-125 h-125 bg-navy/10 rounded-full blur-[120px]"
        style={{ left: springX, top: springY }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-6xl px-4">
        
        {/* اللوجو العائم مع انعكاس (Reflective Logo) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12 animate-float"
        >
          <div className="relative w-44 h-44 z-10 group">
            <Image
              src={SITE_CONFIG.logoPath}
              alt="Logo"
              fill
              className="object-contain drop-shadow-2xl brightness-110 contrast-125"
              priority
              sizes="(max-width: 768px) 112px, (max-width: 1200px) 144px, 176px"
            />
          </div>
          {/* انعكاس اللوجو بالأسفل */}
          <div className="absolute -bottom-16 w-44 h-20 bg-linear-to-t from-navy/5 to-transparent blur-xl opacity-40 scale-y-[-1]" />
        </motion.div>

        {/* النص العملاق بنظام الطبقات (Layered Text) */}
        <div className="text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-navy"
          >
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">B</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">R</span>
            <span className="text-gold italic drop-shadow-sm">A</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">I</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">T</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">I</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">S</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">H</span>
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-navy"
          >
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">A</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">C</span>
            <span className="text-gold italic drop-shadow-sm">A</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">A</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">D</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">E</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">M</span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 cursor-default">Y</span>
          </motion.h1>

  
        </div>

        {/* الزر "الخرافي" (The Portal Button) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <Link href="https://britishacademy-ss.com/" className="relative group p-0.5 inline-flex items-center justify-center rounded-full overflow-hidden">
            {/* إطار متحرك (Animated Border) */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#192c53_0%,#7598fa_50%,#192c53_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#75c0fa_0%,#f0c24d_50%,#75c0fa_100%)] transition-all" />
            
            <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-12 py-5 text-xl font-bold text-navy backdrop-blur-3xl group-hover:bg-transparent group-hover:text-background transition-all duration-500">
              استكشف الآن
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* لمسة إبداعية جانبية: أرقام عائمة (Data First Aesthetic) */}
      <div className="absolute left-10 bottom-10 text-[oklch(25%_0.08_260/0.1)] font-mono text-8xl font-bold">01</div>
      <div className="absolute right-10 top-10 text-[oklch(75%_0.15_85/0.1)] font-mono text-8xl font-bold">2026</div>

    </section>
  );
};