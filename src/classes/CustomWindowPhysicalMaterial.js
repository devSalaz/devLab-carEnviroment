import * as THREE from "three";
import { forwardRef } from "react";
import { extend } from "@react-three/fiber";

class CustomWindowPhysicalMaterial extends THREE.MeshPhysicalMaterial {
  constructor(args) {
    super(args);

    this.uniforms = {
      uValueY: { value: -3.0 },
      uColor1: { value: new THREE.Color(0x000000) },
      uColor2: { value: new THREE.Color("skyblue") },
    };

    this.onBeforeCompile = (shader) => {
      shader.uniforms = {
        ...shader.uniforms,
        ...this.uniforms,
      };

      shader.vertexShader = shader.vertexShader.replace(
        "#include <common>",
        `#include <common>
        varying vec3 uPosition;
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        "vViewPosition = - mvPosition.xyz;",
        `vViewPosition = - mvPosition.xyz;
        uPosition = position.xyz;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <common>",
        `#include <common>
        uniform float uValueY;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec3 uPosition;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        "vec4 diffuseColor = vec4( diffuse, opacity );",
        `float posY = (uPosition.z + uValueY);
        posY = step(posY, 0.5);
        vec3 finalColor = mix(uColor1, uColor2 , posY);
        vec4 diffuseColor = vec4( finalColor, opacity );`
      );
    };

    Object.keys(this.uniforms).forEach((name) =>
      Object.defineProperty(this, name, {
        get: () => this.uniforms[name].value,
        set: (v) => (this.uniforms[name].value = v),
      })
    );
  }
}

extend({ WindowCustomMaterial: CustomWindowPhysicalMaterial });

export default forwardRef(function MeshWindowCustomMaterial(props, ref) {
  return <windowCustomMaterial ref={ref} {...props} />;
});
