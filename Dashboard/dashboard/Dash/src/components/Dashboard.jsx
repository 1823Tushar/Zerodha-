import Apps from "./App.jsx";
import Funds from "./Funds";
import Holdings from "./Holdings";
import {useState } from "react";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
    const [selectedStock, setSelectedStock] = useState(null);
     
    const handleBuyClick=(Stock) => {
        setSelectedStock(Stock);
    }
    return (
        <div className=" flex flex-1 h-[calc(100vh-60px)] overflow-hidden">
        
            <WatchList  onBuyClick={handleBuyClick} />
            <div className="flex-1 h-full overflow-y-auto p-5">
                <Routes>
                    <Route exact path="/" element= {<Summary selectedStock={selectedStock}/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/holdings" element={<Holdings/>} />
                    <Route path="/positions" element={<Positions/>} />
                    <Route path="/funds" element={<Funds/>} />
                    <Route path="/apps" element={<Apps/>} />

                </Routes>
            </div>

        </div>
    )
}
export default Dashboard;