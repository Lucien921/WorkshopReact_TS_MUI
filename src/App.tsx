import { useState } from "react";
import { Button, Container, Grid, Paper, styled } from "@mui/material";
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";

const OutputContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  const equals = () => {
    const val = calculate();
    setCurrentValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverwrite(true);
  };

  const calculate = () => {
    if (!prevValue || !operation) return currentValue;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result;
    switch (operation) {
      case "÷":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "+":
        result = prev + curr;
        break;
    }
    return result;
  };

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (x: string) => {
    if (prevValue) {
      const val = calculate();
      setCurrentValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currentValue);
    }
    setOperation(x);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;

    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <Container maxWidth="sm">
      {/* !!!TODO
      Fill this with the calculator UI, use the components from the DigitButton and OperationButton
      use CalculatorBase as the base component for the calculator and OutputContainer for the output display(should be at the top)
      Use Grid Component for the layout
      FIY: = should be its separate button
      */}
    </Container>
  )
}

export default App;
