import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function DotsMobileStepper({
    handleNextSlide,
    handlePrevSlide,
    sliderStep,
}) {
    // const [activeStep, setActiveStep] = React.useState(0);
    const theme = useTheme();

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     handleNextSlide();
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //     handlePrevSlide();
    // };

    return (
        <MobileStepper
            variant="dots"
            steps={3}
            position="static"
            activeStep={sliderStep}
            sx={{ flexGrow: 1, marginTop: "25px" }}
            nextButton={
                <Button
                    size="small"
                    onClick={handleNextSlide}
                    disabled={sliderStep === 2}>
                    Next
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button
                    size="small"
                    onClick={handlePrevSlide}
                    disabled={sliderStep === 0}>
                    {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
            }
        />
    );
}
