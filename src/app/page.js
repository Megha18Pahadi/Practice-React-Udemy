"use client"
import CustomCarousel from "@/components/carousel";
import "./globals.css";
import { useState, useRef, useEffect } from "react";

const buttonData = [
  { id: "1", title: "Wealth" },
  { id: "2", title: "Education" },
  { id: "3", title: "Investment" },
  { id: "4", title: "Assets" },
];

export default function App() {
  // const [isDisable, setIsDisable] = useState(true);
  // const [isActive, setIsActive] = useState(false);
  // const [clickedButtonId, setClickedButtonId] = useState(null);
  // const insideRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (!insideRef.current.contains(e.target)) {
  //       setIsActive(false);
  //       setIsDisable(true);
  //       console.log("You clicked outside");
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  // const handleClick = (id) => {
  //   setClickedButtonId(id);
  //   setIsActive(true);
  //   setIsDisable(false);
  //   console.log("id", clickedButtonId);
  // };

  // const handleDisable = () => {
  //   setIsDisable(false);
  //   console.log("disabled");
  // };

  return (
    <>
      {/* <div
        className="App"
        style={{
          display: "flex",
          gap: "2px",
          cursor: "pointer",
        }}
      >
        <div ref={insideRef}>
          {buttonData.map(({ id, title }) => (
            <div
              key={id}
              style={{ background: "yellow", width: "200px", height: "100px" }}
              onClick={() => handleClick(id)}
            >
              <button
                style={{
                  height: "80px",
                  width: "180px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                {id}
              </button>
              <div>{title}</div>
            </div>
          ))}
        </div>
        <br />
      </div>
      {clickedButtonId ? (
        <button
          style={{
            background: isActive ? "green" : "grey",
            padding: "8px",
            marginTop: "12px",
            cursor: "pointer",
          }}
          onClick={handleClick}
          clicked={isDisable}
        >
          Explore Now
        </button>
      ) : null} */}

      {/* ======================carousel calling============== */}
      <CustomCarousel/>
    </>
  );
}
