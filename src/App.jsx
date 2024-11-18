import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    // console.log(buttonText);
    // console.log("Button Clicked")
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <>
      <h1 className={styles.heading}> Calculator App</h1>
      <div className={styles.calculator}>
        <Display displayValue={calValue}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
