"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Pizza, Timer, MapPin } from "lucide-react";
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
    <RouteProtection requiredClue="third-clue">
      <title>Michael&apos;s Missing Minutes 🕒</title>
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-blue-50/20"
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
                      rotate: [0, 360],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                      ease: "linear",
                    }}
                    className="relative z-10"
                  >
                    <Clock className="w-10 h-10 sm:w-14 sm:h-14 text-blue-600 mx-auto" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-blue-100 rounded-full w-10 h-10 sm:w-14 sm:h-14 mx-auto opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-2xl sm:text-4xl font-light tracking-tight text-gray-900 px-2"
                >
                  Dwight&apos;s Pizza-Powered Time Paradox
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
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <h2 className="text-base sm:text-lg font-medium text-gray-700">
                    The Time Vortex
                  </h2>
                </div>
                <p className="text-sm sm:text-md text-gray-600 leading-relaxed font-medium mb-3 sm:mb-4">
                  Where &apos;money&apos; ticks and &apos;pizza&apos; chimes,
                  <br />
                  And Michael&apos;s meetings warp through time.
                  <br />
                  We&apos;ve paced past seconds, debates in tow,
                  <br />
                  Find where Dundies soar… and beets can&apos;t go!
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
                    <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </motion.div>
                  <p className="text-sm sm:text-base text-gray-500 italic leading-relaxed">
                    &quot;Time is money. Money is power. Power is pizza.&quot;
                  </p>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <Pizza className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </motion.div>
                </div>
                <p className="text-blue-600 font-medium text-xs sm:text-sm">
                  - Dwight Schrute
                </p>

                <div className="pt-3 sm:pt-4 border-t border-gray-100">
                  <motion.p
                    className="text-xs sm:text-sm text-gray-400 font-light"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Meet me where time is kept but never lost.
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
