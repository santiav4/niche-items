import { Box } from "@mui/system";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Link from "@mui/material/Link";

const StorePreviewItems = ({ store, handleStoreId }) => {
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
                marginBottom: "25px",
                zIndex: "9",
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
                <Link
                    underline="none"
                    sx={{ color: "#3e4855" }}
                    target={"_blank"}
                    href={store.homePage}>
                    {store.store}
                </Link>
            </Typography>

            <Box sx={{ width: "100%" }}>
                <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="body2"
                    gutterBottom>
                    {store.itemName[sliderStep]}
                </Typography>
                {/* Store item image */}
                <RouterLink
                    onClick={() => handleStoreId(store.store)}
                    to={`/${store.itemRoute[sliderStep]}`}>
                    <Box
                        sx={{
                            width: "80%",
                            height: "200px",
                            backgroundColor: "lightgreen",
                            margin: "0 auto 5px auto",
                        }}>
                        {store.image[sliderStep]}
                    </Box>
                </RouterLink>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                    <Link
                        underline="none"
                        target={"_blank"}
                        href={store.link[sliderStep]}>
                        <Button
                            sx={{
                                marginBottom: "5px",
                                width: "120px",
                                borderRadius: "0",
                            }}
                            variant="contained">
                            Buy
                        </Button>
                    </Link>

                    <RouterLink
                        style={{ textDecoration: "none" }}
                        to={`/allItems/${store.store}`}>
                        <Button
                            sx={{
                                marginBottom: "5px",
                                width: "120px",
                                borderRadius: "0",
                            }}
                            variant="outlined">
                            All Items
                        </Button>
                    </RouterLink>
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
