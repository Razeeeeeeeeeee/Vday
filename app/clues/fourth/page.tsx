"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Heart, ArrowRight, Lightbulb } from "lucide-react";
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
  const correctAnswer = "pehla nasha";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.toLowerCase().trim() === correctAnswer) {
      setShowSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      localStorage.setItem("fourth-clue", "true");
      router.push("/success");
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
    <RouteProtection requiredClue="third-clue">
      <title>Her Heart&apos;s First Symphony 🎵</title>
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-pink-50 flex items-center justify-center p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-pink-100 flex flex-col items-center justify-center"
                >
                  {/* Animated Musical Heart Container */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    {/* Central Heart with Musical Notes */}
                    <motion.div
                      className="w-40 h-40 bg-pink-500 rounded-full flex items-center justify-center relative"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(236, 72, 153, 0.3)",
                          "0 0 40px rgba(236, 72, 153, 0.5)",
                          "0 0 20px rgba(236, 72, 153, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <span className="text-6xl">🎵</span>
                    </motion.div>

                    {/* Floating Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [-20, -60, -20],
                          x: [0, i % 2 === 0 ? 30 : -30, 0],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className="absolute text-3xl"
                        style={{
                          top: "50%",
                          left: "50%",
                        }}
                      >
                        {i % 3 === 0 ? "💝" : i % 3 === 1 ? "✨" : "🎼"}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Success Message */}
                  <motion.div
                    className="mt-8 text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-pink-600 mb-2">
                      Yaaas! You Got The Rhythm Right! 🎶
                    </h2>
                    <p className="text-pink-500 text-lg">
                      Jim & Pam would be dancing to this one! 💃🕺
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <CardContent className="space-y-8 text-center relative">
              <div className="relative">
                <motion.div className="flex justify-center items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative"
                  >
                    <Music className="w-12 h-12 text-pink-500 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-pink-200/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="relative"
                  >
                    <Heart className="w-8 h-8 text-pink-400 relative z-10" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400"
              >
                Her Heart&apos;s First Symphony
              </motion.h1>

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
                    Not a Dundie, but it tops her chart,
                  </span>
                  <span className="block">
                    A first note that forever stole her heart.
                  </span>
                  <span className="block">
                    No beet fields here, just strings that sing,
                  </span>
                  <span className="block">
                    Find the anthem she hums when love takes wing.
                  </span>
                </p>
              </motion.div>

              <motion.button
                variants={itemVariants}
                onClick={() => {
                  setIsThinking(true);
                  setTimeout(() => {
                    setIsThinking(false);
                    setIsHintVisible(!isHintVisible);
                  }, 800);
                }}
                className="px-6 py-2.5 text-pink-500 rounded-xl font-medium inline-flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(20, 184, 166, 0.1)",
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
                  <>{isHintVisible ? "Hide Hint" : "Need a Hint?"}</>
                )}
              </motion.button>

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
                      className="bg-pink-50/50 rounded-2xl p-6 border border-pink-100/50"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      <p className="text-gray-500 italic">
                        &quot;I gave a million hints. I did the Casino Night. I
                        did the teapot.&quot;
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="relative">
                  <AnimatePresence>
                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-3/4 left-0 right-0 text-pink-500 text-sm font-medium bg-pink-50/80 py-2 px-4 rounded-lg"
                      >
                        That&apos;s not quite right... Try again! 🎵
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Input
                    type="text"
                    placeholder="Enter the melody of love..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-6 py-3 rounded-xl focus:ring-2 focus:ring-pink-400 bg-gray-50/50"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-medium inline-flex items-center gap-2 shadow-lg shadow-pink-500/20"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 15px rgba(20, 184, 166, 0.3)",
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
