import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext'

const AdminLogin = () => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const { user, refetch } = useUser()

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData(prev => ({...prev, [name]: value}))
    }


    const loginFunc = async () => {
         try{
            const sendData = await fetch (`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(userData) 
            })

            const response = await sendData.json()

            if(sendData.ok){
                if(response.login){
                    refetch()
                    navigate('/admin-confirm')
                    console.log(response)
                }else{
                    console.log(response)
                }
            }else{
                console.log('nije proslo')
            }
        }catch{

        }
    }

    return (
        <>
            <input type="text" name="username" id="" onChange={handleInput} placeholder='username'/><br></br>
            <input type="text" name="password" onChange={handleInput} placeholder='password'/><br></br>
            <button onClick={() => loginFunc()}>LOGIN</button>

        </>
    )
}

export default AdminLogin