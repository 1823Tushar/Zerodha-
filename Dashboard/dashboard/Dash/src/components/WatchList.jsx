import React, {useState}from "react";
// import Summary from "./Summary";
import {Tooltip, Grow} from "@mui/material"
import { watchlist } from "../data/data";

import { BarChartOutlined } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material'
import Button from '@mui/material/Button';


import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const WatchList = ({stock ,onBuyClick}) => {
 
  
    return (
        <>
        <div className="flex h-screen overflow-y-auto">
            <div className="w-[350px] border-r flex flex-col">
                <div className=" flex md:flex-row p-2 ">
                    <input 
                    type="text"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx" 
                    className="w-full  border-b border-gray-400 p-2"/>
                    <span className="whitespace-nowrap  p-2">{watchlist.length} / 50</span>
                </div>

                <ul className="list mt-8 ">
                   {watchlist.map((stock,index)=>{
                    return(
                    <WatchListItem stock={stock} key={index} onBuyClick={onBuyClick} />
                   )
                   })}
                </ul>
                 </div>
           
        </div>

      
        </>
    )
}
export default WatchList;
const WatchListItem = ({stock,  onBuyClick})   =>{
    const[showWatchlistActions, setShowlistActions] = useState(false);

    const handleMouseEnter=()=>{
    setShowlistActions(true);
    }

    const handleMouseLeave = () => {
        setShowlistActions(false);
    }
    return(
        <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className=" flex  border-b p-5 justify-between border-gray-400 text-gray-400  text-sm">
           <p className={stock.isDown? "text-red-500" : "text-green-500"}  >  {stock.name} </p>
           {!showWatchlistActions &&   (
            <div className=" flex  items-center ">
             <span className=" "> {stock.percent}</span>
             {stock.isDown ? (
                <KeyboardArrowDownIcon className="text-red-400"/>
             ):( 
             <KeyboardArrowUpIcon className="text-green-400" /> )
             }
             <span className=" "> {stock.price}</span >
            </div>
              )}
           
            </div>

           {showWatchlistActions && (
         <  WatchListActions uid={stock.name} stock={stock} onBuyClick={onBuyClick}/>
           )}
         
        </li>

    )
};
const WatchListActions = ({ uid, stock, onBuyClick}) => {
  return (
    <div className="absolute   right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10">

      <Tooltip title="Buy (B)" placement="top-end" arrow TransitionComponent={Grow}>
        <Button variant="contained" sx ={{minWidth:"50px"}}  color="primary" size="small" onClick={() => { console.log("buy click"); onBuyClick(stock); }}>
          Buy
        </Button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top-end" arrow TransitionComponent={Grow}>
        <Button variant="contained" color="error" sx ={{minWidth:"50px"}}  size="small">
          Sell
        </Button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top-end" arrow TransitionComponent={Grow}>
        <Button variant="outlined" size="small" sx ={{minWidth:"50px"}} >
           <BarChartOutlined />
        </Button>

       
      </Tooltip>

      <Tooltip title="More" placement="top-end" arrow TransitionComponent={Grow}>
        <Button variant="outlined" size="small" sx ={{minWidth:"50px"}} >
          <MoreHoriz  />
        </Button>
      </Tooltip>

    </div>
  );
};
