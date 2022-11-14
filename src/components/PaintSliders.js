import React from "react";
import { motion } from "framer-motion";

const PaintSliders = ({
  roughnessPaint,
  setRoughnessPaint,
  clearCoatPaint,
  setClearCoatPaint,
  metalnessPaint,
  setMetalnessPaint,
  reflectivityPaint,
  setReflectivityPaint,
  slidersVisible,
}) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={`sliders-container ${slidersVisible ? "" : "hide"}`}
    >
      <h3 className="slider-title">Car Paint</h3>
      <div className="slider-content">
        <h4 className="slider-property">Roughness</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          value={roughnessPaint}
          max="1"
          step="0.01"
          onChange={(e) => {
            setRoughnessPaint(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{roughnessPaint}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Clear Coat R</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          value={clearCoatPaint}
          step="0.01"
          onChange={(e) => {
            setClearCoatPaint(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{clearCoatPaint}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Metalness</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={metalnessPaint}
          onChange={(e) => {
            setMetalnessPaint(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{metalnessPaint}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Reflectivity</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={reflectivityPaint}
          onChange={(e) => {
            setReflectivityPaint(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{reflectivityPaint}</h4>
      </div>
    </motion.div>
  );
};

export default PaintSliders;
