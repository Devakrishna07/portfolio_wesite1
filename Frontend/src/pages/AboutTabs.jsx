import React from "react";
import { TabsMyUI } from "../components/Myui/Tabsmyui";
import cert1 from '../assets/images/djangoudemy.png';
import cert2 from '../assets/images/djangokimo.jpg';
import cert3 from '../assets/images/reactlt.jpg';

export const AboutTabs = () => {
  const education = (
    <div className="space-y-2 text-sm sm:text-base md:text-lg">
      <p><span className="font-semibold text-white">Name:</span> Deva Prasad NR</p>
      <p><span className="font-semibold text-white">College:</span> College of Engineering Poonjar (CEP)</p>
      <p><span className="font-semibold text-white">Degree:</span> B.Tech in Computer Science & Engineering</p>
      <p><span className="font-semibold text-white">Year:</span> 2022 - 2026</p>
      <p><span className="font-semibold text-white">CGPA:</span> 7.9</p>
    </div>
  );

  const experience = (
    <div className="space-y-3 text-sm sm:text-base md:text-lg">
      <div>
        <p className="font-semibold text-blue-400 flex justify-between items-center">Webmaster <span>2024 - present</span></p>
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
    <div className="space-y-4">
      {[{img: cert1, title: "Django masterclass", org: "Udemy", date: "June 2025"},
        {img: cert2, title: "Introduction to Django", org: "KIMO.ai", date: "July 2024"},
        {img: cert3, title: "Introduction to React", org: "Learntube", date: "February 2025"}]
        .map((cert, i) => (
          <div key={i} className="flex flex-row items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg">
            <img src={cert.img} alt={cert.title} className="w-48 h-28 sm:w-40 sm:h-24 rounded-lg object-cover" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-blue-400">{cert.title}</p>
              <p>From {cert.org} — {cert.date}</p>
            </div>
          </div>
      ))}
    </div>
  );

  const tabs = [
    { label: "Education", content: education },
    { label: "Experience", content: experience },
    { label: "Certifications", content: certifications },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <TabsMyUI tabs={tabs} />
    </div>
  );
};
