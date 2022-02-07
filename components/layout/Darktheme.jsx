import React from "react";

const Darktheme = () => {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgb(13, 13, 19);
        --link-color: rgb(255, 195, 30);
        --text-color: rgb(173, 170, 170);
      }
    `}</style>
  );
};

export default Darktheme;
