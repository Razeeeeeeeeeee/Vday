"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookHeart, Waves, Beef, Volleyball } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fuckyou from "@/media/fuck-you.gif";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import wavesimg from "@/media/waves.jpg";
import restimg from "@/media/restaurant.jpg";
import backseat from "@/media/backseet.jpg";
import volley from "@/media/volley.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useAnimatedText } from "@/components/AnimatedText";

interface Story {
  title: string;
  content: string;
  image: StaticImport;
}

const stories: Record<string, Story> = {
  waves: {
    title: "The Beach",
    content:
      "All I could hear was your laughter, carefree, and completely disarming. It was just another evening,  but something about the way you looked at me that evening changed everything. I didn’t know it then, but that was the moment right there, with sand between our toes and the ocean stretching endlessly before us, that I realized I never wanted to be just your friend.",
    image: wavesimg,
  },
  beef: {
    title: "The Loaf",
    content:
      "When you had steak for the first time, and it made me realize how badly I want to have a million more firsts like that with you..",
    image: restimg,
  },
  Book: {
    title: "Between the pages and us",
    content:
      "Somewhere between pages of love stories and the backseat of Siddarth's car, you realized I was a hopeless romantic, and I realized I only wanted to be that way for you.",
    image: backseat,
  },
  volley: {
    title: "Game, Set, You.",
    content:
      "Three of us played that day, but let’s be honest, I only cared about impressing one.",
    image: volley,
  },
};

