"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Lightbulb, ArrowRight, ChefHat } from "lucide-react";
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
  const correctAnswer = "ulli chammanthi";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (answer.toLowerCase().trim() === correctAnswer) {
      setShowSuccess(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      localStorage.setItem("second-clue", "true");
      router.push("/third-clue");
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
    <RouteProtection requiredClue="first-clue">
      <title>Michael&apos;s Spicy Mystery</title>
      <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-red-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-3xl p-4 sm:p-10 shadow-xl relative overflow-hidden">
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-red-50 flex flex-col items-center justify-center p-4"
                >
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
                      className="w-24 sm:w-32 h-20 sm:h-24 bg-red-700 rounded-b-full relative"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    >
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-16 sm:h-20 bg-red-600 rounded-full"
                        animate={{
                          rotate: [-20, 20, -20],
                          y: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
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
                      className="absolute -right-4 -top-4 text-xl sm:text-2xl"
                    >
                      🌶️
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
                      className="absolute -left-4 -top-4 text-xl sm:text-2xl"
                    >
                      🧅
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="mt-4 sm:mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-semibold text-red-600 mb-2">
                      Spicy Success! 🔥
                    </h2>
                    <p className="text-sm sm:text-base text-red-700">
                      Mom&apos;s secret recipe revealed! Spices so good, they
                      got michael crying!
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
                    <ChefHat className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-red-200/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                    className="relative"
                  >
                    <UtensilsCrossed className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-red-100/20 rounded-full"
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

              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-red-600"
              >
                Michael&apos;s Spicy Mystery
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-red-50 to-red-50/50 rounded-2xl p-4 sm:p-8"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                <p className="text-sm sm:text-md text-red-600 leading-relaxed space-y-2">
                  <span className="block">
                    In Scranton&apos;s kitchen, memories shine,
                  </span>
                  <span className="block">
                    Where mother&apos;s recipe stands divine.
                  </span>
                  <span className="block">
                    Two words of spice that make taste buds dance,
                  </span>
                  <span className="block">
                    Like Michael&apos;s jokes - they take a chance.
                  </span>
                  <span className="block">
                    What&apos;s the secret blend that makes Pam say yum?
                  </span>
                  <span className="block">
                    (Hint: It&apos;s not Kevin&apos;s famous chili from his
                    drum!)
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
                className="px-4 sm:px-6 py-2.5 text-red-500 rounded-xl font-medium inline-flex items-center gap-2 touch-action-manipulation"
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
                      className="bg-red-50/50 rounded-2xl p-4 sm:p-6 border border-red-100/50"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                    >
                      <p className="text-sm sm:text-base text-red-500 italic">
                        &quot;Like my tears when I cut onions in the kitchen,
                        some recipes are passed down with love. Mom&apos;s
                        secret weapon could make even Michael cry twice.&quot;
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
                        className="absolute -top-3/4 left-0 right-0 text-red-500 text-xs sm:text-sm font-medium bg-red-50/80 py-2 px-4 rounded-lg"
                      >
                        That&apos;s not quite spicy enough... Try again! 🌶️
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Input
                    type="text"
                    placeholder="Enter your answer here..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 rounded-xl focus:ring-2 focus:ring-red-400 bg-red-50/50 text-base"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
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
