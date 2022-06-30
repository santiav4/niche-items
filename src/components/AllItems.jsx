import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AMAZON_ITEMS } from "../data";
const AllItems = () => {
    let { id } = useParams();
    console.log(useParams());
    return (
        <Box
            sx={{
                height: "100vh",
                backgroundColor: "lightcoral",
                padding: "0 10px",
            }}>
            <Box>
                <Typography variant="h6" component="div" gutterBottom>
                    {id}/All Items
                </Typography>
            </Box>
            <Box>
                <Typography variant="h3" component="div" gutterBottom>
                    All Items
                </Typography>
            </Box>
            {/* Item loop container */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}>
                {AMAZON_ITEMS.map((item) => (
                    <Box
                        sx={{
                            border: "1px solid black",
                            width: "180px",
                            marginBottom: "10px",
                        }}>
                        <Box
                            sx={{ border: "1px solid black", height: "200px" }}>
                            Image
                        </Box>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            gutterBottom>
                            Name
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            gutterBottom>
                            Price
                        </Typography>
                    </Box>
                ))}
                {/* if number is odd make a spacer */}
            </Box>
        </Box>
    );
};

export default AllItems;
