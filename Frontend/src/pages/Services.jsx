import React from 'react';
import ServiceCard from '../components/ServiceCard';
import risingpoonjarimg from '../assets/risingpoonjar.png';
import signalimg from '../assets/signal3.0.png';
import miniprj from '../assets/awsproject.png';

function Services() {
  const Service_data = [
    {
      img: risingpoonjarimg,
      tittle: "risingpoonjar2k25 website",
      txt1: "rising Poonjar 2k25",
      txt2: "A Govt initiative by Hon.MLA Sebastian Kulathunkal for Industrial development of Poonjar",
      link: "https://www.risingpoonjar2k25.in/"
    },
    {
      img: signalimg,
      tittle: "signal 3.0",
      txt1: "Signal 3.0",
      txt2: "Website for registration and updates regarding signal 3.0 a event organized by IEEE SPS Kerala section at College of Engineering Poonjar",
      link:"https://signal.ieeespskc.in/"
    },
    {
      img: miniprj,
      tittle: "Ecommerce application using aws",
      txt1: "Ecommerce application using aws",
      txt2: "Ecommerce application using aws and Image recognition software for easy sales on online world",
      link:"https://github.com/Devakrishna07/react-vite-django-ecommerce_app.git"
    },
  ];

  return (
    <div id='Projects' style={{ backgroundColor: '#254D70' }} className="w-full min-h-screen px-4 py-12 font-montserrat text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Projects</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {Service_data.map((service, index) => (
          <li key={index}>
            <ServiceCard
              img={service.img}
              tittle={service.tittle}
              txt1={service.txt1}
              txt2={service.txt2}
              link={service.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
