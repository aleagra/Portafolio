import React, { useCallback, useContext, memo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { MouseContext } from "../context/MouseContext";

const Background = memo(() => {
  const { theme } = useContext(MouseContext);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  let color;
  if (theme === "dark") {
    color = "rgba(255, 255, 255, 1)";
  } else {
    color = "000000";
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {},
        },
        fpsLimit: 240,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 6,
            },
          },
        },
        particles: {
          color: {
            value: color,
          },
          links: {
            color: ``,
            distance: 6,
            enable: true,
            opacity: 1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 700,
            },
            value: 80,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
});

export default Background;
