import React from "react";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { STORES_INFO } from "../data";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
const ItemPage = ({ storeName }) => {
    let { id } = useParams();
    let store = STORES_INFO.filter((store) => store.store === storeName)[0];
    // let name = store.itemRoute.indexOf(id);

    console.log("default useParams: ", useParams());
    console.log("useparams: ", id);
    console.log("Filtered Store: ", store, "Store Name: ", storeName);
    // console.log("index of item Name:", name);

    return (
        <Box
            sx={{
                height: "100vh",
                backgroundColor: "lightcoral",
                padding: "0 10px",
            }}>
            {/* ItemPage of {storeName} and item is {store.itemName[name]} */}
            <Box>
                <Typography variant="h6" component="div" gutterBottom>
                    <Link
                        sx={{ textDecoration: "none", color: "inherit" }}
                        target="_blank"
                        href={store.homePage}>
                        {storeName.replace(/-/gi, " ")}
                    </Link>
                    /
                    <span style={{ color: "lightgray" }}>
                        {store.allItems[id].name}
                    </span>
                </Typography>
            </Box>
            <Divider sx={{ width: "100%", maring: "25px 0" }} />
            <Box sx={{ margin: "25px 0" }}>
                <Typography variant="h6" component="div" gutterBottom>
                    <Link
                        sx={{ textDecoration: "none", color: "inherit" }}
                        href={store.homePage}>
                        Visit {store.store.replace(/-/gi, " ")} store
                    </Link>
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                    {store.description}
                </Typography>
            </Box>
            <Box
                sx={{
                    border: "1px solid black",
                    width: "296px",
                    height: "200px",
                    backgroundColor: "lightseagreen",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    margin: "0 auto 25px auto",
                }}>
                <img
                    style={{ height: "100%", width: "100%" }}
                    src={store.allItems[id].image}
                    alt=""
                />
            </Box>
            <Divider />
            <Box sx={{ marginBottom: "25px" }}>
                <Typography
                    sx={{ marginBottom: "25px" }}
                    variant="h6"
                    component="div"
                    gutterBottom>
                    Price: ${store.allItems[id].price}
                </Typography>
                <Link
                    sx={{ textDecoration: "none" }}
                    target="_blank"
                    href={store.allItems[id].link}>
                    <Button sx={{ width: "100%" }} variant="contained">
                        Buy Now
                    </Button>
                </Link>
            </Box>
            <Divider />
        </Box>
    );
};

export default ItemPage;
