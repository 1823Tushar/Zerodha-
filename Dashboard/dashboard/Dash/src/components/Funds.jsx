import React from "react";

const Funds = () => {
    return (
        <div>
            <div className="flex flex-row   justify-end p-3 space-x-3 text-white mt-8">
                <p className="text-gray-400 text-sm">Instant, zero-cost fund transfers with UPI</p>
                <button className=" border-sm bg-purple-600 px-7 py-2">Add funds</button>
                <button className="border-sm bg-blue-600 px-7 py-2"  >Withdraw</button>
            </div>
            <div className="flex flex-cols md:flex-row text-gray-400">
                <div className="  p-5 ">
                    <h1 className="mb-4 text-2xl">Equity</h1>
                    <div className=" w-70 border p-4 ">
                        <div className="border-b ">
                        <div>
                            <p>Available margin</p>
                            <p>4043.10</p>
                        </div>
                        <div>
                            <p>Used margin</p>
                            <span>3757.30</span>
                        </div>
                        <div>
                            <p>Available cash</p>
                            <span>4043.10</span>
                        </div>
                        </div>
                        <div className="border-b ">
                        <div>
                            <p>Opening Balance</p>
                            <p>4043.10</p>
                        </div>
                        <div>
                            <p>Opening Balance</p>
                            <span>3736.40</span>
                        </div>
                        <div>
                            <p>Payin Span</p>
                            <span>4043.10</span>
                        </div>
                        <div>
                            <p>Delivery Margin</p>
                            <span>0.00</span>
                        </div>
                        <div>
                            <p>Exposure</p>
                            <span>0.00</span>
                        </div>
                        <div>
                            <p>Options premium</p>
                            <span>0.00</span>
                        </div>
                        </div>
                       <div className="border-b ">
                        <div>
                            <p>Collateral(Liquid funds)</p>
                            <p>0.00</p>
                        </div>
                        <div>
                            <p>Collateral(Equity)</p>
                            <span>0.00</span>
                        </div>
                        <div>
                            <p>Total Collateral</p>
                            <span>0.00</span>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className=" w-200 flex flex-col justify-center  items-end px-20 ">
                    <p className="  text-sm mb-3  flex  items-end">You don't have a commodity account</p>
                    <button className="w-40 border-sm bg-blue-600 text-white px-4 py-2 flex justify-center items-center "  >Open Account </button>
                </div>  

            </div>

        </div>
    )
}
export default Funds;