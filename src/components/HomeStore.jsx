import * as React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "./Carousel";
import { Link, useParams } from "react-router-dom";
import { STORES_INFO } from "../data";
import StorePreviewItems from "./StorePreviewItems";

const HomeStore = () => {
    const stores = STORES_INFO;
    let { id } = useParams();
    return (
        <Box>
            {stores.map((store) => (
                <StorePreviewItems key={store.id} store={store} />
            ))}
        </Box>
    );
};

export default HomeStore;
