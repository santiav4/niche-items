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
    console.log("last index:", +id.charAt(id.length - 1));

    // Identify store with store name
    let storeFiltered = STORES_INFO.filter(
        (storeFiltered) =>
            storeFiltered.store.toLowerCase().replace(/-/gi, "") ===
            id.replace(id.charAt(id.length - 1), "")
    )[0];
    console.log("Store name filtered:", storeFiltered);

    // Identify which product is selected
    console.log("Router Id:", id);
    let selectedProduct = storeFiltered.allItems.filter(
        (product) => product.route === id
    )[0];
    let itemId = +id.replace(
        storeFiltered.store.toLowerCase().replace(/-/gi, ""),
        ""
    );
    console.log("selectedProduct: ", selectedProduct);
    console.log("item Id", itemId);
    // let name = store.itemRoute.indexOf(id);

    console.log("default useParams: ", useParams());
    console.log("useparams: ", id);
    // console.log("Filtered Store: ", store, "Store Name: ", storeName);
    // console.log("index of item Name:", name);

    return (
        <Box
            className="body-nav-margin"
            sx={{
                height: "100vh",
                padding: "0 10px",
                width: {
                    mobile: "380px",
                    tablet: "500px",
                    desktop: "700px",
                },
                marginInline: "auto",
            }}>
            {/* ItemPage of {storeName} and item is {store.itemName[name]} */}
            <Box>
                <Typography variant="h6" component="div" gutterBottom>
                    <Link
                        sx={{ textDecoration: "none", color: "inherit" }}
                        target="_blank"
                        href={storeFiltered.homePage}>
                        {storeFiltered.store.replace(/-/gi, " ")}
                    </Link>
                    /{/* Product Name  */}
                    <span style={{ color: "lightgray" }}>
                        {selectedProduct.name}
                    </span>
                </Typography>
            </Box>
            {/* <Divider sx={{ width: "100%", maring: "25px 0" }} /> */}
            <Box sx={{ margin: "25px 0" }}>
                <Typography variant="h6" component="div" gutterBottom>
                    <Link
                        target="_blank"
                        sx={{ textDecoration: "none", color: "inherit" }}
                        href={storeFiltered.homePage}>
                        Visit {storeFiltered.store.replace(/-/gi, " ")} store
                    </Link>
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                    {storeFiltered.description}
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: "20px",
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
                    src={selectedProduct.image}
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
                    Price: ${selectedProduct.price}
                </Typography>
                <Link
                    sx={{ textDecoration: "none" }}
                    target="_blank"
                    href={selectedProduct.link}>
                    <Button
                        sx={{
                            width: "100%",
                            borderRadius: "20px",
                            backgroundColor: "#FF4D4E",
                            "&:hover": {
                                backgroundColor: "#FF4D4E",
                            },
                        }}
                        variant="contained">
                        Buy Now
                    </Button>
                </Link>
            </Box>
            {/* <Divider /> */}
        </Box>
    );
};

export default ItemPage;
