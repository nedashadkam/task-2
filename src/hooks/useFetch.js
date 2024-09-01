// const { default: axios } = require("axios")
// const { useQuery } = require("react-query")

// const useFetch = (queryKeys,optConfig)=>{
//     const {data,isLoading,error} = useQuery({
//         queryKey:[...queryKeys],
//         queryFn:()=>apiCallback(),
        
//     })

//     const invalidate = async ()=>{
//         queryClient.invalidateQueries({queryKey:[category],exact:true})
//         const res = await refetch({exact:true});
//         console.log(res,'res');
        
//     }
//     const refetch = async ()=>{
//         const res = await refetch({exact:true});
//         console.log(res,'res');
        
//     }
// }




// const apiCallback = (method,url,header,body,query)=>{
//     if (method==='get') {
//         axios.get();    
//     }
// }
// axios.patch();
// axios.post();
// axios.put();
// axios.delete();