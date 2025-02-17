"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Coffee, Bug, MapPin } from "lucide-react";
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
    <RouteProtection requiredClue="second-clue">
      <title>Debugging & Decaf ☕</title>
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-gray-50 flex items-center justify-center p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <CardContent className="space-y-10 text-center relative">
              <div className="space-y-6">
                <motion.div className="relative" variants={itemVariants}>
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative z-10"
                  >
                    <Code2 className="w-14 h-14 text-blue-600 mx-auto" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-blue-100 rounded-full w-14 h-14 mx-auto opacity-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl font-light tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600"
                >
                  Debugging & Decaf
                </motion.h1>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-2xl p-8 transform transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <h2 className="text-lg font-medium text-gray-700">
                    The Debug Zone
                  </h2>
                </div>
                <p className="text-md text-gray-600 leading-relaxed font-medium mb-4">
                  Where code meets chaos and debates take flight,
                  <br />
                  A prankster&apos;s brew fuels while loops at night.
                  <br />
                  No beet-stained mugs, just fudge and despair
                  <br />
                  Find the spot where we outsmarted World&apos;s Best Chair.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50/50 rounded-2xl p-4 space-y-6"
              >
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Bug className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <p className="text-gray-500 italic leading-relaxed">
                    &quot;I&apos;m an early bird and a night owl. So I&apos;m
                    wise and have worms.&quot;
                  </p>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <Coffee className="w-6 h-6 text-blue-500" />
                  </motion.div>
                </div>
                <p className="text-blue-600 font-medium text-sm">
                  - Michael Scott
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <motion.p
                    className="text-gray-400 text-sm font-light"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Debug your way to the next clue...
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
