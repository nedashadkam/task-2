import { useQuery } from "react-query";
import axios from "axios";

function useSelectedProductInformation (id) {
    const {data:selectedProductInformation} = useQuery({
        queryKey : ['productInformation'] , 
        queryFn : async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            return response?.data
        }
    })

    return {selectedProductInformation}
}

export default useSelectedProductInformation;