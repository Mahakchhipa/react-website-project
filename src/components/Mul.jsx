import React from "react";

const Mul = () => {
  return (
    <div>
      
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-4xl p-5">
            Find the Multiply 
          </h1>
          <div className="bg-gray-800 p-8 shadow-2xl w-96 border-2 border-blue-500 rounded-lg">
            <form className="flex flex-col items-center mb-5">
              <input
                type="text"
                name="num1"
                placeholder="Enter first number"
                required
                className="w-full p-3 border border-gray-300 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
              />
              <input
                type="text"
                name="num2"
                placeholder="Enter second number"
                required
                className="w-full p-3 border border-gray-300 rounded-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
              />
              <input
                type="text"
                name="num3"
                placeholder="Enter third number"
                required
                className="w-full p-3 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-yellow-400"
              />
              <button
                type="submit"
                className="bg-green-400 p-3 w-42 rounded-full text-white font-bold text-xl cursor-pointer hover:bg-green-500"
              >
                Find Largest
              </button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Mul;
