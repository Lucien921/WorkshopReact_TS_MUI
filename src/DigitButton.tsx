import { Button, Grid } from "@mui/material";
import React from "react";

interface DigitButtonProps {
  digit: number;
  onClick: (digit: string) => void;
}

export const DigitButton: React.FC<DigitButtonProps> = ({ digit, onClick }) => {
  return (
    <Grid item xs={3}>
      <Button fullWidth variant="outlined" onClick={() => onClick(digit.toString())}>
        {digit}
      </Button>
    </Grid>
  );
};
