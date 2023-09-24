import { useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { MouseContext} from "../context/MouseContext";
import { IMouseContextValue } from "types/interface";

interface MouseProps {}

export function Mouse(props: MouseProps) {
  const contextValue: IMouseContextValue | null = useContext(MouseContext);

  if (!contextValue) {
  
    return null; 
  }

  const { dropletRef, sizeRef } = contextValue;
  const mouseX = useRef<number>(0);
  const mouseY = useRef<number>(0);
  const smoothedMouseX = useRef<number>(0);
  const smoothedMouseY = useRef<number>(0);
  const scaleRef = useRef<number>(1);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    }

    document.addEventListener("mousemove", handleMouseMove);

    function animateDroplet() {
      if (dropletRef && dropletRef.current) {
        const velocityX = smoothedMouseX.current - mouseX.current;
        const velocityY = smoothedMouseY.current - mouseY.current;
        const circleX =
          mouseX.current - dropletRef.current.offsetWidth / 2 + velocityX;
        const circleY =
          mouseY.current - dropletRef.current.offsetHeight / 2 + velocityY;
        dropletRef.current.style.transition = "0.01s";
        dropletRef.current.style.left = `${circleX}px`;
        dropletRef.current.style.top = `${circleY}px`;
        dropletRef.current.style.width = sizeRef?.current?.width || 'auto'; 
        dropletRef.current.style.height = sizeRef?.current?.height || 'auto';
        smoothedMouseX.current += (mouseX.current - smoothedMouseX.current) * 0.1;
        smoothedMouseY.current += (mouseY.current - smoothedMouseY.current) * 0.1;
        requestAnimationFrame(animateDroplet);
      }
    }

    animateDroplet();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dropletRef, sizeRef]);

  return (
    <motion.div
      ref={dropletRef}
      className={`pointer-events-none fixed z-20 h-5 w-5 rounded-full bg-[#ded3c3] transition-all duration-1000 dark:bg-white max-xl:hidden `}
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