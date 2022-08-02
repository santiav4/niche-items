import * as React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";
import { STORES_INFO as stores } from "../data.js";

import { useState, useEffect } from "react";
import TemporaryDrawer from "./TemporaryDrawer.jsx";

export default function Navbar() {
    // const [isOpen, setIsOpen] = useState(false);

    // const handleDrawerOpen = () => {
    //     console.log("Open Menu");
    //     setIsOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setIsOpen(false);
    // };

    // useEffect(() => {
    //     console.log("use effect");
    // }, [isOpen]);

    return (
        <div className="navbar" style={{}}>
            <h1 style={{}}>
                <Link
                    style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#3e4855",
                        marginLeft: "15px",
                    }}
                    to="/">
                    LOGO
                </Link>
            </h1>

            <TemporaryDrawer stores={stores} />
        </div>
    );
}
