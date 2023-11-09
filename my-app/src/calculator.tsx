import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [inputS, setinputS] = useState(0);
  const [inputP, setinputP] = useState(0);

  const handleChangeinputS = (e: any) => {
    setinputS(parseFloat(e.target.value));
  };

  const handleChangeinputP = (e: any) => {
    setinputP(parseFloat(e.target.value));
  };

  const sum = 1 / (1 - inputP / 100 + inputP / 100 / inputS);

  const divStyle = {
    backgroundColor: "lightblue",
    padding: "10px",
  };

  return (
    <div style={divStyle}>
      <h1>Laskin</h1>
      <label htmlFor="s-value">
        Rinnakkaiseten suorittimien lukumääärä (s):
      </label>
      <input
        id="s-value"
        type="number"
        value={inputS}
        onChange={handleChangeinputS}
      />
      <label htmlFor="p-value">Rinnastettava osuus (p) %:</label>
      <input
        id="p-value"
        type="number"
        value={inputP}
        onChange={handleChangeinputP}
      />
      <p>Nopeuskerroin: {sum}</p>
    </div>
  );
};

export default Calculator;
