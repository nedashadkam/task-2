import { useQuery } from "react-query";
import axios from "axios";

function useAllProductList (setProducts) {
    const {data:allProductList} = useQuery({
        queryKey : ['allProducts'] , 
        queryFn : async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response?.data)
            return response?.data
        }
    })

    return {allProductList}
}

export default useAllProductList;