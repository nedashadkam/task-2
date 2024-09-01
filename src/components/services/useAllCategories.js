import { useQuery } from "react-query";
import axios from "axios";

function useAllCategories () {
    const {data:allCategoryList} = useQuery({
        queryKey : ['allCategories'] , 
        queryFn : async () => {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            return response?.data
        }
    })

    return {allCategoryList}
}

export default useAllCategories;