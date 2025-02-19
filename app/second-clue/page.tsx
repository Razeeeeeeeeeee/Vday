"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CakeSlice, MapPin } from "lucide-react";
import RouteProtection from "@/components/RouteProtection";

const SecondClue: React.FC = () => {
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
    <RouteProtection requiredClue="first-clue">
      <title>The Sweet Clue 🍫</title>
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-gray-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent"
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
                    <CakeSlice className="w-10 h-10 sm:w-14 sm:h-14 text-amber-600 mx-auto" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-amber-100 rounded-full w-10 h-10 sm:w-14 sm:h-14 mx-auto opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-2xl sm:text-4xl font-light tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                >
                  Jim&apos;s Fudge Heist
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
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                  <h2 className="text-base sm:text-lg font-medium text-gray-700">
                    The Sweet Spot
                  </h2>
                </div>
                <p className="text-sm sm:text-md text-gray-600 leading-relaxed font-medium mb-3 sm:mb-4">
                  Where love&apos;s name is screamed in dessert form,
                  <br />
                  And fudge wars rage like a sugar storm.
                  <br />
                  Jim once hid Dwight&apos;s stapler under a sweet stack
                  <br />
                  Find the spot where we fought brownie vs. cake attack.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-4 sm:space-y-6"
              >
                <p className="text-sm sm:text-base text-gray-500 italic leading-relaxed">
                  &quot;I love inside jokes. I&apos;d love to be a part of one
                  someday..&quot;
                </p>
                <p className="text-amber-600 font-medium text-xs sm:text-sm">
                  - Michael Scott
                </p>

                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <motion.p
                    className="text-xs sm:text-sm text-gray-400 font-light"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Find me in the sweet spot...
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

export default SecondClue;
