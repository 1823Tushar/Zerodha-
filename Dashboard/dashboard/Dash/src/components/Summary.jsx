import { Button } from "@mui/material";
import React from "react";
import BuyPanel  from "./BuyPanel";

const Summary = ({selectedStock}) => {
    console.log(selectedStock);
    return (
      <>
        <div className="relative"> 
             {selectedStock && (
            <BuyPanel stock={selectedStock}/>
             )}  

            
            <div className="flex border-b border-gray-400 p-3 mt-10" >
                <h1 className="text-2xl text-gray-600">Hi, User!</h1>
            </div>

            <div className="border-b border-gray-400 p-3 mt-10 gap-10 text-gray-600" >
                <h1 className="text-xl ">Equity</h1>
                <div className="flex mt-15 max-w-lg">
                     <div className="w-1/2">
                           <h1 className="text-4xl ">3.74k</h1>
                     </div>
                     {/* border */}
                     <div className="">
                <div className="h-15 w-px border-r border-gray-400 mx-30"></div>
            </div >
                     <div className="w-1/2 whitespace-nowrap   ">
                        <p className="mb-3">Margins used  0</p>
                        <p>Opening balance  3.74k</p>
                     </div>
                </div>

                <div className="mt-10">
                    <p className="text-sm">Margin available</p>
                </div>
            </div>

            {/* //Holdings */}
            <div className="border-b border-gray-400 p-3 mt-10 gap-10 text-gray-600" >
                <h1 className="text-xl ">Holdings (13)</h1>
                <div className="flex mt-15 max-w-lg">
                     <div className=" flex w-1/2 text-green-400">
                           <h1 className="text-4xl ">1.55k</h1>
                           <p className="text-sm mt-5 ml-2">+5.20%</p>
                     </div>
                     {/* border */}
                     <div className="">
                <div className="h-15 w-px border-r border-gray-400 mx-30"></div>
            </div >
                     <div className="w-1/2 whitespace-nowrap   ">
                        <p className="mb-3">Current Value 31.43k</p>
                        <p>Investment 29.88k</p>
                     </div>
                </div>

                <div className="mt-10">
                    <p className="text-sm">P&L</p>
                </div>
                
            
            
            </div>
         
        </div>

      </>
    )
}

export default Summary ;