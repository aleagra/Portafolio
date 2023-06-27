import { useEffect, useContext, useRef } from "react";
import { MouseContext } from "../context/MouseContext";
import { motion } from "framer-motion";

export function Mouse() {
  const { dropletRef, sizeRef } = useContext(MouseContext);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const smoothedMouseX = useRef(0);
  const smoothedMouseY = useRef(0);
  const scaleRef = useRef(1);
  useEffect(() => {
    function handleMouseMove(event) {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    }
    document.addEventListener("mousemove", handleMouseMove);

    function animateDroplet() {
      const velocityX = smoothedMouseX.current - mouseX.current;
      const velocityY = smoothedMouseY.current - mouseY.current;
      const circleX =
        mouseX.current - dropletRef.current.offsetWidth / 2 + velocityX;
      const circleY =
        mouseY.current - dropletRef.current.offsetHeight / 2 + velocityY;
      dropletRef.current.style.transition = "0.01s";
      dropletRef.current.style.left = `${circleX}px`;
      dropletRef.current.style.top = `${circleY}px`;
      dropletRef.current.style.width = sizeRef.current.width;
      dropletRef.current.style.height = sizeRef.current.height;
      smoothedMouseX.current += (mouseX.current - smoothedMouseX.current) * 0.1;
      smoothedMouseY.current += (mouseY.current - smoothedMouseY.current) * 0.1;
      requestAnimationFrame(animateDroplet);
    }

    animateDroplet();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dropletRef, sizeRef]);

  return (
    <motion.div
      ref={dropletRef}
      className={`pointer-events-none fixed z-20 h-5 w-5 rounded-full bg-[#ded3c3] dark:bg-white max-xl:hidden `}
      animate={{
        scale: scaleRef.current,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 30,
        },
      }}
    />
  );
}
