import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import MeshCustomPaintMaterial from "../classes/CustomPaintPhysicalMaterial";
import MeshCustomWindowMaterial from "../classes/CustomWindowPhysicalMaterial";

const Car = ({
  currentCarColorState,
  currentWindowColorState,
  roughnessPaint,
  clearCoatPaint,
  metalnessPaint,
  reflectivityPaint,
  roughnessWindow,
  clearCoatWindow,
  metalnessWindow,
  reflectivityWindow,
}) => {
  const materialRef = useRef(null);
  const glassRef = useRef(null);
  const { nodes, materials } = useGLTF("./models/carModel.glb");

  useEffect(() => {
    const colorCar = `0x${currentCarColorState.replace("#", "")}`;
    materialRef.current.uniforms.uValueZ.value = 7.0;
    materialRef.current.uniforms.uColor2.value = new THREE.Color().setHex(
      colorCar
    );

    gsap.to(materialRef.current.uniforms.uValueZ, {
      duration: 0.75,
      value: -6.0,
      ease: "linear",
      onComplete() {
        materialRef.current.uniforms.uValueZ.value = 7.0;
        materialRef.current.uniforms.uColor1.value = new THREE.Color().setHex(
          colorCar
        );
      },
    });
  }, [currentCarColorState]);

  useEffect(() => {
    const colorWindow = `0x${currentWindowColorState.replace("#", "")}`;
    glassRef.current.uniforms.uColor2.value = new THREE.Color().setHex(
      colorWindow
    );
    gsap.to(glassRef.current.uniforms.uValueY, {
      duration: 0.45,
      value: -6.0,
      ease: "linear",
      onComplete() {
        glassRef.current.uniforms.uValueY.value = -3.0;
        glassRef.current.uniforms.uColor1.value = new THREE.Color().setHex(
          colorWindow
        );
      },
    });
  }, [currentWindowColorState]);

  return (
    <>
      <group dispose={null} scale={1} position-y={-1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.headlight_glass_headlight_glass_0.geometry}
          material={materials.headlight_glass}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exhaust_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.black_parts_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        >
          <MeshCustomWindowMaterial
            ref={glassRef}
            roughness={roughnessWindow}
            metalness={metalnessWindow}
            clearcoat={1}
            clearcoatRoughness={clearCoatWindow}
            reflectivity={reflectivityWindow}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.side_skirts_carbon_fiber_0.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mirrors_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.intercooler_intercooler_0.geometry}
          material={materials.intercooler}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.black_floats_Pure_black_0.geometry}
          material={materials.Pure_black}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036_black_parts_0.geometry}
          material={materials.black_parts}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.black_floats_chrome_0.geometry}
          material={materials.chrome}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trunk_car_body.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        >
          <MeshCustomPaintMaterial
            ref={materialRef}
            roughness={roughnessPaint}
            metalness={metalnessPaint}
            clearcoat={clearCoatPaint}
            clearcoatRoughness={clearCoatPaint}
            reflectivity={reflectivityPaint}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dark_carbon_fiber.geometry}
          material={materials.carbon_fiber}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wheels.geometry}
          material={materials.wheel}
          rotation={[-Math.PI / 2, 0, 0]}
          material-envMapIntensity={1}
        />
      </group>
    </>
  );
};

export default Car;
