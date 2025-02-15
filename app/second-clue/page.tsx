"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import RouteProtection from "@/components/RouteProtection";

const SecondClue: React.FC = () => {
  return (
    <RouteProtection requiredClue="first-clue">
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
                <FileText className="w-12 h-12 text-gray-600 mx-auto" />
              </motion.div>

              <h1 className="text-3xl font-light tracking-tight text-gray-900">
                Second Clue: Paper Trail
              </h1>

              {/* Add your second clue content here */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </RouteProtection>
  );
};

export default SecondClue;
