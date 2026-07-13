import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        
            axios.get("https://zerodha-backend-9mar.onrender.com/allOrders")
            .then((res) => {
                console.log(orders);
                setOrders(res.data);

            })
            .catch((err) => {
                console.log(err);

            });
    }, []);


    return (

        <div className="p-5 mt-30">
            <div className=" text-gray-600 flex md:flex-col justify-center items-center  ">
                {orders.length === 0 ? (
                    <p>You haven't placed any orders today</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="border p-3 mb-2 rounded">
                            <p>Name: {order.name}</p>
                            <p>Qty:  {order.qty}</p>
                            <p>Price: {order.price}</p>
                            <p>Mode: {order.mode}</p>
                        </div>


                    ))
                )
                }
                <Link to={"/"} className="btn">
                    <button className="p-3 mt-10 text-white border-sm rounded-4xl bg-blue-700">Get Started </button></Link>
</div>
</div>



    )
}

export default Orders;