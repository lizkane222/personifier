import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (params) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  axios.defaults.baseURL = 'https://api.unsplash.com';

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results);
    } 
    catch(err) {
      setError(err)
    } 
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(params);
  }, [params])

  return {
    response,
    isLoading,
    error,
    fetchData: urls => fetchData(urls)
  }
}

export default useAxios








// const useAxios = (params) => {
//     const [response, setResponse] = useState([])
//     const [isLoading, setIsLoading] = useState([])
//     const [error, setError] = useState('')
    
//     axios.defaults.baseURL='https://api.unsplash.com'

//     const fetchData = async (url) => {
//         try {
//             setIsLoading(true);
//             const res = await axios(url);
//             setResponse(res.data.results);
//         }catch(err) {
//             setError(err)
//         }finally {
//             setIsLoading(false);
//         }
//     }

//     useEffect(() => {
//         fetchData(params);
//     }, [params]);

//     return({
//         response: response,
//         isLoading: isLoading,
//         error: error,
//         fetchData: url => fetchData(url)
//     })
// }

// export default useAxios;