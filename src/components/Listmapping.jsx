import React from "react";
import data from "../utility/data";
const Listmapping = () => {
  return (
    <div className="grid grid-cols-4 gap-10 p-8">
      {data.map((data, index) => (
        <div className="flex justify-center">
          <div className="bg-white h-32 flex shadow-lg rounded-lg w-full sm:w-80">
            <h1 className="bg-black w-16 h-12 text-lg rounded-full flex items-center justify-center relative top-5 lg:relative lg:top-5 text-white m-4">
              {" "}
              {data.id}
            </h1>
            <div
              className={`${data.bgcolor} bg-red-500 w-full rounded-r-lg flex flex-col justify-center p-4`}
            >
              <p className="text-xl font-bold text-white">{data.name}</p>

              <div className="mt-2 flex gap-3 text-white flex-wrap">
                {data.items.map((x, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className="bg-white/20 px-2 py-1 rounded text-[4px] sm:text-[6px] md:text-[10px] inline-block"
                    >
                      {x}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listmapping;
