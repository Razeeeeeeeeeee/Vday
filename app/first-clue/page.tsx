"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HandCoins, MapPin, Megaphone, Armchair } from "lucide-react";
import RouteProtection from "@/components/RouteProtection";

const FirstClue: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <RouteProtection requiredClue="greeting">
      <title></title>
      <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-gray-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <CardContent className="space-y-6 sm:space-y-10 text-center relative">
              <div className="space-y-4 sm:space-y-6">
                <motion.div className="relative" variants={itemVariants}>
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative z-10"
                  >
                    <HandCoins className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-600 mx-auto" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-emerald-100 rounded-full w-10 h-10 sm:w-14 sm:h-14 mx-auto opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-2xl sm:text-4xl font-light tracking-tight bg-clip-text"
                >
                  That&apos;s What She Sold 🛍️
                </motion.h1>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-8 transform transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
                  <h2 className="text-base sm:text-lg font-medium text-gray-700">
                    The Bargain Kingdom
                  </h2>
                </div>
                <p className="text-sm sm:text-md text-gray-600 leading-relaxed font-medium">
                  Where haggling meets &apos;Why use lot word?&apos; creed,
                  <br />
                  A throne of whispers hides where stall owners plead.
                  <br />
                  No chili here (Kevin&apos;s still mad),
                  <br />
                  Find the seat where we out-talked the &apos;World&apos;s Best
                  Dad.&apos;
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-4 sm:space-y-6"
              >
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Megaphone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                  </motion.div>
                  <p className="text-sm sm:text-base text-gray-500 italic leading-relaxed">
                    &quot;I just want to sit on the beach and eat hot dogs.
                    That&apos;s all I&apos;ve ever wanted.&quot;
                  </p>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <Armchair className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                  </motion.div>
                </div>
                <p className="text-emerald-600 font-medium text-xs sm:text-sm">
                  - Jim Halpert
                </p>

                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <motion.p
                    className="text-xs sm:text-sm text-gray-400 font-light"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Where negotiations reign supreme...find me where we always
                    sit.
                  </motion.p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </RouteProtection>
  );
};

export default FirstClue;
