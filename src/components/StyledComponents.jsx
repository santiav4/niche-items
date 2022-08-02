import { styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { create } from "@mui/material/styles/createTransitions";
import { MobileStepper } from "@mui/material";

export const AppBox = styled(Box)(() => ({
    color: "#3e4855",
    position: "relative",
    backgroundColor: "#edebe0",
    minWidth: "374px",
    height: "100%",
}));
export const Stepper = styled(MobileStepper)(() => ({
    color: "#3e4855",
    overflowX: "hidden",
}));
