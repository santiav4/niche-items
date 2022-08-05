import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <Box
            sx={{
                // height: "100px",
                borderTop: "1px solid #ada79b",
                // position: "fixed",
                bottom: "0",
                backgroundColor: "#edebe0",
                width: "100%",

                // alignSelf: "flex-end",
                // flexGrow: "1",
            }}>
            <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ textAlign: "center", margin: "10px 0" }}>
                &copy; Niche Items Copyright
            </Typography>
        </Box>
    );
};

export default Footer;
