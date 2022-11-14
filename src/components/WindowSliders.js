import React from "react";
import { motion } from "framer-motion";

const WindowSliders = ({
  roughnessWindow,
  setRoughnessWindow,
  clearCoatWindow,
  setClearCoatWindow,
  metalnessWindow,
  setMetalnessWindow,
  reflectivityWindow,
  setReflectivityWindow,
  slidersVisible,
}) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={`sliders-container ${slidersVisible ? "" : "hide"}`}
    >
      <h3 className="slider-title">Window</h3>
      <div className="slider-content">
        <h4 className="slider-property">Roughness</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          value={roughnessWindow}
          max="1"
          step="0.01"
          onChange={(e) => {
            setRoughnessWindow(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{roughnessWindow}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Clear Coat R</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          value={clearCoatWindow}
          step="0.01"
          onChange={(e) => {
            setClearCoatWindow(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{clearCoatWindow}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Metalness</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={metalnessWindow}
          onChange={(e) => {
            setMetalnessWindow(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{metalnessWindow}</h4>
      </div>
      <div className="slider-content">
        <h4 className="slider-property">Reflectivity</h4>
        <input
          className="range-slider__range"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={reflectivityWindow}
          onChange={(e) => {
            setReflectivityWindow(e.target.value);
          }}
        ></input>
        <h4 className="slider-value">{reflectivityWindow}</h4>
      </div>
    </motion.div>
  );
};

export default WindowSliders;
