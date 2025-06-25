import { createContext, useContext, useState, useEffect } from 'react'
import getUser from '../hooks/getUser'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const { user, refetch } = getUser()

    return(
        <UserContext.Provider value={{ user, refetch }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)