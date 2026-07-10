import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const BuyPanel = ({ stock }) => {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleBuyClick = async () => {
        console.log("Buy clicked");
        // console.log({
        //      name: stock,
        //     price: stockPrice,
        //     qty: stockQuantity,
        //     mode: 'BUY',

        // })
        try{

       
       const res = await axios.post('https://zerodha-backend-9mar.onrender.com/newOrder', {
            name: stock.name,
            price: stockPrice,
            qty: stockQuantity,
            mode: 'BUY',
        });
         console.log("success ", res.data);
         } catch(err) {
            console.log("Error", err.response?.data || err.message );
         }


    };
   
    return (
       
        <div className=" ">
            <div className="absolute  top-40 left-10 w-[350px] bg-white  shadow-lg  rounded-md z-50">
                
                <h2 className="flex justify-center">{stock.name}</h2>
                <div className="flex  fex-row justify-evenly p-8 gap-4 h-19 mb-5">
                    <div className="flex-1 ">
                        <input type="number" placeholder="qty" className="border p-2 w-full" onChange={(e) => setStockQuantity
                        (Number(e.target.value))}
                            value={stockQuantity} />
                    </div>
                    <div className="flex-1">
                        <input type="number" placeholder="price" className="border p-2 w-full " onChange={(e) => setStockPrice
                        (Number(e.target.value))}
                            value={stockPrice} />
                    </div>
                </div>



                <div className=" flex flex-row ml-5 gap-4 ">
                    <div className="flex-1 whitespace-nowrap py-1">
                        <p>Margin required 140.893</p>
                    </div>

                    <div className="flex-1  text-black   ">
                        <Button className="   py-2 mt-3 " onClick={handleBuyClick}>Buy</Button>
                        <Button className="ml-2 border px-6 py-2 bg-gray-500  rounded-2xl" >Cancel</Button>
                    </div>



                </div>
            </div>
        </div>
    );
};
export default BuyPanel;