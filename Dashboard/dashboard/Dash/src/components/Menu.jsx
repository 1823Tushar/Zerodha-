import React, {useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

    const [selectedMenu, setSelectedMenu] = useState(0);
     const [isProfileDropownOpen, setisProfileDropownOpen] = useState(false);
   
     const handleMenuClick = (index) =>{
        setSelectedMenu(index);
     }
        const handleProfileClick = (index) =>{
        setisProfileDropownOpen(!isProfileDropownOpen);

     };
     const menuClass = "menu";
     const activeMenuClass  = "menu selected";
        return (
            
             
<div className="w-full flex justify-end items-center ">
    
    <div className="flex text-sm   space-x-8 mr-20  text-gray-600 ">
        <Link to="/" onClick={() => handleMenuClick(0)}>
        <p  className={`${selectedMenu===0 ? activeMenuClass : menuClass} text-red-400` }>Dashboard</p>
        </Link>
        <Link to="/orders" onClick={() => handleMenuClick(1)}>
        <p  className={`${selectedMenu===1 ? activeMenuClass : menuClass} hover:text-red-400`} >Orders</p>
        </Link>
        <Link to="/Holdings" onClick={() => handleMenuClick(2)}>
        <p  className={`${selectedMenu===2 ? activeMenuClass : menuClass} hover:text-red-400`}>Holdings</p>
        </Link>
        <Link to="/positions" onClick={() => handleMenuClick(3)}>
        
        <p   className={`${selectedMenu===3 ? activeMenuClass : menuClass} hover:text-red-400`}> Positions</p>
        </Link>
        <Link to="/funds" onClick={() => handleMenuClick(4)}>

        <p   className={`${selectedMenu===4 ? activeMenuClass : menuClass} hover:text-red-400`}> Funds</p>
        </Link>
        <Link to="/apps" onClick={() => handleMenuClick(5)}>
        <p   className={`${selectedMenu===5 ? activeMenuClass : menuClass} hover:text-red-400`}>Apps</p>
        </Link>
    </div>
     <div className="flex-items-center ml-5">
                <div className="h-10 w-px border-l border-gray-300 mx-6"></div>
            </div>
            <div className={`${onclick={handleProfileClick}} flex items-center `}>
            <div className="w-10 h-10 border rounded-full bg-purple-400 flex items-center justify-center">
<span className="text-white text-xl font-medium">
    ZU

</span>
            </div>
    <div className="ml-2">
        <p className="whitespace-nowrap mr-5">USER ID </p>
    </div>
    </div>
</div>
        
    )
}
export default Menu;