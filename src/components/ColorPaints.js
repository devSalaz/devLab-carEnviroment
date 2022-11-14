import React from "react";
import { TiPlus } from "react-icons/ti";
import { BsFillBackspaceReverseFill } from "react-icons/bs";
import "../styles/paintStyles.css";
import { motion } from "framer-motion";

const ColorPaints = ({
  carColorListState,
  currentCarColorState,
  setCurrentCarColorState,
  setPickerVisible,
  setAppState,
}) => {
  const checkCurrentCarColor = (color) => {
    return color == currentCarColorState;
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="colors-car-container"
    >
      {carColorListState.map((dataColor, index) => {
        return (
          <div
            key={`carColorState${dataColor.color}${index}`}
            className={`colorContainer ${
              checkCurrentCarColor(dataColor.color) ? "active" : ""
            }`}
            onClick={() => {
              setCurrentCarColorState(dataColor.color);
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

export default ColorPaints;
