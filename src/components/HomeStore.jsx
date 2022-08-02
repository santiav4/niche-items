import * as React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "./Carousel";
import { Link, useParams } from "react-router-dom";
import { STORES_INFO } from "../data";
import StorePreviewItems from "./StorePreviewItems";

const HomeStore = ({ handleStoreId }) => {
    const stores = STORES_INFO;
    let { id } = useParams();
    return (
        <Box className="home-body body-nav-margin" sx={{ padding: "0 10px" }}>
            {stores.map((store) => (
                <StorePreviewItems
                    key={store.id}
                    store={store}
                    handleStoreId={handleStoreId}
                />
            ))}
        </Box>
    );
};

export default HomeStore;
