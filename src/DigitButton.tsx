import { Button, Grid } from "@mui/material";

interface DigitButtonProps {
  digit: number;
  onClick: (digit: number) => void;
}

export const DigitButton: React.FC<DigitButtonProps> = ({ digit, onClick }) => {
  return (
    <Grid item>
      <Button fullWidth variant="outlined" onClick={() => onClick(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};
