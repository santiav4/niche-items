import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useMediaQuery } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import { Link } from "react-router-dom";
import { STORES_INFO as stores } from "../data.js";
import TemporaryDrawer from "./TemporaryDrawer.jsx";
import HeaderMenu from "./HeaderMenu.jsx";

export default function ButtonAppBar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("tablet"));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "#edebe0" }}>
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Link
                        style={{
                            textDecoration: "none",
                            fontWeight: "bold",
                            color: "#3e4855",
                            marginLeft: "15px",
                        }}
                        to="/">
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1, fontWeight: "bold" }}>
                            Niche Items
                        </Typography>
                    </Link>

                    {!matches && <TemporaryDrawer stores={stores} />}
                    {matches && <HeaderMenu stores={stores} />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
