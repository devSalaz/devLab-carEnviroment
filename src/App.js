import React, { useState, useRef, useEffect, Suspense } from "react";
import { ChromePicker } from "react-color";
import { Canvas } from "@react-three/fiber";
import ThreeMainComponent from "./components/ThreeMainComponent";
import { dataCarColors } from "./utils/colorsData";
import { dataLightColors } from "./utils/colorsData";
import { dataWindowColor } from "./utils/colorsData";
import "./App.css";
import "./styles/slidersStyles.css";
import ColorPaints from "./components/ColorPaints";
import ConfigContainer from "./components/ConfigContainer";
import ColorLight from "./components/ColorLight";
import ColorWindow from "./components/ColorWindow";
import { motion } from "framer-motion";
import PaintSliders from "./components/PaintSliders";
import LightSliders from "./components/LightSliders";
import WindowSliders from "./components/WindowSliders";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { GiRobotGrab } from "react-icons/gi";
import Loader from "./components/Loader";

function App() {
  const canvasRef = useRef(null);
  const pickerRef = useRef(null);
  const [isAppLoaded, setIsAppLoaded] = useState(false);
  const [isPickerGrab, setIsPickerGrab] = useState(false);
  const [slidersVisible, setSlidersVisible] = useState(true);
  const [roughnessPaint, setRoughnessPaint] = useState(0.1);
  const [clearCoatPaint, setClearCoatPaint] = useState(0);
  const [metalnessPaint, setMetalnessPaint] = useState(0.5);
  const [reflectivityPaint, setReflectivityPaint] = useState(1);
  const [lightIntensity, setLightIntensity] = useState(20);
  const [shadowOpacity, setShadowOpacity] = useState(0.7);
  const [shadowBlur, setShadowBlur] = useState(2);
  const [roughnessWindow, setRoughnessWindow] = useState(0);
  const [clearCoatWindow, setClearCoatWindow] = useState(0);
  const [metalnessWindow, setMetalnessWindow] = useState(0.5);
  const [reflectivityWindow, setReflectivityWindow] = useState(1);
  const [appState, setAppState] = useState("config");
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [carColorListState, setCarColorListState] = useState(dataCarColors);
  const [currentCarColorState, setCurrentCarColorState] = useState(
    dataCarColors[0].color
  );
  const [lightColorListState, setLightColorListState] =
    useState(dataLightColors);
  const [currentLightColorState, setCurrentLightColorState] = useState(
    dataLightColors[0].color
  );

  const [windowColorListState, setWindowColorListState] =
    useState(dataWindowColor);
  const [currentWindowColorState, setCurrentWindowColorState] = useState(
    windowColorListState[0].color
  );

  useEffect(() => {
    if (localStorage.getItem("carPaintState") != null) {
      const carPaintState = JSON.parse(localStorage.getItem("carPaintState"));
      setCarColorListState(carPaintState);
    }

    if (localStorage.getItem("lightColorState") != null) {
      const lightColorState = JSON.parse(
        localStorage.getItem("lightColorState")
      );
      setLightColorListState(lightColorState);
    }

    if (localStorage.getItem("windowColorState") != null) {
      const windowColorState = JSON.parse(
        localStorage.getItem("windowColorState")
      );
      setWindowColorListState(windowColorState);
    }
  }, []);

  const addColorToPaintColorList = () => {
    console.log(pickerRef.current.state);
    const newColor = pickerRef.current.state.hex;
    if (appState == "paint") {
      setCarColorListState([...carColorListState, { color: newColor }]);
      const arrayColorPaint = [...carColorListState, { color: newColor }];
      localStorage.setItem("carPaintState", JSON.stringify(arrayColorPaint));
      setPickerVisible(false);
    } else if (appState == "light") {
      setLightColorListState([...lightColorListState, { color: newColor }]);
      const arrayLight = [...lightColorListState, { color: newColor }];
      localStorage.setItem("lightColorState", JSON.stringify(arrayLight));
      setPickerVisible(false);
    } else {
      setWindowColorListState([...windowColorListState, { color: newColor }]);
      const arrayWindow = [...windowColorListState, { color: newColor }];
      localStorage.setItem("windowColorState", JSON.stringify(arrayWindow));
      setPickerVisible(false);
    }
  };

  const showCurentSliders = (currentAppState) => {
    if (currentAppState == "config") {
      return null;
    } else if (currentAppState == "paint") {
      return (
        <PaintSliders
          roughnessPaint={roughnessPaint}
          setRoughnessPaint={setRoughnessPaint}
          clearCoatPaint={clearCoatPaint}
          setClearCoatPaint={setClearCoatPaint}
          metalnessPaint={metalnessPaint}
          setMetalnessPaint={setMetalnessPaint}
          reflectivityPaint={reflectivityPaint}
          setReflectivityPaint={setReflectivityPaint}
          slidersVisible={slidersVisible}
        />
      );
    } else if (currentAppState == "light") {
      return (
        <LightSliders
          lightIntensity={lightIntensity}
          setLightIntensity={setLightIntensity}
          shadowOpacity={shadowOpacity}
          setShadowOpacity={setShadowOpacity}
          shadowBlur={shadowBlur}
          setShadowBlur={setShadowBlur}
          slidersVisible={slidersVisible}
        />
      );
    } else {
      return (
        <WindowSliders
          roughnessWindow={roughnessWindow}
          setRoughnessWindow={setRoughnessWindow}
          clearCoatWindow={clearCoatWindow}
          setClearCoatWindow={setClearCoatWindow}
          metalnessWindow={metalnessWindow}
          setMetalnessWindow={setMetalnessWindow}
          reflectivityWindow={reflectivityWindow}
          setReflectivityWindow={setReflectivityWindow}
          slidersVisible={slidersVisible}
        />
      );
    }
  };

  const showCurentState = (currentAppState) => {
    if (currentAppState == "config") {
      return (
        <ConfigContainer setAppState={setAppState} canvasRef={canvasRef} />
      );
    } else if (currentAppState == "paint") {
      return (
        <ColorPaints
          carColorListState={carColorListState}
          currentCarColorState={currentCarColorState}
          setCurrentCarColorState={setCurrentCarColorState}
          setPickerVisible={setPickerVisible}
          setAppState={setAppState}
        />
      );
    } else if (currentAppState == "light") {
      return (
        <ColorLight
          lightColorListState={lightColorListState}
          setLightColorListState={setLightColorListState}
          setCurrentLightColorState={setCurrentLightColorState}
          currentLightColorState={currentLightColorState}
          setPickerVisible={setPickerVisible}
          setAppState={setAppState}
        />
      );
    } else {
      return (
        <ColorWindow
          windowColorListState={windowColorListState}
          setCurrentWindowColorState={setCurrentWindowColorState}
          currentWindowColorState={currentWindowColorState}
          setPickerVisible={setPickerVisible}
          setAppState={setAppState}
        />
      );
    }
  };

  return (
    <div className="App">
      <div className="data-container">
        <motion.div layout className={`content ${isAppLoaded ? "loaded" : ""}`}>
          <motion.div
            drag={isPickerGrab}
            className={`picker-container ${isPickerVisible ? "" : "hide"}`}
          >
            <div
              className="picker-grabable"
              onMouseEnter={() => {
                setIsPickerGrab(true);
              }}
              onMouseLeave={() => {
                setIsPickerGrab(false);
              }}
            >
              <GiRobotGrab size="1rem" />
            </div>

            <ChromePicker ref={pickerRef} />
            <div className="picker-buttons">
              <button onClick={addColorToPaintColorList}>Confirm</button>
              <button
                onClick={() => {
                  setPickerVisible(false);
                }}
              >
                Cancel
              </button>
            </div>
          </motion.div>
          <div className="sliders-parent">
            <div
              className={`eye-icon ${appState == "config" ? "hide" : ""}`}
              onClick={() => {
                setSlidersVisible(!slidersVisible);
              }}
            >
              {slidersVisible ? (
                <FaRegEye size="1.25rem"></FaRegEye>
              ) : (
                <FaRegEyeSlash size="1.25rem"></FaRegEyeSlash>
              )}
            </div>
            <div className={`sliders-show ${slidersVisible ? "" : "hide"}`}>
              {showCurentSliders(appState)}
            </div>
          </div>

          {showCurentState(appState)}
        </motion.div>
      </div>
      <div className="three-container">
        <Canvas
          ref={canvasRef}
          shadows
          gl={{
            toneMappingExposure: 1,
            preserveDrawingBuffer: true,
          }}
          camera={{ fov: 30, position: [10, 7.9, 32] }}
        >
          <Suspense fallback={<Loader setIsAppLoaded={setIsAppLoaded} />}>
            <ThreeMainComponent
              currentCarColorState={currentCarColorState}
              currentLightColorState={currentLightColorState}
              currentWindowColorState={currentWindowColorState}
              roughnessPaint={roughnessPaint}
              clearCoatPaint={clearCoatPaint}
              metalnessPaint={metalnessPaint}
              reflectivityPaint={reflectivityPaint}
              lightIntensity={lightIntensity}
              shadowOpacity={shadowOpacity}
              shadowBlur={shadowBlur}
              roughnessWindow={roughnessWindow}
              clearCoatWindow={clearCoatWindow}
              metalnessWindow={metalnessWindow}
              reflectivityWindow={reflectivityWindow}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
