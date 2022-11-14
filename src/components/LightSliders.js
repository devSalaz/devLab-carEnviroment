import React from "react";
import { motion } from "framer-motion";

const LightSliders = ({
  lightIntensity,
  shadowOpacity,
  setLightIntensity,
  setShadowOpacity,
  shadowBlur,
  setShadowBlur,
  slidersVisible,
}) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={`sliders-container ${slidersVisible ? "" : "hide"}`}
    >
      <h3 className="slider-title">Lighting</h3>
      <div className="slider-content">
        <h4 className="slider-property">Light Intensity</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          value={lightIntensity}
          max="60"
          step="1"
          onChange={(e) => {
            setLightIntensity(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{lightIntensity}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Shadow Opacity</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          value={shadowOpacity}
          step="0.01"
          onChange={(e) => {
            setShadowOpacity(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{shadowOpacity}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Shadow Blur</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0.8"
          max="5"
          value={shadowBlur}
          step="0.01"
          onChange={(e) => {
            setShadowBlur(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{shadowBlur}</h4>
      </div>
    </motion.div>
  );
};

export default LightSliders;
