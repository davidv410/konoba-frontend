import { useState, useEffect, useCallback } from 'react'

const getUser = () => {

      const [user, setUser] = useState({
        username:"",
        role:""
      })

        const getUser = useCallback(async () => {
            try{
                const fetchData = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                credentials: 'include',
                method: 'GET'
            })
                if(fetchData.ok){
                    const fetchedData = await fetchData.json()
                    if (fetchedData) {
                        setUser({ username: fetchedData.username, role: fetchedData.role })
                    }
                }
            }catch{
    
            }
        })

        useEffect(() => {
            getUser()
        }, [])

        return { user, refetch: getUser }
}

export default getUser