export default function ValentineProposal() {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);
  const [acceptanceStage, setAcceptanceStage] = useState<
    "initial" | "confetti" | "clue-prompt"
  >("initial");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const [animations, setAnimations] = useState<{
    Book: boolean;
    beef: boolean;
    waves: boolean;
  }>({
    Book: false,
    beef: false,
    waves: false,
  });
  const [discoveredStories, setDiscoveredStories] = useState<Set<string>>(
    new Set(),
  );
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const useFloatingAnimation = () => {
    const [position, setPosition] = useState({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: Math.random() * 2 + 1,
      dy: Math.random() * 2 + 1,
    });

    useEffect(() => {
      const move = () => {
        setPosition((prev) => {
          const newX = prev.x + prev.dx;
          const newY = prev.y + prev.dy;

          if (newX <= 0 || newX >= window.innerWidth - 40) prev.dx *= -1;
          if (newY <= 0 || newY >= window.innerHeight - 40) prev.dy *= -1;

          return { ...prev, x: newX, y: newY };
        });
      };

      const interval = setInterval(move, 30);
      return () => clearInterval(interval);
    }, []);

    return position;
  };

  const BookPosition = useFloatingAnimation();
  const beefPosition = useFloatingAnimation();
  const wavePosition = useFloatingAnimation();
  const volleyPosition = useFloatingAnimation();

  const unlockStory = (story: string) => {
    if (!discoveredStories.has(story)) {
      setDiscoveredStories(new Set([...discoveredStories, story]));
      setCurrentStory(stories[story]);
      setTimeout(() => setCurrentStory(null), 5000);
    }
  };

  const handleNoHover = () => {
    setCount((prev) => prev + 1);
    if (count < 5) {
      setNoButtonPosition({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
      });
    } else if (count === 5) {
      setNoButtonPosition({ x: 0, y: 0 });
    }
  };

  const handleNoClick = () => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    if (isMobile || count <= 5) {
      handleNoHover();
    }
    if (count > 5) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  const animatetext = useAnimatedText("Oh fuck you", showPopup);

  const handleAcceptance = () => {
    setShowConfetti(true);
    setAcceptanceStage("confetti");

    setTimeout(() => {
      setAcceptanceStage("clue-prompt");
    }, 3000);

    setTimeout(() => {
      localStorage.setItem("greeting", "true");
      router.push("/first-clue");
    }, 6000);
  };

  return (
    <>
      <title>Hellooooo valentine</title>
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-4 relative overflow-hidden">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
          />
        )}

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl"
          >
            {showPopup && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="fixed inset-0 flex justify-center items-center z-50"
                >
                  <Card className="border-none w-96">
                    <CardContent className="p-8">
                      <p className="text-2xl font-light text-center">
                        {animatetext}
                      </p>
                      <div className="mt-4 text-center">
                        <Image
                          src={fuckyou}
                          alt="reaction gif"
                          width={400} // Adjust width as necessary
                          height={225} // Adjust height as necessary
                          className="max-w-full h-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </>
            )}

            <motion.div
              className="absolute cursor-pointer"
              style={{ top: BookPosition.y, left: BookPosition.x }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              onClick={() => {
                setAnimations((prev) => ({ ...prev, Book: true }));
                unlockStory("Book");
              }}
            >
              <BookHeart className="w-8 h-8 text-rose-400" />
            </motion.div>

            <motion.div
              className="absolute cursor-pointer"
              style={{ top: volleyPosition.y, left: volleyPosition.x }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              onClick={() => {
                setAnimations((prev) => ({ ...prev, Book: true }));
                unlockStory("volley");
              }}
            >
              <Volleyball className="w-8 h-8 text-yellow-700" />
            </motion.div>

            <motion.div
              className="absolute cursor-pointer"
              style={{ top: beefPosition.y, left: beefPosition.x }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setAnimations((prev) => ({ ...prev, beef: true }));
                unlockStory("beef");
              }}
            >
              <Beef className="w-8 h-8 text-red-600" />
            </motion.div>

            <motion.div
              className="absolute cursor-pointer"
              style={{ top: wavePosition.y, left: wavePosition.x }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setAnimations((prev) => ({ ...prev, waves: true }));
                unlockStory("waves");
              }}
            >
              <Waves className="w-8 h-8 text-blue-400" />
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-10 shadow-xl relative z-10"
              layoutId="mainCard"
            >
              <div className="space-y-8 text-center">
                {acceptanceStage === "initial" && (
                  <>
                    <motion.h1
                      className="text-4xl font-light tracking-tight text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Hey, it&apos;s me...
                    </motion.h1>
                    <motion.p
                      className="text-md text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      The one who always sneaks glances at you during meetings.
                      Like Dwight with his beets, I’ve been cultivating some
                      serious feelings. Sooo what do you say...
                    </motion.p>

                    <AnimatePresence mode="popLayout">
                      {currentStory && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="bg-gray-50 rounded-2xl p-6 text-center"
                        >
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {currentStory.title}
                          </h3>
                          <p className="text-gray-600">
                            {currentStory.content}
                          </p>
                          <Image
                            src={currentStory.image}
                            alt="story image"
                            width={250} // Adjust width as necessary
                            height={150} // Adjust height as necessary
                            className="mx-auto my-5 max-w-full h-auto"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex justify-center gap-4">
                      <motion.button
                        className="px-8 py-3 bg-blue-500 text-white rounded-xl font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleAcceptance}
                      >
                        Be my Valentine?
                      </motion.button>

                      <motion.button
                        className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-medium"
                        animate={noButtonPosition}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseOver={handleNoHover}
                        onClick={handleNoClick}
                      >
                        Maybe Not
                      </motion.button>
                    </div>
                  </>
                )}

                {acceptanceStage === "confetti" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-3xl font-light text-gray-900">
                      Congratulations! 🎉
                    </h2>
                    <p className="text-xl text-gray-600">
                      You’ve been promoted to Assistant to the Valentine.
                    </p>
                  </motion.div>
                )}

                {acceptanceStage === "clue-prompt" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-light text-gray-900">
                      But wait, there&apos;s more!
                    </h2>
                    <p className="text-lg text-gray-600">
                      Like a Dunder Mifflin paper trail, follow the clues to
                      discover our story...
                    </p>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="w-8 h-8 mx-auto text-blue-500" />
                    </motion.div>
                  </motion.div>
                )}

                <div className="text-center text-sm text-gray-400">
                  {discoveredStories.size} / {Object.keys(stories).length}{" "}
                  memories found
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
