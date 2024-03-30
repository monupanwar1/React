import axios from "axios";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products"; // Remove /1 from the endpoint

    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data); // Set products state to response.data
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .post(api, {
        name: "Product 1",
        price: 100,
        stock: 10,
        description: "Product 1 description",
        category: "Category 1",
        image: "https://picsum.photos/200/300",
      })
      .then((response) => {
        console.log("Product added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  console.log(products);

  return (
    <>
      
        <button
          onClick={getProducts}
          className="bg-blue-500 px-4 py-2 rounded-md"
        >
          Fetch Products
        </button>
        <button
          onClick={addProducts}
          className="bg-blue-500 px-4 py-2 rounded-md"
        >
          Add Product
        </button>
     
      <hr className="my-10" />
      <ul className="gap-10">
        {products.length > 0 &&
          products.map((product) => (
            <li key={product.id} className="bg-red-500 mb-4 h-10 rounded">
              {product.title}
            </li>
          ))}
      </ul>
    </>
  );
  
};
export default App;
