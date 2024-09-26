/* eslint-disable no-unused-vars */
import { useState } from "react";
import MainProducts from "./component/MainProducts";
import Header from "./component/Header";

const App = () => {
  // Products
  const [products, setproducts] = useState([
    { id: 1, name: "chipsy", items: 1, price: 10 },
    { id: 2, name: "pepsi", items: 1, price: 20 },
    { id: 3, name: "fanta", items: 1, price: 30 },
    { id: 4, name: "coffe", items: 1, price: 40 },
  ]);

  // headerproducts
  const [headerproducts, setheaderproducts] = useState([
    { id: 1, name: "chipsy", items: 1, price: 10 },
    { id: 2, name: "pepsi", items: 1, price: 20 },
    { id: 3, name: "fanta", items: 1, price: 30 },
    { id: 4, name: "coffe", items: 1, price: 40 },
  ]);

  // useState
  const [theme, setTheme] = useState(false);
  const [total, setTotal] = useState();

  // calculte total Price
  let result = 0;
  let totalPrice = 0;
  for (let index = 0; index < products.length; index++) {
    result += products[index].items;
    totalPrice += products[index].items * products[index].price;
  }

  // Remove Product
  const removeItems = (id) => {
    let newProducts = products.filter((product) => product.id !== id);
    setproducts(newProducts);
  };

  // Delete Product
  const deleteProducts = () => {
    setproducts([]);
  };

  // Dark or Light Mood
  const toggelTheme = () => {
    setTheme((theme) => !theme);
  };

  // Reset All Products
  const resetProducts = () => {
    let newProducts = products.map((product) => {
      delete product.name;
      delete product.items;
      delete product.price;

      return product;
    });
    setproducts(newProducts);
  };

  // Add or Increment Product
  const incrementItems = (id) => {
    // Check if the product exists in the products array
    let productExists = false;

    let newProducts = products.map((product) => {
      if (product.id === id) {
        product.items++;
        productExists = true;
      }
      return product;
    });

    // If the product does not exist in the products array, add it from headerproducts
    if (!productExists) {
      const headerProduct = headerproducts.find(
        (headerProduct) => headerProduct.id === id
      );
      if (headerProduct) {
        newProducts = [...newProducts, headerProduct];
      }
    }

    // Update the state with the new products array
    setproducts(newProducts);
    console.log(newProducts);
  };

  const decrementItems = (id) => {
    let newProducts = products.map((product) => {
      if (product.id == id) {
        // if (product.items > 1) {
        product.items--;
        // }
      }
      return product;
    });
    setproducts(newProducts);
  };

  return (
    <div className={`${theme ? "bg-black" : "bg-white "}`}>
      <Header
        products={products}
        headerproducts={headerproducts}
        incrementItems={incrementItems}
        result={result}
      />
      <MainProducts
        products={products}
        incrementItems={incrementItems}
        decrementItems={decrementItems}
        removeItems={removeItems}
        deleteProducts={deleteProducts}
        resetProducts={resetProducts}
        toggelTheme={toggelTheme}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default App;
