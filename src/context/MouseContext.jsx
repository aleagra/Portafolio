import React, { createContext, useRef, useState } from "react";

export const MouseContext = createContext();

function MouseContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const liRefs = useRef([]);
  const pRefs = useRef([]);
  const aRefs = useRef([]);
  const divRefs = useRef([]);
  const dropletRef = useRef();
  const sizeRef = useRef({ width: "20px", height: "20px" });

  const handleMouseEnter = React.useCallback((index, type) => {
    if (type === "li") {
      sizeRef.current.width = "70px";
      sizeRef.current.height = "70px";
      dropletRef.current.style.backgroundColor = "#dfd3c3";
    } else if (type === "p") {
      sizeRef.current.width = "120px";
      sizeRef.current.height = "120px";
      dropletRef.current.classList.add("inverted");
    } else if (type === "div") {
      dropletRef.current.classList.add("transparent");
    } else if (type === "a") {
      sizeRef.current.width = "70px";
      sizeRef.current.height = "70px";
      dropletRef.current.style.backgroundColor = "#dfd3c3";
    }
  }, []);

  const handleMouseLeave = React.useCallback((index, type) => {
    if (type === "li") {
    } else if (type === "div") {
      dropletRef.current.style.backgroundColor = "";
    }
    sizeRef.current.width = "20px";
    sizeRef.current.height = "20px";
    dropletRef.current.classList.remove("grande");
    dropletRef.current.classList.remove("transparent");
    dropletRef.current.classList.remove("inverted");
    dropletRef.current.style.backgroundColor = "";
  }, []);

  return (
    <MouseContext.Provider
      value={{
        liRefs,
        aRefs,
        theme,
        setTheme,
        divRefs,
        pRefs,
        dropletRef,
        sizeRef,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
}

export default MouseContextProvider;
