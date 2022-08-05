import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { Link } from "react-router-dom";

import { HiMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Typography } from "@mui/material";

export default function TemporaryDrawer({ stores }) {
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            sx={{
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}>
            <List sx={{}}>
                <ListItem disablePadding>
                    <Link
                        to={`/`}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon> */}
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                {stores.map((store, index) => (
                    <ListItem key={index} disablePadding>
                        <Link
                            to={`/${store.store}`}
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}>
                            <ListItemButton>
                                {/* <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon> */}
                                <ListItemText
                                    primary={store.store.replace(/-/gi, " ")}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <HiMenuAlt1
                        style={{ color: "#3e4855" }}
                        size={32}
                        onClick={toggleDrawer(anchor, true)}>
                        {anchor}
                    </HiMenuAlt1>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

/* 
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
*/
