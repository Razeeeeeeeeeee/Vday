"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Coffee, Lightbulb, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import RouteProtection from "@/components/RouteProtection";

const RiddleCard = () => {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const correctAnswer = "nutella";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.toLowerCase().trim() === correctAnswer) {
      setShowSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      localStorage.setItem("first-clue", "true");
      router.push("/second-clue");
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <RouteProtection requiredClue="greeting">
      <title>Riddle me darling</title>
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-amber-50 flex items-center justify-center p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
            {/* Success overlay with fun animations */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-amber-50 flex flex-col items-center justify-center"
                >
                  {/* Animated jar of Nutella */}
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, -10, 0],
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <motion.div
                      className="w-32 h-40 bg-amber-800 rounded-2xl relative"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    >
                      {/* Jar lid */}
                      <motion.div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-amber-600 rounded-lg" />

                      {/* Nutella label */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-100 font-bold text-2xl">
                        N
                      </div>
                    </motion.div>

                    {/* Flying hearts and stars */}
                    <motion.div
                      animate={{
                        opacity: [0, 1, 0],
                        y: [-20, -40],
                        x: [-20, 20],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                      className="absolute -right-4 -top-4 text-2xl"
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      animate={{
                        opacity: [0, 1, 0],
                        y: [-20, -40],
                        x: [20, -20],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.2,
                      }}
                      className="absolute -left-4 -top-4 text-2xl"
                    >
                      ❤️
                    </motion.div>
                  </motion.div>

                  {/* Success message */}
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold text-amber-600 mb-2">
                      Sweet Victory! 🎯
                    </h2>
                    <p className="text-amber-700">
                      You&apos;ve cracked the Nutella code! Dwight would be
                      proud (and hungry)!
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Rest of the component remains the same */}
            <CardContent className="space-y-8 text-center relative">
              {/* Header icons */}
              <div className="relative">
                <motion.div className="flex justify-center items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative"
                  >
                    <Book className="w-12 h-12 text-amber-600 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-amber-200/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                    className="relative"
                  >
                    <Coffee className="w-8 h-8 text-amber-400 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-amber-100/20 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.5,
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
              >
                Schrute&apos;s Beet-Free Breakfast Betrayal
              </motion.h1>

              {/* Riddle */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-50/50 rounded-2xl p-8"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                <p className="text-md text-gray-600 leading-relaxed space-y-2">
                  <span className="block">
                    Jim started with fruit (but not a beet),
                  </span>
                  <span className="block">
                    Then moved to nuts (but skipped the meat).
                  </span>
                  <span className="block">
                    Now it&apos;s brown, it&apos;s sweet, it&apos;s spreadable
                    loot
                  </span>
                  <span className="block">
                    What&apos;s the third love language of this snack-squad
                    recruit?
                  </span>
                </p>
              </motion.div>

              {/* Hint button */}
              <motion.button
                variants={itemVariants}
                onClick={() => {
                  setIsThinking(true);
                  setTimeout(() => {
                    setIsThinking(false);
                    setIsHintVisible(!isHintVisible);
                  }, 500);
                }}
                className="px-6 py-2.5 text-amber-500 rounded-xl font-medium inline-flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(205, 122, 59, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isThinking ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                  >
                    <Lightbulb className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <div className="text-amber-600">
                    {isHintVisible ? "Hide Hint" : "Need a Hint?"}
                  </div>
                )}
              </motion.button>

              {/* Hint content */}
              <AnimatePresence>
                {isHintVisible && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      <p className="text-gray-500 italic">
                        &quot;Why use many spreads when one rules them
                        all?&quot;
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Answer form */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="relative">
                  <AnimatePresence>
                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-3/4 left-0 right-0 text-red-500 text-sm font-medium bg-red-50/80 py-2 px-4 rounded-lg"
                      >
                        That&apos;s not quite right... Think harder! 💭
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Input
                    type="text"
                    placeholder="Enter your answer here..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-6 py-3 rounded-xl focus:ring-2 focus:ring-amber-400 bg-gray-50/50"
                  />

                  {/* Error message */}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  Check Answer
                  <motion.span
                    animate={isHovering ? { x: [0, 5, 0] } : {}}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </RouteProtection>
  );
};

export default RiddleCard;
