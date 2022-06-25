import * as React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

import { STORES_INFO } from "../data";
const HomeStore = () => {
    const stores = STORES_INFO;
    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <Box key={0} sx={{ backgroundColor: "lightcyan" }}>
            <Typography
                sx={{
                    textAlign: "center",
                    backgroundColor: "lightgoldenrodyellow",
                }}
                variant="h3"
                component="div"
                gutterBottom>
                {stores[activeStep].store}
            </Typography>
            <Box sx={{ width: "100%" }}>
                <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="body2"
                    gutterBottom>
                    {stores[activeStep].item}
                </Typography>
                <Box
                    sx={{
                        width: "80%",
                        height: "200px",
                        backgroundColor: "lightgreen",
                        margin: "0 auto 5px auto",
                    }}>
                    {stores[activeStep].image}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}>
                    <Button
                        sx={{ width: "30%", marginBottom: "5px" }}
                        variant="contained">
                        Contained
                    </Button>
                    <Link>
                        <Button
                            sx={{ width: "30%", marginBottom: "5px" }}
                            variant="outlined">
                            Outlined
                        </Button>
                    </Link>
                </Box>
                <Carousel
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                />
            </Box>
        </Box>
    );
};

export default HomeStore;
