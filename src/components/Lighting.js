import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
const Lighting = ({
  currentLightColorState,
  lightIntensity,
  shadowOpacity,
  shadowBlur,
}) => {
  const areaLightRef = useRef(null);
  const shadowRef = useRef(null);

  useEffect(() => {
    const colorLight = `0x${currentLightColorState.replace("#", "")}`;
    const colorToAnim = new THREE.Color().setHex(colorLight);

    gsap.to(areaLightRef.current.color, {
      duration: 0.4,
      r: colorToAnim.r,
      g: colorToAnim.g,
      b: colorToAnim.b,
      ease: "linear",
    });
    gsap.to(shadowRef.current.children[0].material.color, {
      duration: 0.55,
      r: colorToAnim.r,
      g: colorToAnim.g,
      b: colorToAnim.b,
      ease: "linear",
    });
  }, [currentLightColorState]);

  return (
    <>
      <Environment
        files="./hdris/summer_stage_01_2k.hdr"
        ground={{
          height: 32,
          radius: 130,
          scale: 40,
        }}
      />
      <ContactShadows
        ref={shadowRef}
        resolution={1024}
        scale={50}
        blur={shadowBlur}
        opacity={shadowOpacity}
        position-y={-0.45}
        color={"#3085c1"}
      />
      <directionalLight
        color={"#ffb600"}
        intensity={0.5}
        position={[5, 10, 20]}
      />
      <ambientLight color={"#ffb600"} intensity={0.1} />
      <rectAreaLight
        ref={areaLightRef}
        color={"#3085c1"}
        position={[-1, -2, 0]}
        scale={16}
        intensity={lightIntensity}
        rotation-x={Math.PI * 0.5}
      />
    </>
  );
};

export default Lighting;
