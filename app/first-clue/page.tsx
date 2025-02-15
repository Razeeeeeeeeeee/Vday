// pages/valentine/first-clue.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Book, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import RouteProtection from "@/components/RouteProtection";

const FirstClue: React.FC = () => {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [showError, setShowError] = useState(false);
  const correctAnswer = "break room"; // You can change this to your desired answer

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (answer.toLowerCase().trim() === correctAnswer) {
      // Store completion status in localStorage
      localStorage.setItem("first-clue", "true");
      router.push("/second-clue");
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  return (
    <RouteProtection requiredClue="greeting">
      <title>The First Clue 🕵️</title>
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl"
        >
          <Card className="bg-white rounded-3xl p-10 shadow-xl">
            <CardContent className="space-y-8 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Book className="w-12 h-12 text-amber-600 mx-auto" />
              </motion.div>

              <h1 className="text-3xl font-light tracking-tight text-gray-900">
                Dundie Dispatch in the Stacks
              </h1>

              <motion.div
                className="bg-gray-50 rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg text-gray-600">
                  Your first clue awaits at the place where Pam found her mural…
                  or, in this case, where IITians find their books
                </p>
              </motion.div>

              <div className="bg-gray-50/50 rounded-2xl p-6">
                <p className="text-gray-500 italic">
                  &quot;Sometimes I&apos;ll start a sentence and I don&apos;t
                  even know where it&apos;s going. I just hope I find it along
                  the way.&quot; - Michael Scott
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Where do we meet every morning?"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl focus:ring-blue-600 transition-all duration-300"
                  />
                  <AnimatePresence>
                    {showError && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute bottom-10 left-0 right-0 text-red-500 text-md z-50"
                      >
                        That&apos;s not quite right... Think harder! 💭
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-blue-500 text-white rounded-xl font-medium inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02, backgroundColor: "#3b82f6" }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  Check Answer{" "}
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

export default FirstClue;
