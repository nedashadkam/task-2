import React, {useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSelectedProductInformation from "./services/useSelectedProductInformation";
import { useDispatch } from "react-redux";
import { addToShoppingBox,removeFromShoppingBox } from "../toolkit/features/shoppingBoxSlice";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addedToShoppingBox, setAddedToShoppingBox] = useState(false);
  const dispatch = useDispatch();
 
const {selectedProductInformation} = useSelectedProductInformation(id)

  function goToShoppingBox() {
    navigate("/shoppingBox");
  }

  function addItemToShoppingBox(item) {
    setAddedToShoppingBox(true);
    dispatch(addToShoppingBox(item));
  }

  function removeItemFromShoppingBox(id) {
    setAddedToShoppingBox(false);
    dispatch(removeFromShoppingBox(id));
  }

  return (
    <main className="w-full h-auto">
      <div className="flex flex-row justify-center items-center w-full h-auto">
        <img
          className="w-[400px] h-auto "
          src={selectedProductInformation?.image}
          alt={selectedProductInformation?.title}
        />
        <div className="flex flex-col justify-center items-center">
          <label>{selectedProductInformation?.title}</label>
          <span>{selectedProductInformation?.price}</span>
          <span>{selectedProductInformation?.category}</span>
          <span>{selectedProductInformation?.description}</span>
          <button  onClick={() =>
              addedToShoppingBox
                ? removeItemFromShoppingBox(selectedProductInformation?.id)
                : addItemToShoppingBox(selectedProductInformation)
            } className="bg-blue-700 text-blue-100 m-3 px-6 py-2 rounded-md shadow-lg">
          {addedToShoppingBox
              ? "remove from shopping box"
              : " add to shopping box"}
          </button>
        </div>
      </div>
      <span
        onClick={goToShoppingBox}
        className="material-icons fixed bottom-4 left-4 text-4xl text-blue-100 bg-blue-800 p-5 rounded-full cursor-pointer shadow-lg "
      >
        shopping_cart
      </span>
    </main>
  );
};

export default ProductPage;
