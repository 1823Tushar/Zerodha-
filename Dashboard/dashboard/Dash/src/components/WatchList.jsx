import React, {useState}from "react";
// import Summary from "./Summary";
import {Tooltip, Grow} from "@mui/material"
import { watchlist } from "../data/data";

import { BarChartOutlined } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material'
import Button from '@mui/material/Button';


import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Doughnut } from "react-chartjs-2";
import { DoughtnoutChart } from "./DoughnoutChart";

  

   

  const labels = watchlist.map((subArray) => subArray["name"]);
  
const WatchList = ({stock,onBuyClick}) => {
  const [showChart, setShowChart] = useState(false);
     const data = {
        labels,
        datasets: [
            {
      label: "Price",
      data: watchlist.map((stock)=>stock.price),

      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
},

          
        ],
      };
     
 
    return (
        <>
        <div className="flex h-screen overflow-y-auto ">
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
                    <WatchListItem stock={stock} key={index} onBuyClick={onBuyClick} data={data} setShowChart={setShowChart}/>
                   )
                   })}
                </ul>
                <div className="mt-5 p-5" >
                
                  <DoughtnoutChart  data={data}/>
                  </div>
                 </div>
           
        </div>
    
      
        </>
        
    )
}


export default WatchList;

const WatchListItem = ({stock,  onBuyClick,data ,setShowChart})   =>{
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
         < WatchListActions uid={stock.name} stock={stock} onBuyClick={onBuyClick} data={data} setShowChart={setShowChart}/>
           )}
         
        </li>
       

    )
};
const WatchListActions = ({ uid, stock, onBuyClick,data,setShowChart}) => {

    
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
        <Button variant="outlined" size="small" sx ={{minWidth:"50px"}} onClick={()=> setShowChart(true)} >
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
