import { useParams } from "react-router-dom";

const AllItems = () => {
    let { id } = useParams();
    console.log(useParams());
    return <div>All Items {id}</div>;
};

export default AllItems;
