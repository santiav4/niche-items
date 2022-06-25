import { useParams } from "react-router-dom";

const StoreItems = () => {
  let { id } = useParams();
  console.log(id);
  return <div>StoreItems</div>;
};

export default StoreItems;
