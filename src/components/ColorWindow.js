import React from "react";
import { TiPlus } from "react-icons/ti";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "../styles/windowStyles.css";

const ColorWindow = ({
  windowColorListState,
  setCurrentWindowColorState,
  currentWindowColorState,
  setPickerVisible,
  setAppState,
}) => {
  const checkCurrentWindowColor = (color) => {
    return color == currentWindowColorState;
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="window-light-container"
    >
      {windowColorListState.map((dataColor, index) => {
        return (
          <div
            key={`carColorState${dataColor.color}${index}`}
            className={`colorContainer ${
              checkCurrentWindowColor(dataColor.color) ? "active" : ""
            }`}
            onClick={() => {
              setCurrentWindowColorState(dataColor.color);
            }}
          >
            <div
              className="colorDiv"
              style={{ backgroundColor: `${dataColor.color}` }}
            ></div>
          </div>
        );
      })}
      <div
        className="addColorContainer"
        onClick={() => {
          setPickerVisible(true);
        }}
      >
        <div className="iconContainer">
          <TiPlus size="2rem" />
        </div>
      </div>
      <div
        className="addColorContainer"
        onClick={() => {
          setAppState("config");
          setPickerVisible(false);
        }}
      >
        <div className="iconContainer">
          <BsFillBackspaceReverseFill className="icon-back" size="1.5rem" />
        </div>
      </div>
    </motion.div>
  );
};

export default ColorWindow;
