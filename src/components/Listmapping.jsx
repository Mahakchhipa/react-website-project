import React from "react";

const Listmapping = () => {


  return (
    <div>
      <div  className="flex justify-center">
        <div className="bg-white h-32 flex shadow-lg rounded-lg w-full sm:w-80">
          <h1 className="bg-black w-16 h-12 text-lg rounded-full flex items-center justify-center relative top-5 lg:relative lg:top-5 text-white m-4"></h1>
          <div
            className={`bg-red-500 w-full rounded-r-lg flex flex-col justify-center p-4`}
          >
            <p className="text-xl font-bold text-white">1</p>
            <div className="mt-2 flex gap-3 text-white flex-wrap">
              {/* {category.items.map((x, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white/20 px-2 py-1 rounded text-[4px] sm:text-[6px] md:text-[10px] inline-block"
                >
                  {x}
                </div>
              ))} */} 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listmapping;
