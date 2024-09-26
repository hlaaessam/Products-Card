/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
const Proitems = ({
  product: { id, name, items, price },
  incrementItems,
  decrementItems,
  removeItems,
}) => {
  //   console.log({ product });

  return (
    <div className="flex justify-around p-3 bg-gray-400 rounded w-90  text-white w-full text-center">
      <h1 className="w-2/12">Name : {name}</h1>
      <h1 className="w-2/12">Items : {items}</h1>
      <h1 className="w-2/12">Price : {price}$</h1>

      <button
        onClick={() => incrementItems(id)}
        className="bg-red-500 hover:bg-red-900 p-2 rounded  "
      >
        +
      </button>
      <button
        onClick={() => decrementItems(id)}
        disabled={items > 1 ? false : true}
        className={`${
          items > 1
            ? "bg-yellow-500 hover:bg-yellow-800 cursor-pointer"
            : "bg-gray-700 cursor-not-allowed"
        } p-2 rounded `}
      >
        -
      </button>

      <button
        onClick={() => removeItems(id)}
        className=" bg-gray-600 text-white-400  hover:bg-gray-300    p-2 rounded  "
      >
        Remove
      </button>

      <h1 className="w-2/12">
        Total : {isNaN(price * items) ? "" : price * items} $
      </h1>
    </div>
  );
};

export default Proitems;
