import React from "react";
const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <>
        <section
          className="m-auto flex min-h-screen flex-col items-center justify-center "
          id={idName}
        >
          <Component />
        </section>
      </>
    );
  };

export default Wrapper;
