import { Box } from "@mui/system";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import Carousel from "./Carousel";

const StorePreviewItems = ({ store }) => {
    const [sliderStep, setSliderStep] = React.useState(0);
    const handleNextSlide = () => {
        setSliderStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handlePrevSlide = () => {
        setSliderStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Box
            sx={{
                backgroundColor: "lightcyan",
                marginBottom: "10px",
            }}>
            <Typography
                sx={{
                    textAlign: "center",
                    backgroundColor: "lightgoldenrodyellow",
                    fontWeight: "bold",
                }}
                variant="h3"
                component="div"
                gutterBottom>
                {store.store}
            </Typography>
            <Box sx={{ width: "100%" }}>
                <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="body2"
                    gutterBottom>
                    {store.item[0]}
                </Typography>
                <Box
                    sx={{
                        width: "80%",
                        height: "200px",
                        backgroundColor: "lightgreen",
                        margin: "0 auto 5px auto",
                    }}>
                    {store.image[sliderStep]}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                    <Button
                        sx={{ marginBottom: "5px", width: "120px" }}
                        variant="contained">
                        Buy
                    </Button>
                    <Link to={`/allItems/${store.store}`}>
                        <Button
                            sx={{ marginBottom: "5px", width: "120px" }}
                            variant="outlined">
                            All Items
                        </Button>
                    </Link>
                </Box>
                <Carousel
                    handleNextSlide={handleNextSlide}
                    handlePrevSlide={handlePrevSlide}
                />
            </Box>
        </Box>
    );
};

export default StorePreviewItems;
