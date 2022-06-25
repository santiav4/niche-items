import TopNav from "./components/TopNav";
import { AppBox } from "./components/StyledComponents";
import HomeStore from "./components/HomeStore";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllItems from "./components/AllItems";

function App() {
    return (
        <AppBox className="App">
            <TopNav />
            <Routes>
                <Route path="/" element={<HomeStore />} />
                <Route path="/allItems/:id" element={<AllItems />} />
            </Routes>
        </AppBox>
    );
}

export default App;
