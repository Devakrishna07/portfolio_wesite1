import React, { useState } from "react";

export const TabsMyUI = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isCertificationsTab = activeIndex ===2;

  return (
    <div className="w-full shadow-xl bg-white/10 rounded-xl">
      {/* Tab Headers */}
      <div className="flex border-b border-white/20 shadow-lg shadow-purple-400/30">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 py-2 text-3xl font-typographica transition-colors duration-200 px-6 
              ${
                activeIndex === index
                  ? "border-b-2 border-purple-500 text-purple-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`p-4 text-white/40 font-moglandemo text-xl ${
        isCertificationsTab ? "p-4 text-white/40 font-moglandemo text-xl h-[290px] overflow-y-scroll no-scrollbar" : ""
      }` }>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
