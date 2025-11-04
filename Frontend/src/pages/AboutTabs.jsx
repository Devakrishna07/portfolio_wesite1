import React from "react";
import { TabsMyUI } from "../components/Myui/Tabsmyui";
import cert1 from '../assets/images/djangoudemy.png';
import cert2 from '../assets/images/djangokimo.jpg';
import cert3 from '../assets/images/reactlt.jpg';
 // replace with your image path

export const AboutTabs = () => {
  const education = (
    <div className="space-y-2">
      <p><span className="font-semibold text-white">Name:</span> Deva Prasad NR</p>
      <p><span className="font-semibold text-white">College:</span> College of Engineering Poonjar (CEP)</p>
      <p><span className="font-semibold text-white">Degree:</span> B.Tech in Computer Science & Engineering</p>
      <p><span className="font-semibold text-white">Year:</span> 2022 - 2026</p>
      <p><span className="font-semibold text-white">CGPA:</span> 7.9</p>
    </div>
  );

  const experience = (
    <div className="space-y-3">
      <div>
        <p className="font-semibold text-blue-400 flex justify-between items-center ">Webmaster <span>2024 - present</span></p>
        <p>College of Engineering Poonjar</p>
      </div>
      <div>
        <p className="font-semibold text-blue-400 flex justify-between items-center">Chairman <span>2024 - present</span> </p>
        <p>Computer Society, IEEE SB CE Poonjar</p>
      </div>
      <div>
        <p className="font-semibold text-blue-400 flex justify-between items-center">Student Lead <span>2025 - present</span> </p>
        <p>FOSS CLUB CE Poonjar</p>
      </div>
    </div>
  );

  const certifications = (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <img
          src={cert1}
          alt="Django masterclass"
          className="w-46 h-32 rounded-lg object-cover"
        />
        <div>
          <p className="font-semibold text-blue-400">Django masterclass</p>
          <p>From udemy — June 2025</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={cert2}
          alt="Introduction to Django"
          className="w-46 h-32 rounded-lg object-cover"
        />
        <div>
          <p className="font-semibold text-blue-400">Introduction to django</p>
          <p>From KIMO.ai — July 2024</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={cert3}
          alt="React Frontend"
          className="w-46 h-32 rounded-lg object-cover"
        />
        <div>
          <p className="font-semibold text-blue-400">Introduction to React</p>
          <p>From learntube — Februvary 2025</p>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { label: "Education", content: education },
    { label: "Experience", content: experience },
    { label: "Certifications", content: certifications },
  ];

  return (
    <div className="flex justify-center items-center">
      <TabsMyUI tabs={tabs} />
    </div>
  );
};
