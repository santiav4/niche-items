import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AMAZON_ITEMS, STORES_INFO } from "../data";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
const AllItems = () => {
    let { id } = useParams();
    console.log(useParams());
    let store = STORES_INFO.filter((store) => store.store.includes(id))[0];
    console.log(store);
    return (
        <Box className="all-items">
            <Box>
                <Typography variant="h6" component="div" gutterBottom>
                    {id.replace(/-/gi, " ")}/All Items
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
                {store.allItems.map((item) => (
                    <RouterLink
                        className="all-items-card"
                        to={`/${store.store}/${item.route}`}
                        key={item.id}>
                        <Box className="all-items-image-container">
                            <Box
                                className="all-items-image"
                                sx={{
                                    backgroundSize: "100%,100%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(${item.image})`,
                                    height: "100%",
                                }}></Box>
                        </Box>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            gutterBottom>
                            {item.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            gutterBottom>
                            Price: ${item.price}
                        </Typography>
                    </RouterLink>
                ))}
                {/* if number is odd make a spacer */}
            </Box>
        </Box>
    );
};

export default AllItems;
