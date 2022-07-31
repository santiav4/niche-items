import * as React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";
import { STORES_INFO as stores } from "../data.js";

import { useState, useEffect } from "react";

export default function Navbar({ handleStoreId }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDrawerOpen = () => {
        console.log("Open Menu");
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        console.log("use effect");
    }, [isOpen]);

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
            <HiMenuAlt1
                className="menu-icon-closed"
                size={32}
                onClick={handleDrawerOpen}
                style={{ marginRight: "15px" }}
            />
            <div
                style={{}}
                className={isOpen ? "menu menu-open" : "menu menu-close"}>
                <div
                    style={{
                        textAlign: "right",
                        padding: "10px 10px 0 0",
                        color: "#3e4855",
                    }}>
                    <GrClose
                        style={{ color: "#3e4855" }}
                        onClick={handleDrawerClose}
                        size={32}
                    />
                </div>
                {/* List items  */}
                {stores.map((store) => (
                    <div
                        onClick={() => handleStoreId(store.store)}
                        key={store.id}>
                        <Link to={`allItems/${store.store}`}>
                            {store.store}
                        </Link>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
