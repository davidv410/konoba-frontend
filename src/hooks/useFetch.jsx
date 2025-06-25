import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null); 

    const fetchDataFunc = async () => {
        setIsLoading(true)
        try {
            const fetchData = await fetch(url)
            if(fetchData.ok){
                const fetchedData = await fetchData.json()
                setData(fetchedData)
            } else { 
                throw new Error('Failed to fetch data'); 
            }
        } catch (error) { 
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        fetchDataFunc()
        //ABORT CONTROLLER ? 
    }, [url])

    return {data, error, isLoading, refetch: fetchDataFunc}

}

export default useFetch