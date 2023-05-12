import { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { MouseContext } from "../context/MouseContext";
function Background() {
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
          color: {
            value: ["dark:bg-[#1c1c1c]", "bg-[#f7f7f7]"],
          },
        },
        fpsLimit: 120,
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
              duration: 0.6,
            },
          },
        },
        particles: {
          color: {
            value: color,
          },
          links: {
            color: ` `,
            distance: 150,
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
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Background;
