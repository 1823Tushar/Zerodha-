import React from "react";
import { positions } from "../data/data";

const Positions = () => {
    return (
        <div className="px-5 py-2">
            <div className="p-5 mt-10 text-gray-600 text-2xl">
                <h3 className=""> Positions ({positions.length})</h3>
            </div>



            <div className=" flex text-gray-400 text-sm  ">
                <table className="w-full border-t border-b border-gray-400">
                    <thead>
                        <tr className=" w-full mt-5 mb-5 ">
                            <th className="py-4 text-left">product</th>
                            <th className="text-left">Instrument</th>
                            <th className="text-left" >QTY</th>
                            <th className="text-left" >Avg</th>
                            <th className="text-left" >LTP</th>
                            <th className="text-left" >P&L</th>
                            <th className="text-left" >chg.</th>
                        </tr>
                    </thead>

                    <tbody className="w-full border-b  border-t border-gray-400 font-medium  py-2">
                        {positions.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? "text-green-500" : "text-red-500";
                            const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";
                            return (
                                <tr className=" w-full  mt-4 mb-4 font-medium  border-t" key={index}>
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>
                                    
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            )
                        })}
                </tbody>
                </table>
            </div>

            <table >

            </table>


            <div className=" flex  text-sm font-normal ">
                <table className="w-full  border-b border-gray-400">

                </table>
            </div>



        </div>
    )
}
export default Positions;