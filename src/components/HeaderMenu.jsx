import React from "react";
import { Link } from "react-router-dom";
import StorePreviewItems from "./StorePreviewItems";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const HeaderMenu = ({ stores }) => {
    return (
        <Box
            sx={{
                width: "60%",
                display: "flex",
                justifyContent: "flex-end",
            }}>
            {stores.map((store, index) => (
                <Box key={index}>
                    <Link
                        to={`/${store.store}`}
                        style={{
                            textDecoration: "none",
                            color: "#3e4855",
                        }}>
                        <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            sx={{
                                marginLeft: "20px",
                                transition: "all 400ms",
                                "&:hover": { color: "#FF4D4E" },
                            }}>
                            {store.store.replaceAll("-", " ")}
                        </Typography>
                    </Link>
                </Box>
            ))}
        </Box>
    );
};

export default HeaderMenu;
