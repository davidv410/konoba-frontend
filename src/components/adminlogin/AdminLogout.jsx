import { useState, useEffect } from 'react'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'

const AdminLogout = () => {

    const { user, refetch } = useUser()

    const navigate = useNavigate()

     const logout = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
                    method: 'POST',
                    credentials: 'include'
                });
                
                if (response.ok) {
                    refetch()
                    console.log('Logged out successfully');
                }
            } catch (error) {
                console.error('Logout failed:', error);
            }
        };
    return(
        <>
         <button onClick={logout}>Logout</button>
        </>
    )
}

export default AdminLogout