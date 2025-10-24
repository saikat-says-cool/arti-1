"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsInitialized(true);
    });
  }, []);

  const options: any = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "hsl(var(--primary))", // Changed to neon yellow
      },
      links: {
        color: "hsl(var(--primary))", // Changed to neon yellow
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    emitters: [
      {
        direction: "top-right",
        rate: {
          delay: 5,
          quantity: 1,
        },
        position: {
          x: 0,
          y: 30,
        },
        size: {
          width: 0,
          height: 0,
        },
        particles: {
          move: {
            direction: "top-right",
            enable: true,
            outModes: { default: "destroy" },
            speed: 40,
            straight: true,
            trail: { enable: true, fillColor: "hsl(var(--primary))", length: 10 }, // Changed to neon yellow
          },
          size: { value: { min: 2, max: 4 } },
          opacity: {
            value: { min: 0.2, max: 1 },
            animation: { enable: true, speed: 1, sync: false, startValue: "max", destroy: "min" },
          },
        },
      },
      {
        direction: "top-left",
        rate: {
          delay: 7,
          quantity: 1,
        },
        position: {
          x: 70,
          y: 100,
        },
        size: {
          width: 0,
          height: 0,
        },
        particles: {
          move: {
            direction: "top-left",
            enable: true,
            outModes: { default: "destroy" },
            speed: 40,
            straight: true,
            trail: { enable: true, fillColor: "hsl(var(--primary))", length: 10 }, // Changed to neon yellow
          },
          size: { value: { min: 2, max: 4 } },
          opacity: {
            value: { min: 0.2, max: 1 },
            animation: { enable: true, speed: 1, sync: false, startValue: "max", destroy: "min" },
          },
        },
      }
    ],
    detectRetina: true,
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        options={options}
      />
    </div>
  );
};

export default ParticlesBackground;