import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAllProductList from "./services/useAllProductList";
import useAllCategories from "./services/useAllCategories";
import useSelectedCategoryItems from "./services/useSelectedCategoryItems";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const [category, setCategory] = useState(null);

  const { allProductList } = useAllProductList(setProducts);
  const { allCategoryList } = useAllCategories();
  
  const { selectedCategoryItems, invalidate } = useSelectedCategoryItems(category);

  useEffect(() => {
    if (category) {
      invalidate();
    }
  }, [category, invalidate]);

  useEffect(() => {
    if (selectedCategoryItems) {
      setProducts(selectedCategoryItems);
    }
  }, [selectedCategoryItems]);

  function showAllProducts() {
    setProducts(allProductList);
  }

  function goToProductPage(productId) {
    navigate(`/productPage/${productId}`);
  }

  function goToShoppingBox() {
    navigate("/shoppingBox");
  }

  const handleSelectCategory = (item) => {
    setCategory(item);
  };

  return (
    <>
      <header className="bg-blue-700 fixed flex flex-row-reverse justify-around items-center w-screen h-[60px]">
        <span
          onClick={showAllProducts}
          className="bg-blue-100 cursor-pointer text-center text-blue-700 px-[20px] py-1 rounded-full"
        >
          All
        </span>
        {allCategoryList?.map((item, index) => (
          <span
            onClick={() => handleSelectCategory(item)}
            className="bg-blue-100 cursor-pointer text-center text-blue-700 px-[20px] py-1 rounded-full"
            key={index}
          >
            {item}
          </span>
        ))}
      </header>
      <main className="bg-blue-100 w-full h-full pt-[60px] flex flex-row flex-wrap justify-center items-center">
        {products?.map((item) => (
          <div
            className="bg-white rounded-md m-[10px] border-[1px] border-solid border-gray-100 shadow-lg flex flex-col justify-center items-center w-1/5 h-[250px]"
            key={item.id}
          >
            <img className="w-[50px] h-[50px]" src={item.image} alt={item.title} />
            <label>{item.title}</label>
            <span>{item.price}</span>
            <span>{item.category}</span>
            <button
              onClick={() => goToProductPage(item?.id)}
              className="bg-blue-700 rounded-md text-blue-100 py-1 mt-2 px-[10px]"
            >
              view
            </button>
          </div>
        ))}
        <span
          onClick={goToShoppingBox}
          className="material-icons fixed bottom-4 left-4 text-4xl text-blue-100 bg-blue-800 p-5 rounded-full cursor-pointer shadow-lg"
        >
          shopping_cart
        </span>
      </main>
    </>
  );
};

export default ProductList;
