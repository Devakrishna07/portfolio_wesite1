import React, { useState } from "react";
import { SkillBar } from "../components/Myui/SkillBar";
import { motion, AnimatePresence } from "framer-motion";

export const SkillsTab = () => {
  const [active, setActive] = useState("Tools");

  // Skill data
  const tools = [
    { name: "VS Code", level: 90 },
    { name: "Git & GitHub", level: 85 },
    { name: "Postman", level: 80 },
    { name: "Figma", level: 75 },
  ];

  const frameworks = [
    { name: "React.js", level: 90 },
    { name: "TailwindCSS", level: 85 },
    { name: "Django", level: 65 },
  ];

  const softSkills = [
    { name: "Teamwork", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Leadership", level: 80 },
    { name: "Communication", level: 85 },
  ];

  const sections = {
    Tools: tools,
    "Libraries / Frameworks": frameworks,
    "Soft Skills": softSkills,
  };

  return (
    <div className="w-full max-w-xl text-gray-300 mt-5 p-2 bg-white/10 rounded-xl shadow-lg ">
      {/* Sub Tabs */}
      <div className="flex border-b border-gray-700 mb-4 shadow-lg shadow-purple-400/30 font-typographica">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActive(section)}
            className={`flex-1 py-2 text-2xl text-white/40 font-medium transition-colors duration-200 ${
              active === section
                ? "border-b-2 border-blue-500 text-blue-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Animated Section Change */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {sections[active].map((item, i) => (
            <SkillBar key={i} name={item.name} level={item.level} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
