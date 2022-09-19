import { useEffect, useState } from "react";
const useFetch = (url)=>{
    const [data, setBlogs]=useState(null);
    const [IsPending, setIsPending]=useState(true);
    const [error, setError]=useState(null);
    
    
    useEffect(()=>{
        const AbortConst= new AbortController();
    setTimeout(() => {
     fetch(url, {signal:AbortConst.signal})
     .then(res=> {
         if(!res.ok){
             throw Error('data could not be fetched')
         }
         return res.json();
     })
     .then(data=>{
         // console.log(data);
         setBlogs(data);
         setIsPending(false);
         setError(null);
     })
     .catch(err=>{
        if(err.name=== 'AbortError')
        {
            console.log('fetch aborted');
        }else{
            setIsPending(false);
            setError(err.message);
        }
     })
    }, 1000);
return () => AbortConst;

 }, [url]);

 return {IsPending, data, error}
}

export default useFetch;
 
