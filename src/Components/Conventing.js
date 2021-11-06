import React from "react";
import { useState } from "react/cjs/react.development";
const initialState = {
  inputValue: "",
  conventValue: ""
};
const InitialMeasure = { measureOpion: "meters", measureValue: "meters" };
const Conventing = () => {
  const [state, setState] = useState(initialState);
  const [measureOptions, setmeasureOptions] = useState(InitialMeasure);
  const measure = e => {
    const { name, value } = e.target;
    setmeasureOptions(prev => ({ ...prev, [name]: value }));
  };
  const changeInput = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const inputValue = state.inputValue;

  const conventMeters = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: 3.2 * inputValue + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: 1.09 * inputValue + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: 100 * inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.001 + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 1000 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue * 39.3 + "in" }));
        break;
      default:
        break;
    }
  };
  const conventKilometers = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: 3280.8 * inputValue + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: 1093.61 * inputValue + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: 100000 * inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue * 1000 + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 1000000 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue * 39370.078 + "in" }));
        break;
      default:
        break;
    }
  };
  const conventFoot = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: inputValue + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: 0.33 * inputValue + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: 3048 * inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.3048 + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.0003048 + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 3048000 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue * 12 + "in" }));
        break;
      default:
        break;
    }
  };
  const conventYard = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: inputValue * 3 + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: inputValue + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: 9144 * inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.9144 + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.0009144 + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 9144000 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue * 36 + "in" }));
        break;
      default:
        break;
    }
  };
  const conventInch = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.083 + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.0277 + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: 2.54 * inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.0254 + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.0000254 + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 25.4 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue + "in" }));
        break;
      default:
        break;
    }
  };
  const conventCentemiters = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: 0.32 * inputValue + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: 0.109 * inputValue + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.01 + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.000001 + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 10 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.393 + "in" }));
        break;
      default:
        break;
    }
  };
  const conventMiliemiters = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventValue: 0.32 * inputValue + "ft" }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventValue: 0.109 * inputValue + "yd" }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventValue: inputValue + "cm" }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.01 + "m" }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.000001 + "km" }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventValue: inputValue * 10 + "mm" }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventValue: inputValue * 0.393 + "in" }));
        break;
      default:
        break;
    }
  };
  const conventAll = () => {
    switch (measureOptions.measureValue) {
      case "foot":
        conventFoot();
        break;
      case "yard":
        conventYard();
        break;
      case "centimeters":
        conventCentemiters();
        break;
      case "meters":
        conventMeters();
        break;
      case "kilometers":
        conventKilometers();
        break;
      case "milimeters":
        conventMiliemiters();
        break;
      case "Inch":
        conventInch();
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div>
        <div className="container">
          <h2>Перетворити:</h2>
          <select class="select-css" value={state.measureOpion} onChange={measure} name="measureValue" id="measure">
            <option>meters </option>
            <option>centimeters</option>
            <option>milimeters</option>
            <option>kilometers</option>
            <option>Inch</option>
            <option>foot</option>
            <option>yard</option>
          </select>
          <input type="number" name="inputValue" onChange={changeInput} />
          <select class="select-css" value={state.measureOpion} onChange={measure} name="measureOpion" id="measure">
            <option>meters </option>
            <option>centimeters</option>
            <option>milimeters</option>
            <option>kilometers</option>
            <option>Inch</option>
            <option>foot</option>
            <option>yard</option>
          </select>
          <button onClick={conventAll}>convent</button>
          <span className="covent__value">Conventing value:{state.conventValue}</span>
        </div>
      </div>
    </>
  );
};

export default Conventing;
