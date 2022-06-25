import TopNav from "./components/TopNav";
import { AppBox } from "./components/StyledComponents";
import HomeStore from "./components/HomeStore";
import { Routes, Route, useNavigate } from "react-router-dom";
import StoreItems from "./components/StoreItems";

function App() {
  return (
    <AppBox className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<HomeStore />} />

        <Route path="/storeItems/:id" element={<StoreItems />} />
      </Routes>
    </AppBox>
  );
}

export default App;
