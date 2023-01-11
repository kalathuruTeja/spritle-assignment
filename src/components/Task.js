import React, { useState, useEffect } from "react";

const Task = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("");
  const [solution, setSolution] = useState("");

  useEffect(() => {
    if (firstValue && secondValue && operator) {
      if (operator === "+") {
        setSolution(Number(firstValue) + Number(secondValue));
      } else if (operator === "-") {
        setSolution(Number(firstValue) - Number(secondValue));
      } else if (operator === "*") {
        setSolution(Number(firstValue) * Number(secondValue));
      } else if (operator === "/") {
        const data = Math.floor(Number(firstValue) / Number(secondValue));
        setSolution(data);
      } else {
        setSolution("Invalid Operator");
      }
    }
  }, [firstValue, secondValue, operator]);

  return (
    <div className="master-container">
      <div className="wrapper master-center">
        <form className="master-form">
          <div className="section-title paddingTopDesktop-thirty">
            <h2 className="title">Calculate something</h2>
            <div></div>
          </div>
          <div className="main-input-container">
            <div className="input-container">
              <input
                type="number"
                className="primary-input full-width-mobile full-width-desktop"
                placeholder="first value"
                value={firstValue}
                onChange={(e) => setFirstValue(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="number"
                className="primary-input full-width-mobile full-width-desktop"
                placeholder="second value"
                value={secondValue}
                onChange={(e) => setSecondValue(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                className="primary-input full-width-mobile full-width-desktop"
                placeholder="operator (+*-/)"
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              />
            </div>
          </div>
          <div className="result-container text-center">
            <h2>Result : {solution}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task;