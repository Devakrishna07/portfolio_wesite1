import React from "react";
import { motion } from "framer-motion";

export const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      {/* Skill name and percentage */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold font-moglandemo text-blue-400">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>

      {/* Animated bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-blue-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
