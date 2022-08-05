import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { AMAZON_ITEMS, STORES_INFO } from "../data";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
const AllItems = () => {
    let { id } = useParams();
    console.log(`useParams id: ${id}`);
    let store = STORES_INFO.filter((store) => store.store.includes(id))[0];
    console.log(store);

    return (
        <Box className="all-items body-nav-margin" sx={{}}>
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
                    justifyContent: {
                        mobile: "center",
                        tablet: "center",
                        desktop: "center",
                    },
                    flexWrap: "wrap",
                }}>
                {store.allItems.map((item) => (
                    <Box
                        className="all-items-card"
                        sx={{
                            width: {
                                mobile: "175px",
                                tablet: "230px",
                                desktop: "300px",
                            },
                            height: {
                                mobile: "200px",
                                tablet: "250px",
                                desktop: "300px",
                            },
                            transition: "all 500ms",
                            "&:hover": {
                                backgroundColor: "#CFBEA9",
                            },
                        }}>
                        <RouterLink
                            to={`/${id}/${item.route}`}
                            key={item.id}
                            style={{
                                textDecoration: "none",
                                color: "#3e4855",
                            }}>
                            <Box
                                className="all-items-image-container"
                                sx={{
                                    height: {
                                        mobile: "120px",
                                        tablet: "155px",
                                        desktop: "200px",
                                    },
                                }}>
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
                                gutterBottom
                                sx={{
                                    marginTop: {
                                        mobile: "10px",
                                        tablet: "20px",
                                        desktop: "25px",
                                    },
                                    marginLeft: "5px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}>
                                {item.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                gutterBottom
                                sx={{
                                    marginLeft: "5px",
                                    textAlign: "center",
                                    fontWeight: "500",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}>
                                Price: ${item.price}.00
                            </Typography>
                        </RouterLink>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default AllItems;
