import React from "react";
import { GiPaintBucket, GiCarDoor } from "react-icons/gi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { motion } from "framer-motion";

import "../styles/configStyles.css";

const ConfigContainer = ({ setAppState, canvasRef }) => {
  const takeScreenshot = () => {
    var linkElement = document.createElement("a");
    linkElement.href = canvasRef.current
      .toDataURL("..assets/images/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    linkElement.download = "render.jpg";
    linkElement.click();
  };

  return (
    <motion.div className="config-container">
      <div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="config-circle"
        onClick={() => {
          setAppState("paint");
        }}
      >
        <GiPaintBucket size="2rem" />
      </div>
      <div
        className="config-circle"
        onClick={() => {
          setAppState("light");
        }}
      >
        <BsFillLightningChargeFill size="1.8rem" />
      </div>
      <div
        className="config-circle"
        onClick={() => {
          setAppState("window");
        }}
      >
        <GiCarDoor size="2rem" />
      </div>
      <div className="config-circle" onClick={takeScreenshot}>
        <FaCameraRetro size="1.8rem" />
      </div>
    </motion.div>
  );
};

export default ConfigContainer;
