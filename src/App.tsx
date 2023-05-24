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
      <CalculatorBase elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <OutputContainer data-testid="output">{currentValue}</OutputContainer>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={clear}
            >
              AC
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={del}
            >
              DEL
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={percent}
            >
              %
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => selectOperation("/")}
            >
              ÷
            </Button>
          </Grid>
          {/* Digit Buttons */}
          <DigitButton digit={7} onClick={setDigit} />
          <DigitButton digit={8} onClick={setDigit} />
          <DigitButton digit={9} onClick={setDigit} />
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => selectOperation("*")}
            >
              *
            </Button>
          </Grid>
          <DigitButton digit={4} onClick={setDigit} />
          <DigitButton digit={5} onClick={setDigit} />
          <DigitButton digit={6} onClick={setDigit} />
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => selectOperation("-")}
            >
              -
            </Button>
          </Grid>
          <DigitButton digit={1} onClick={setDigit} />
          <DigitButton digit={2} onClick={setDigit} />
          <DigitButton digit={3} onClick={setDigit} />
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => selectOperation("+")}
            >
              +
            </Button>
          </Grid>
          <Grid item xs={6}>
            <DigitButton digit={0} onClick={setDigit} />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setDigit(".")}
            >
              .
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="outlined"
              onClick={equals}
            >
              =
            </Button>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
