import TopNav from "./components/TopNav";
import { useState, useEffect } from "react";
import { AppBox } from "./components/StyledComponents";
import HomeStore from "./components/HomeStore";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import AllItems from "./components/AllItems";
import Navbar from "./components/Navbar";
import ItemPage from "./components/ItemPage";
import { STORES_INFO } from "./data";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
    const [storeName, setStoreName] = useState("");
    const stores = STORES_INFO;

    // console.log(stores[sliderStep].id);

    const handleStoreId = (id) => {
        console.log("Store Name:", id);
        setStoreName(id);
    };

    return (
        <AppBox className="App">
            {/* <TopNav /> */}
            <ButtonAppBar />
            {/* <Navbar /> */}
            <Routes>
                <Route
                    path="/"
                    element={<HomeStore handleStoreId={handleStoreId} />}
                />
                <Route
                    path={`/:id`}
                    element={<AllItems storeName={storeName} />}></Route>
                <Route
                    path={`/:id/:id`}
                    element={<ItemPage storeName={storeName} />}
                />
                {/* <Route path="allItems/:id" element={<AllItems />} /> */}
            </Routes>
        </AppBox>
    );
}

export default App;
