import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Hero = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [progressBars, setProgressBars] = useState([0, 0, 0]);

  const backgrounds = [
    'url("./public/fondo-h.png")',
    'url("./public/fondoh-2.png")',
    'url("./public/fondoh-3.png")',
  ];

  const barTitles = ["NUEVA E350", "CITA EN TALLER", "SCOOTER ZOONTES"];

  const heroContents = [
    {
      h1: "Novedades 2024",
      h2: "Nueva E350",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum eaque eligendi neque qui id excepturi similique dolorum sequi hic. Eveniet enim, dolore alias ad eius nihil explicabo atque aspernatur.",
      btnText: "Descúbrela",
    },
    {
      h1: "Citas en Taller",
      h2: "Modelo XYZ",
      p: "Otro texto descriptivo sobre el modelo XYZ. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      btnText: "Ver servicios",
    },
    {
      h1: "Alquiler de Scooters",
      h2: "Scooter Zoontes",
      p: "Descubre nuestra flota de scooters Zoontes disponibles para alquiler. ¡La mejor manera de moverte por la ciudad!",
      btnText: "Ver opciones",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((prevProgressBars) => {
        return prevProgressBars.map((prevProgress, index) => {
          if (index === backgroundIndex) {
            return (prevProgress + 1) % 101;
          } else {
            return prevProgress;
          }
        });
      });
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      setProgressBars([0, 0, 0]);
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <div className="flex items-center bg-cover bg-center h-screen" style={{ backgroundImage: backgrounds[backgroundIndex] }}>

      <div className="text-white mx-4 ml-16 md:max-w-[80%]">

        <h1 className="text-1xl uppercase font-bold italic mb-2">{heroContents[backgroundIndex].h1}</h1>
        <h2 className="text-7xl uppercase font-bold italic mb-4">{heroContents[backgroundIndex].h2}</h2>
        <p className="md:w-1/2 font-light text-sm md:text-base lg:text-lg mb-6 leading-2">
          {heroContents[backgroundIndex].p}
        </p>
        <button className="uppercase px-6 py-2 mt-6 mb-14 bg-yellow text-dark font-bold italic">
          {heroContents[backgroundIndex].btnText}
        </button>

        <div className='flex'>
          {progressBars.map((progress, index) => (
            <ProgressBar
              key={index}
              contenidoBarra={barTitles[index]}
              progress={progress}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Hero;
