/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
// import React from "react";
import Proitems from "./Proitems";
// import Header from "./Header";

const MainProducts = ({
  products,
  incrementItems,
  decrementItems,
  removeItems,
  resetProducts,
  deleteProducts,

  toggelTheme,
  totalPrice,
}) => {
  return (
    <div className=" h-[100vh] pt-4">
      <div className="text-center flex flex-col gap-3 w-11/12 m-auto pt-10">
        <h1 className="text-gray-400 ">Main Cart</h1>
        <div className="flex justify-evenly text-white ">
          <button
            onClick={resetProducts}
            className="  bg-red-400 text-white  hover:bg-red-500  p-2 rounded  "
          >
            Reset
          </button>

          <button
            onClick={deleteProducts}
            className="bg-red-400 text-white  hover:bg-red-500   p-2 rounded  "
          >
            Delete All
          </button>

          <button
            onClick={toggelTheme}
            className="bg-red-400 text-white  hover:bg-red-500  p-2 rounded  "
          >
            Mode
          </button>
        </div>

        {/* <div className="pt-5"> */}
        {products.map((product, index) => (
          <Proitems
            product={product}
            key={index}
            incrementItems={incrementItems}
            decrementItems={decrementItems}
            removeItems={removeItems}
          />
        ))}
        {/* </div> */}

        <h1 className="text-red-400">
          Total Price :{isNaN(totalPrice) ? 0 : totalPrice}$
        </h1>
      </div>
    </div>
  );
};

export default MainProducts;
