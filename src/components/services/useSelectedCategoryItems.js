import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

function useSelectedCategoryItems (category) {
    const queryClient = useQueryClient()
    const {data:selectedCategoryItems,refetch} = useQuery({
        queryKey : [category] , 
        queryFn : async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            return response?.data
        }
    })
    const invalidate = async ()=>{
        queryClient.invalidateQueries({queryKey:[category],exact:true})
        const res = await refetch({exact:true});
        console.log(res,'res');
        
    }
    

    return {selectedCategoryItems,invalidate}
}

export default useSelectedCategoryItems;