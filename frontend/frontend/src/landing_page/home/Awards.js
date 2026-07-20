function Awards() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-5">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <img src="/media/images/largestBroker.svg" alt="broker" />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 " >
          <h1 className="text-3xl font-bold mb-4">
            Largest stock broker in India
          </h1>

          <p className="text-gray-600 mb-6">
            2+ million Zerodha clients contribute to over 15% of all
            volumes in India daily by trading and investing in:
          </p>

          <div className="flex gap-10" >
            <ul className="list-disc">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="list-disc">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Groups</li>
            </ul>
          </div>
           <img  src='media/images/pressLogos.png' className="mt-5 pr-25" style={{height: "50px"}}/>
        </div>
       

      </div>
    </div>
  );
}
export default Awards;