import React from "react";
import { OrbitControls } from "@react-three/drei";
import Lighting from "./Lighting";
import Car from "./Car";
import { useControls } from "leva";

const ThreeMainComponent = ({
  currentCarColorState,
  currentLightColorState,
  currentWindowColorState,
  roughnessPaint,
  clearCoatPaint,
  metalnessPaint,
  reflectivityPaint,
  lightIntensity,
  shadowOpacity,
  shadowBlur,
  roughnessWindow,
  clearCoatWindow,
  metalnessWindow,
  reflectivityWindow,
}) => {
  return (
    <>
      <OrbitControls
        enablePan={false}
        minDistance={25}
        maxDistance={40}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
      />
      <Lighting
        currentLightColorState={currentLightColorState}
        lightIntensity={lightIntensity}
        shadowOpacity={shadowOpacity}
        shadowBlur={shadowBlur}
      />
      <Car
        currentCarColorState={currentCarColorState}
        currentWindowColorState={currentWindowColorState}
        roughnessPaint={roughnessPaint}
        clearCoatPaint={clearCoatPaint}
        metalnessPaint={metalnessPaint}
        reflectivityPaint={reflectivityPaint}
        roughnessWindow={roughnessWindow}
        clearCoatWindow={clearCoatWindow}
        metalnessWindow={metalnessWindow}
        reflectivityWindow={reflectivityWindow}
      />
    </>
  );
};

export default ThreeMainComponent;
