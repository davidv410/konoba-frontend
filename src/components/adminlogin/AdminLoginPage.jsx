import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext'
import './Admin.css'

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
        <div className='login-div'>
            <div className='login-div-inside'>
                <input className="login-input" type="text" name="username" id="" onChange={handleInput} placeholder='korisnik'/><br></br>
                <input className="login-input" type="text" name="password" onChange={handleInput} placeholder='šifra'/><br></br>
                <button className="login-btn" onClick={() => loginFunc()}>PRIJAVA</button>
            </div>
        </div>
        </>
    )
}

export default AdminLogin