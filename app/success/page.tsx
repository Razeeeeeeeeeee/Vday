"use client";
import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Heart, Star, Music, Gift, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";
import RouteProtection from "@/components/RouteProtection";

interface WindowSize {
  width: number;
  height: number;
}

interface FloatingIconProps {
  Icon: LucideIcon;
  color: string;
  seed: number;
  speed: number;
  windowSize: WindowSize;
}

const FloatingIcon = memo(
  ({ Icon, color, seed, speed, windowSize }: FloatingIconProps) => {
    // Adjust icon position calculation based on screen size
    const maxOffset = Math.min(windowSize.width, windowSize.height) * 0.8;
    const x = Math.abs(Math.sin(seed)) * (maxOffset - 50);
    const y = Math.abs(Math.cos(seed)) * (maxOffset - 50);

    // Adjust icon size based on screen width
    const iconSize = windowSize.width < 640 ? "w-6 h-6" : "w-8 h-8";

    return (
      <motion.div
        className="absolute cursor-pointer"
        initial={{ x, y }}
        animate={{
          x: [x, x + (windowSize.width < 640 ? 25 : 50), x],
          y: [y, y + (windowSize.width < 640 ? 25 : 50), y],
        }}
        transition={{
          duration: 4 / speed,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <Icon className={`${iconSize} ${color}`} />
      </motion.div>
    );
  },
);

FloatingIcon.displayName = "FloatingIcon";

export default function FinalScreen() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <RouteProtection requiredClue="fourth-clue">
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4 relative overflow-hidden">
        {windowSize.width > 0 && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={true}
            numberOfPieces={windowSize.width < 640 ? 100 : 200}
          />
        )}

        {/* Adjust number of floating icons for mobile */}
        {windowSize.width >= 480 && (
          <>
            <FloatingIcon
              Icon={Heart}
              color="text-pink-400"
              seed={1}
              speed={2}
              windowSize={windowSize}
            />
            <FloatingIcon
              Icon={Star}
              color="text-yellow-400"
              seed={2}
              speed={1.5}
              windowSize={windowSize}
            />
            <FloatingIcon
              Icon={Music}
              color="text-blue-400"
              seed={3}
              speed={1.8}
              windowSize={windowSize}
            />
            <FloatingIcon
              Icon={Gift}
              color="text-purple-400"
              seed={4}
              speed={1.2}
              windowSize={windowSize}
            />
            <FloatingIcon
              Icon={Sparkles}
              color="text-amber-400"
              seed={5}
              speed={1.7}
              windowSize={windowSize}
            />
          </>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl px-4 sm:px-0"
        >
          <motion.div
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl relative z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="space-y-6 sm:space-y-8 text-center">
              <motion.h1
                className="text-2xl sm:text-4xl font-light tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                You Found All The Clues! 🎉
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Like Michael found Holly, you&apos;ve completed this journey...
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-base sm:text-lg text-gray-700"
              >
                <p>But wait, there&apos;s one final surprise...</p>
                <motion.p
                  className="mt-4 font-medium text-red-500"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Turn around and look at me!
                </motion.p>
              </motion.div>

              <motion.div
                className="text-sm sm:text-md text-gray-500 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8 }}
              >
                <p>Would you do me the honor of going on a date tonight,</p>
                <p>wearing something special I got for you?</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </RouteProtection>
  );
}
