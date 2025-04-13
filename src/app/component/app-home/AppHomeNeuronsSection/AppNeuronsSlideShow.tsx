"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme, Typography, Link } from "@mui/material";

// Prethodno izračunate pozicije za 5 neurona
const calculatePositions = (radius: number) => {
  const positions = [];
  for (let i = 0; i < 5; i++) {
    const angle = (i * 360) / 5;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    positions.push({ x, y });
  }
  return positions;
};

const AppNeuronsSlideShow = () => {
  //* Responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // * State
  // need array 5 objects
  // each objext have text, link, color and image
  // each object will be displayed in a circle
  const data = [
    {
      name: "Blog",
      link: "https://www.google.com",
      color: "primary.main",
      image: "/assets/images/logo-plava.png",
    },
    {
      name: "Resursi",
      link: "https://www.google.com",
      color: "secondary.main",
      image: "/assets/images/logo-plavo-bijela.png",
    },
    {
      name: "Psiho-terapija",
      link: "https://www.google.com",
      color: "primary.main",
      image: "/assets/images/logo-plava.png",
    },
    {
      name: "Putovanja",
      link: "https://www.google.com",
      color: "secondary.main",
      image: "/assets/images/logo-plavo-bijela.png",
    },
    {
      name: "Intro-spekcije",
      link: "https://www.google.com",
      color: "primary.main",
      image: "/assets/images/logo-plava.png",
    },
  ];

  const [sliderAngle, setSliderAngle] = useState(0);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // Prati koji neuron je hoverovan

  const [isTextVisible, setIsTextVisible] = useState(false); // Podesava da li je tekst vidljiv

  // * Mounted
  useEffect(() => {
    if (typeof window === "undefined") return; // Proverava da li je kod na klijentskoj strani

    const interval = setInterval(() => {
      const slider = document.getElementById("slider");
      if (slider) {
        // dobijanje trenutnog ugla slidera (0-360)
        const angle = getCurrentAngleFromTransform(slider);
        // postavljanje stanja slidera
        setSliderAngle(() => angle);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // * Methods

  const getCurrentAngleFromTransform = (slider: HTMLElement) => {
    const style = window.getComputedStyle(slider);
    const matrix = style.transform;

    if (matrix === "none") return 0;

    const values = matrix.match(/matrix\(([^)]+)\)/);
    if (!values) return 0;

    const parts = values[1].split(", ");
    const a = parseFloat(parts[0]);
    const b = parseFloat(parts[1]);

    let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return (angle + 360) % 360; // Obezbeđujemo da je ugao između 0 i 360
  };

  const getRandomPosition = (index: number, isHover: boolean) => {
    // Izračunavanje pozicije na krugu za svaki od 5 neurona (x, y) u odnosu na centar slidera (slika)
    const angle = (index * 360) / 5;

    // Na hover se povecava neurom a samim tim i udaljenost neurona od centra
    const noHoverRadius = isMobile ? 130 : 200;
    const hoverRadius = isMobile ? 150 : 230;

    const radius = isHover ? hoverRadius : noHoverRadius;

    const x = Math.round(radius * Math.cos((angle * Math.PI) / 180));
    const y = Math.round(radius * Math.sin((angle * Math.PI) / 180));

    return { x, y };
  };

  // // Dobijanje  ugla kruga u odnosu na stranicu
  // const getCircleGlobalAngle = (index: number, sliderAngle: number) => {
  //   const localAngle = (index * 360) / 5; // Početni ugao kruga u odnosu na objekat
  //   return (localAngle + sliderAngle) % 360; // Konačan ugao na stranici
  // };

  // // Podešavanje pozicije za svaki od 5 neurona kada su u fokusu
  // const adjustPosition = (index: number, x: number, y: number) => {
  //   switch (index) {
  //     case 0:
  //       x += isMobile ? 20 : 10;

  //       break;
  //     case 1:
  //       y += isMobile ? 20 : 10;
  //       break;
  //     case 2:
  //       y += isMobile ? 20 : 10;
  //       x += isMobile ? 10 : 0;
  //       break;
  //     case 3:
  //       x -= 5;
  //       y -= 10;
  //       break;
  //     case 4:
  //       y -= 10;
  //       break;
  //     default:
  //       break;
  //   }
  //   return { x, y };
  // };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
      }}
    >
      <Image
        src="/assets/images/logo-plava.png"
        alt="Logo"
        width={isMobile ? 180 : 300}
        height={isMobile ? 180 : 300}
      />
      <Box
        id="slider"
        component={"div"}
        sx={{
          position: "absolute",
          width: isMobile ? 300 : 400,
          height: isMobile ? 300 : 400,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "rotate 10s linear infinite",
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        {data.map((item, index) => {
          // ako je neuron u fokusu (hover) set isHover na true
          const isHover = hoverIndex === index; // Proverava da li je ovaj neuron hoverovan

          // Dobijanje pozicije za svaki od 5 neurona u odnosu na centar slidera (slike)
          const { x, y } = getRandomPosition(index, isHover);

          // // ugao za korekciju naslova i slike
          // const negativeAngle = -getCircleGlobalAngle(0, sliderAngle);

          const hoverNeuronSize = isMobile ? 110 : 160;
          const noHoverNeuronSize = isMobile ? 70 : 100;

          return (
            <Link
              key={index}
              href={item.link}
              underline="none"
              onMouseEnter={() => setHoverIndex(index)} // Setuje hover indeks
              onMouseLeave={() => setHoverIndex(null)} // Resetuje kada miš izađe
              onAnimationEnd={() => setIsTextVisible(true)} // Prikazuje tekst kada se animacija završi
              sx={{
                position: "absolute",
                width: 5, // Initial small size
                height: 5, // Initial small size
                borderRadius: "50%",
                backgroundColor: "primary.main",
                animation: `moveOut 2s ease-out forwards ${(index + 1) * 0.2}s`,
                "--x": `${x}px`,
                "--y": `${y}px`,
                "--size": `${noHoverNeuronSize}px`,

                // transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
                padding: 0.5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundImage: isInRange ? `url(${item.image})` : "none",
                backgroundSize: "cover",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  "--size": `${hoverNeuronSize}px`,
                },
              }}
            >
              <Typography
                fontWeight={700}
                // fontSize={{ xs: ".6rem", md: "init" }}
                variant={isHover ? "h6" : "body2"}
                color="#fff"
                sx={{
                  transform: `rotate(${-sliderAngle}deg)`,
                  textTransform: "uppercase",
                  opacity: isTextVisible ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default AppNeuronsSlideShow;
