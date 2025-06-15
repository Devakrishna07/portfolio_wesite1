import React from 'react';
import BasicTabs from '../components/Tabs';

function Contact() {
  const tabLabels = ['Education', 'Skills', 'Contact Info'];

  const tabContents = [
    <>
      🎓 B.Tech in Computer Science, College of Engineering Poonjar (2022–2026)<br />
      📚 CGPA: 7.77
    </>,
    <>
      🛠️ Python, React, Django, Tailwind CSS, Flutter<br />
      💡 Tools: GitHub, Figma, Photoshop
    </>,
    <>
      📧 Email: devaprasadnr2@gmail.com<br />
      📞 Phone: 9446476637<br />
      🔗 Portfolio: <a href="https://devaprasadnr.vercel.app" className="text-blue-500 underline">Visit</a>
    </>
  ];

  return (
    <div id="Contact" className="w-screen min-h-screen bg-[#f5f5f5] dark:bg-[#393E46] flex flex-col items-center justify-center font-montserrat px-4">
      <h1 className="text-5xl font-semibold mb-6 dark:text-white">Qualification</h1>
      <BasicTabs tabLabels={tabLabels} tabContents={tabContents} />
    </div>
  );
}

export default Contact;
