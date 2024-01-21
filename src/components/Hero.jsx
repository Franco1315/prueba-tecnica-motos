import React, { useState, useEffect } from 'react';
import Carrusel from './Carrusel';
import ProgressBar from './ProgressBar';

const Hero = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [progressBars, setProgressBars] = useState([0, 0, 0]);

  const backgrounds = [
    'fondo-h.png',
    'fondoh-2.png',
    'fondoh-3.png',
  ];

  const barTitles = ["NUEVA E350", "CITA EN TALLER", "SCOOTER ZOONTES"];

  const heroContents = [
    {
      h1: "Novedades 2024",
      h2: "Nueva E350",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum eaque eligendi neque qui id excepturi similique dolorum sequi hic. Obcaecati harum eaque eligendi neque qui id excepturi similique dolorum sequi hic ",
      btnText: "Descúbrela",
    },
    {
      h1: "Citas en taller",
      h2: "Citas en taller",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque eligendi neque qui id excepturi similique dolorum sequi hic. Obcaecati harum eaque eligendi neque qui id excepturi similique dolorum sequi hic",
      btnText: "Ver servicios",
    },
    {
      h1: "Scooters Zontes",
      h2: "Scooters Zontes",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum eaque eligendi neque qui id excepturi similique dolorum sequi hic. Obcaecati harum eaque eligendi neque qui id excepturi similique ",
      btnText: "Ver opciones",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((prevProgressBars) =>
        prevProgressBars.map((prevProgress, index) =>
          index === backgroundIndex ? (prevProgress + 1) % 101 : prevProgress
        )
      );
    }, 40);

    setTimeout(() => {
      clearInterval(interval);
      setProgressBars([0, 0, 0]);
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundIndex]);

  return (
    <div className="relative bg-cover bg-center h-screen overflow-hidden">
      <Carrusel images={backgrounds} />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center text-white ml-6 lg:flex lg:ml-20 ">
        <h1 className="text-1xl lg:text-2xl xl:text-xl uppercase font-bold italic mb-2">{heroContents[backgroundIndex].h1}</h1>
        <h2 className="text-4xl lg:text-6xl xl:text-8xl uppercase font-bold italic mb-4">{heroContents[backgroundIndex].h2}</h2>
        <p className=" lg:w-1/2 md:w-2/4 sm:w-2/4 ont-light text-sm  lg:text-lg lg:mb-8 mb-4 leading-2">
          {heroContents[backgroundIndex].p}
        </p>
        <button className="uppercase px-6 py-2 mb-14 bg-yellow hover:bg-dark hover:text-yellow duration-500 text-dark font-bold italic w-[10em]  ">
          {heroContents[backgroundIndex].btnText}
        </button>
      </div>

      <div className='absolute bottom-28 left-6 right-0 mx-auto mt-1 lg:mb-0 lg:ml-14'>
        <div className="lg:flex">
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
