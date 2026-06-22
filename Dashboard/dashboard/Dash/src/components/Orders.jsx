import React from "react";
import {Link} from "react-router-dom";

const Orders = () => {
    return (
        <div className="p-5 mt-30">
            <div className=" text-gray-600 flex md:flex-col justify-center items-center  ">
                <p>You haven't placed any orders today</p>
                <Link to={"/"} className="btn">
                <button className="p-3 mt-10 text-white border-sm rounded-4xl bg-blue-700">Get Started </button></Link>


            </div>

        </div>
    )
}

export default Orders;