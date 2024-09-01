import React, { useState,useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeFromShoppingBox } from "../toolkit/features/shoppingBoxSlice";

const ShoppingBox = () => {
    const MIN_NUMBER = 1;
    const changeValue = 1;
    const dispatch = useDispatch()
    // const totalAmount = useRef(0)
    const shoppingBoxItems = useSelector( state => state?.shoppingBoxItems?.map((item) => ({...item , number: MIN_NUMBER })));
    const [shoppingBoxData,setShoppingBoxData] = useState(shoppingBoxItems) 

    console.log(shoppingBoxData)

    // shoppingBoxData?.map((item) => totalAmount.current = totalAmount.current + (+item.number * +item.price))
    
    function changeNumber(item, index, value) {
        if (item.number) {
          if (item.number === 1 && value < 0) {
            alert("message");
          } else {
            item.number = item.number + value;
            console.log(item.number)
          }
        } else {
          item.number = MIN_NUMBER;
        }
        shoppingBoxData[index] = item;
        setShoppingBoxData([...shoppingBoxData])
      }

    return (
        <main className="flex flex-row justify-center items-center">
          {shoppingBoxData?.map((item, index) => {
            console.log(item.number)
            
            return (
              <div
                className="bg-white relative rounded-md m-[10px] border-[1px] border-solid border-gray-100 shadow-lg flex flex-col justify-center items-center w-1/5 h-[300px] "
                key={item.id}
              >
                <img
                  className="w-[50px] h-[50px]"
                  src={item.image}
                  alt={item.title}
                />
                <label>{item.title}</label>
                <span>{item.price}</span>
                <span>{item.category}</span>
                <div className="m-2">
                  <span
                    onClick={() => changeNumber(item, index, +changeValue)}
                    className="material-icons p-1 cursor-pointer"
                  >
                    add
                  </span>
                  <span>{item.number}</span>
                  <span
                    onClick={() => changeNumber(item, index, -changeValue)}
                    className="material-icons p-1 cursor-pointer"
                  >
                    remove
                  </span>
                </div>
                <p className="bg-red-500">{`${+item.number * +item.price}`}</p>
    
                <button
                  onClick={() =>{
                    dispatch(removeFromShoppingBox(item.id));
                    setShoppingBoxData(shoppingBoxData.filter((e) => {
                        return e.id !== item.id
                     }))
                  }}
                  className="bg-blue-700 rounded-md text-blue-100 py-1 mt-2 px-[10px] "
                >
                  remove from shopping box
                </button>
              </div>
            );
          })}

          <span>
            {/* {totalAmount.current} */}
          </span>
        </main>
      );
}

export default ShoppingBox;