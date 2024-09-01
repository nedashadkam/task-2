import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const getProductsByCategory = async(category)=>{
    console.log(category,'cat');
    const res =  await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    console.log(res,';res');
    
}

export const PList = () => {
    const [category,setCategory] = useState('all');
    const {data:allCategoryList} = useQuery({
        queryKey : ['allCategories'] , 
        queryFn : async () => {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            return response?.data
        }
    })
    const {data:products,isLoading,error,refetch} = useQuery({queryKey:['category'],queryFn:()=>getProductsByCategory(category),cacheTime:0,staleTime:0,enabled:allCategoryList})
    console.log(products,'data');
    console.log(allCategoryList,'cats');
    
    



  return (
    <div>
      {/* {allCategoryList?.map(category=><button>{category.}</button>)} */}
    </div>
  )
}

