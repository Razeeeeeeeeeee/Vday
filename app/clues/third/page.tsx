"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Baby, Dog, ArrowRight, Lightbulb } from "lucide-react";
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
  const correctAnswer = "shinchan";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.toLowerCase().trim() === correctAnswer) {
      setShowSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      localStorage.setItem("third-clue", "true");
      router.push("/fourth-clue");
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
    <RouteProtection requiredClue="second-clue">
      <title>The Mischief Mastermind 👶</title>
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-rose-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl mx-auto"
        >
          <Card className="bg-white rounded-3xl p-4 sm:p-6 md:p-10 shadow-xl relative overflow-hidden">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-rose-50 flex flex-col items-center justify-center p-4"
                >
                  <motion.div
                    className="relative w-32 sm:w-48 h-32 sm:h-48"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Shinchan's Head */}
                    <motion.div
                      className="w-20 sm:w-24 h-20 sm:h-24 bg-[#FFE4C4] rounded-full mx-auto relative"
                      animate={{
                        rotate: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                      }}
                    >
                      {/* Eyes */}
                      <div className="absolute w-1.5 sm:w-2 h-3 sm:h-4 bg-black rounded-full left-4 top-8"></div>
                      <div className="absolute w-1.5 sm:w-2 h-3 sm:h-4 bg-black rounded-full right-4 top-8"></div>

                      {/* Eyebrows */}
                      <motion.div
                        className="absolute w-3 sm:w-4 h-1 bg-black left-3 top-6"
                        animate={{ rotate: [-10, 10, -10] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      ></motion.div>
                      <motion.div
                        className="absolute w-3 sm:w-4 h-1 bg-black right-3 top-6"
                        animate={{ rotate: [10, -10, 10] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      ></motion.div>

                      {/* Mouth */}
                      <motion.div
                        className="absolute w-10 sm:w-12 h-5 sm:h-6 border-b-4 border-black rounded-b-full bottom-4 left-5 sm:left-6"
                        animate={{ scaleY: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      ></motion.div>
                    </motion.div>

                    {/* Body */}
                    <motion.div
                      className="w-24 sm:w-32 h-20 sm:h-24 bg-rose-400 rounded-2xl mx-auto relative mt-2"
                      animate={{
                        rotate: [-5, 5, -5],
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                      }}
                    >
                      {/* Arms */}
                      <motion.div
                        className="absolute w-6 sm:w-8 h-14 sm:h-16 bg-[#FFE4C4] left-[-15px] sm:left-[-20px] top-2 rounded-full"
                        animate={{ rotate: [-30, 30, -30] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      ></motion.div>
                      <motion.div
                        className="absolute w-6 sm:w-8 h-14 sm:h-16 bg-[#FFE4C4] right-[-15px] sm:right-[-20px] top-2 rounded-full"
                        animate={{ rotate: [30, -30, 30] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      ></motion.div>
                    </motion.div>

                    {/* Decorative Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-xl sm:text-2xl"
                        initial={{ opacity: 0, y: 0, x: i * 30 - 45 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [-20, -60],
                          x: [
                            i * 30 - 45,
                            i * 30 - 45 + (i % 2 === 0 ? 20 : -20),
                          ],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        {i % 2 === 0 ? "✨" : "😎"}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="mt-6 sm:mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.h2
                      className="text-xl sm:text-2xl font-semibold text-rose-600 mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Action Kamen Success! 🦸‍♂️
                    </motion.h2>
                    <p className="text-sm sm:text-base text-rose-700">
                      You&apos;ve found our mischievous hero! Time for the Butt
                      Dance! 🎵
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <CardContent className="space-y-6 sm:space-y-8 text-center relative">
              <div className="relative">
                <motion.div className="flex justify-center items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative"
                  >
                    <Baby className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-rose-200/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="relative"
                  >
                    <Dog className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 relative z-10" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400"
              >
                The Mischief Mastermind of Kasukabe
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-50/50 rounded-2xl p-4 sm:p-8"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                <p className="text-sm sm:text-md text-gray-600 leading-relaxed space-y-2">
                  <span className="block">
                    He&apos;s five, he&apos;s chaotic, he&apos;s got a butt
                    dance to flaunt,
                  </span>
                  <span className="block">
                    His sister&apos;s named after a flower, his dog&apos;s a
                    furry haunt.
                  </span>
                  <span className="block">
                    He&apos;ll ask if you like green peppers with a cheeky grin,
                  </span>
                  <span className="block">
                    And turn your coffee shop debates into a prankster&apos;s
                    din.
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
                className="px-4 sm:px-6 py-2 sm:py-2.5 text-rose-500 rounded-xl font-medium inline-flex items-center gap-2 text-sm sm:text-base"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isThinking ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "linear" }}
                  >
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
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
                      className="bg-rose-50/50 rounded-2xl p-4 sm:p-6 border border-rose-100/50"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      <p className="text-sm sm:text-base text-gray-500 italic">
                        Think of a mischievous little troublemaker who never
                        fails to stir up chaos, his antics are as famous as his
                        love for teasing adults!
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6 pt-4"
              >
                <div className="relative">
                  <AnimatePresence>
                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute -top-3/4 left-0 right-0 text-rose-500 text-xs sm:text-sm font-medium bg-rose-50/80 py-2 px-4 rounded-lg"
                      >
                        That&apos;s not quite right... Try again! 😜
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Input
                    type="text"
                    placeholder="Enter your answer here..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl focus:ring-2 focus:ring-rose-400 bg-gray-50/50 text-sm sm:text-base"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 15px rgba(239, 68, 68, 0.3)",
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
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
