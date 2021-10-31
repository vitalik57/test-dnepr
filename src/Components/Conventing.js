import React from "react";
import { useState } from "react/cjs/react.development";
import styles from "../../src/styles.module.css";
const initialState = {
  yard: "",
  foot: "",
  meters: "",
  centimeters: "",
  conventMetersValue: "",
  conventFootValue: "",
  conventYardValue: "",
  conventMilimitersValue: "",
  conventCetemetersValue: "",
  milimiters: ""
};
const Conventing = () => {
  const [state, setState] = useState(initialState);
  const [measureOptions, setmeasureOptions] = useState("");
  const measure = e => {
    setmeasureOptions({ measureOpion: e.target.value });
  };
  const meters = state.meters;
  const foot = state.meters;
  const yard = state.meters;
  const centimeters = state.meters;

  const conventMeters = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventMetersValue: 3.2 * meters }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventMetersValue: 1.09 * meters }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventMetersValue: 100 * meters }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventMetersValue: meters }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventMetersValue: meters * 0.001 }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventMetersValue: meters * 1000 }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventMetersValue: meters * 39.3 }));
        break;
      default:
        break;
    }
  };
  const conventFoot = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventFootValue: foot }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventFootValue: 0.33 * foot }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventFootValue: 3048 * foot }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventFootValue: foot * 0.3048 }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventFootValue: foot * 0.0003048 }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventFootValue: foot * 3048000 }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventFootValue: foot * 12 }));
        break;
      default:
        break;
    }
  };
  const conventYard = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventYardValue: yard * 3 }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventYardValue: yard }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventYardValue: 9144 * yard }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventYardValue: yard * 0.9144 }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventYardValue: yard * 0.0009144 }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventYardValue: yard * 9144000 }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventYardValue: yard * 36 }));
        break;
      default:
        break;
    }
  };
  const conventCentemiters = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventCetemetersValue: 0.32 * centimeters }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventCetemetersValue: 0.109 * centimeters }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventCetemetersValue: centimeters }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventCetemetersValue: centimeters * 0.01 }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventCetemetersValue: centimeters * 0.000001 }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventCetemetersValue: centimeters * 10 }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventCetemetersValue: centimeters * 0.393 }));
        break;
      default:
        break;
    }
  };
  const conventMiliemiters = () => {
    switch (measureOptions.measureOpion) {
      case "foot":
        setState(prev => ({ ...prev, conventMilimitersValue: 0.32 * centimeters }));
        break;
      case "yard":
        setState(prev => ({ ...prev, conventMilimitersValue: 0.109 * centimeters }));
        break;
      case "centimeters":
        setState(prev => ({ ...prev, conventMilimitersValue: centimeters }));
        break;
      case "meters":
        setState(prev => ({ ...prev, conventMilimitersValue: centimeters * 0.01 }));
        break;
      case "kilometers":
        setState(prev => ({ ...prev, conventMilimitersValue: centimeters * 0.000001 }));
        break;
      case "milimeters":
        setState(prev => ({ ...prev, conventMilimitersValue: centimeters * 10 }));
        break;
      case "Inch":
        setState(prev => ({ ...prev, conventMilimitersValue: centimeters * 0.393 }));
        break;
      default:
        break;
    }
  };
  const changeInput = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div
      // onChange={e => {
      //   e.target.value;
      // }}
      >
        {/* <div className={styles.measure__input}>
          <label htmlFor="">
            <h2>yard</h2> <input onChange={changeInput} name="yard" value={state.yard} type="number" />
            <button onClick={conventFoot}>convert Yard</button>
          </label>
          <label htmlFor="">
            <h2>foot</h2> <input onChange={changeInput} name="foot" value={state.foot} type="number" />
            <button onClick={conventFoot}>convert Foot</button>
          </label>
          <label htmlFor="">
            <h2>meters</h2> <input onChange={changeInput} name="meters" value={state.meters} type="number" />
            <button onClick={conventMeters}>convert Meters</button>
          </label>
          <label htmlFor="">
            <h2>centimeters</h2> <input onChange={changeInput} name="centimeters" value={state.centimeters} type="number" />
            <button onClick={conventCentemiters}>Convent Centemiters</button>
          </label>
        </div>{" "}
        <div>
          <select value={state.measureOpion} onChange={measure} name="measure" id="measure">
            <option>meters </option>
            <option>centimeters</option>
            <option>milimeters</option>
            <option>kilometers</option>
            <option>Inch</option>
            <option>foot</option>
            <option>yard</option>
          </select>
        </div> */}
        <div>
          <h2>Перетворити:</h2>
          <select value={state.measureOpion} onChange={measure} name="measure" id="measure">
            <option>meters </option>
            <option>centimeters</option>
            <option>milimeters</option>
            <option>kilometers</option>
            <option>Inch</option>
            <option>foot</option>
            <option>yard</option>
          </select>
          <input type="number" />
          <span> В</span>
          <select value={state.measureOpion} onChange={measure} name="measure" id="measure">
            <option>meters </option>
            <option>centimeters</option>
            <option>milimeters</option>
            <option>kilometers</option>
            <option>Inch</option>
            <option>foot</option>
            <option>yard</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Conventing;
