import React , {useState, useEffect}from "react";
import { Doughnut } from "react-chartjs-2";
import { DoughtnoutChart } from "./DoughnoutChart";

// import { holdings } from "../data/data"; // is line ka means hai
// ki react ko holdings ka data mil gya hai
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";


const Holdings = () => {
    
    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() =>{
        axios.get("https://zerodha-backend-9mar.onrender.com/allHoldings").then((res) =>{
            setAllHoldings(res.data);
        })

    }, []);

    const labels =allHoldings.map((subArray)=> subArray["name"]);
    const data = {
        labels,
        datasets: [
      { label: "Stock Price",
       data: allHoldings.map((stock) => stock.price ),
       backgroundColor: "rgba(255,99,132,0.5)",
},
        ],
    }

    return (
        <div>
           <div className="p-5 mt-10 text-gray-600 text-2xl">
                 <h3 className=""> Holdings ({allHoldings.length})</h3>
            </div>
       

        <div className="">
            <div className=" text-gray-400 text-sm p-5 ">
            <table className="w-full border-t border-b">
                <thead>
                <tr className=" w-full  mt-5 mb-5 ">
                    <th className="text-left">Instrument</th>
                    <th  className="text-left" >QTY</th>
                    <th className="whitespace-nowrap text-left">Avg . cost</th>
                    <th className="text-left"> LTP</th>
                    <th className="text-left">Cur. val</th>
                    <th className="text-left">P&L</th>
                    <th className="text-left">Net chg.</th>
                    <th className="text-left">Day chg.</th>
                </tr>
                </thead>
                <tbody>
                {allHoldings.map((stock,index)=>{
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue-stock.avg*stock.qty >= 0.0;
                    const profClass = isProfit ? "text-green-500" : "text-red-500";
                    const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";
                    return (
                        
                        
                   <tr className=" w-full  mt-4 mb-4 font-medium  border-t" key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>
                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className= {profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                </tr>
                
                    )
                })}
                </tbody>
            </table>
            </div>

            <div className="flex flex-col md:flex-row p-5 text-gray-600 mt-15">
 
         
            <div className="flex-1 ">
                <h5 className="text-2xl">
                    29,875.
                    <p className="text-sm">55</p>
                </h5>
                <p className="mt-12 text-gray-400 text-sm" >Total investment</p>
            </div>
             <div className="flex-1">
                <h5 className="text-2xl">
                    31,428.
                    <p className="text-sm">95</p>
                </h5>
                <p className="mt-12 text-gray-400 text-sm">Current Value</p>
            </div>
             <div className="flex-1">
                <h5 className=" flex items-center  p-3 text-2xl text-green-400">
                    1,553.40. (+5.20%)
                </h5>
                <p className="mt-12 text-gray-400 text-sm">P&L</p>
            </div>
               </div>
             
        
               

        </div>
      
        <VerticalGraph data={data} />
        
       
      

        </div>
        

    )
}
export default Holdings;