import React, {useState} from "react";
import Menu from "./Menu";


const TopBar = () => {
    return (
        <>
        <div className="flex  justify-between  w-full h-15  bg-white text-gray-600 mx-auto   border-gray-600 shadow-sm items-center">

            <div className=" flex  gap-10  text-sm ml-10 ">
                <div className="flex gap-3 ">
                    <p className="whitespace-nowrap">NIFTY 50</p>
                    <p className=" text-red-600 ">{100.2}</p>
                   
                </div>
                <div className=" flex  gap-3" >
                    <p className="">SENSEX</p>
                    <p className="text-red-600">{100.2}</p>
                   
                </div>
                
            </div>
            <div className="flex-items-center ml-5">
                <div className="h-10 w-px border-l border-gray-300 mx-6"></div>
            </div >
            <div className=" flex item-center logo w-32 h-8 object-contain">
<img src="logo.png"/>
            </div>
            
             <Menu />
        </div>
        
    </>
        
        
    )
}
export default TopBar;