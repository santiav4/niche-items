import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import Link from "@mui/material/Link";

const StorePreviewItems = ({ store, handleStoreId }) => {
    const [sliderStep, setSliderStep] = useState(0);

    const handleNextSlide = () => {
        setSliderStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handlePrevSlide = () => {
        setSliderStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (sliderStep > 1) {
                setSliderStep(0);
                return;
            }
            handleNextSlide();
        }, 5000);
        return () => clearTimeout(timer);
    }, [sliderStep]);

    return (
        <div
            className="home-cards"
            style={{
                marginBottom: "25px",
                zIndex: "9",
                paddingTop: "10px",
                padding: "10px 20px",
            }}>
            <Typography
                sx={{
                    textAlign: "center",

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
                    {store.store.replace(/-/gi, " ")}
                </Link>
            </Typography>

            <Box sx={{ width: "100%" }}>
                {/* Store item image */}
                <RouterLink
                    onClick={() => handleStoreId(store.store)}
                    to={`${store.store}/${store.allItems[sliderStep].route}`}>
                    <div
                        style={{
                            width: "296px",
                            height: "200px",
                            margin: "0 auto 5px auto",
                            transtition: "300ms",
                            overflow: "hidden",
                            borderRadius: "20px",
                        }}>
                        <Box
                            className="slider-container"
                            sx={{
                                display: "flex",
                                transform: `translateX(${sliderStep * -296}px)`,
                                transtition: "300ms",
                            }}>
                            {store.image[0].map((src, index) => (
                                <img
                                    key={index}
                                    style={{ height: "100%" }}
                                    src={src}
                                    alt={src}
                                />
                            ))}
                        </Box>
                    </div>
                </RouterLink>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        marginTop: "25px",
                        textAlign: "center",
                    }}
                    variant="body2"
                    gutterBottom>
                    {store.allItems[sliderStep].name}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        margin: "10px 0",
                        textAlign: "center",
                    }}
                    variant="body2"
                    gutterBottom>
                    {`Price: $${store.allItems[sliderStep].price}.00`}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
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
                                maxHeight: "94",
                                borderRadius: "10px",
                                backgroundColor: "#FF4D4E",
                                "&:hover": {
                                    backgroundColor: "#FF4D4E",
                                },
                            }}
                            variant="contained">
                            Buy
                        </Button>
                    </Link>

                    <RouterLink
                        onClick={() => {
                            handleStoreId(store.store);
                        }}
                        style={{ textDecoration: "none" }}
                        to={`${store.store}`}>
                        {/* to={`/allItems/${store.store}`}> */}
                        <Button
                            sx={{
                                marginBottom: "5px",
                                width: "120px",
                                borderRadius: "10px",
                                borderColor: "#E85A4F",
                                color: "#E85A4F",
                                "&:hover": {
                                    borderColor: "#E98074",
                                    color: "#E98074",
                                    backgroundColor: "#EAE7DC",
                                },
                            }}
                            variant="outlined">
                            All Items
                        </Button>
                    </RouterLink>
                </Box>
                <Carousel
                    sliderStep={sliderStep}
                    handleNextSlide={handleNextSlide}
                    handlePrevSlide={handlePrevSlide}
                />
            </Box>
        </div>
    );
};

export default StorePreviewItems;
