import React, { useState } from "react";

export const TabsMyUI = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isCertificationsTab = activeIndex === 2;

  return (
    <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] shadow-xl bg-white/10 rounded-xl mx-auto">
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center border-b border-white/20 shadow-lg shadow-purple-400/30 overflow-x-auto no-scrollbar">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 min-w-[100px] text-center py-2 text-base sm:text-lg md:text-xl lg:text-2xl font-typographica transition-colors duration-200 px-2 sm:px-4 ${
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
      <div
        className={`p-3 sm:p-4 text-white/40 font-moglandemo text-sm sm:text-base md:text-lg ${
          isCertificationsTab
            ? "max-h-[260px] sm:max-h-[300px] overflow-y-scroll no-scrollbar"
            : ""
        }`}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};
