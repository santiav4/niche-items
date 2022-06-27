import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const TopNav = () => {
    return (
        <Box
            sx={{
                backgroundColor: "lightcoral",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                top: "0",
                zIndex: "10",
                padding: "0 10px",
                marginBottom: "10px",
            }}>
            <Typography variant="h5" component="div" gutterBottom>
                Logo
            </Typography>
            <MenuIcon />

            {/* las ofertas pued ser otro componente fuera de top nav */}
        </Box>
    );
};

export default TopNav;
