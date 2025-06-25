import { useState, useEffect } from 'react'
import './MenuSelector.css'
import MenuSelectorSg from '../menu-selector-sg/MenuSelectorSg'
import useFetch from '../../../hooks/useFetch'

const MenuSelector = ({ showAll }) => {

    const { data, error, isLoading } = useFetch(`${import.meta.env.VITE_API_URL}/menus`)

    const displayedItems = showAll ? data : data?.slice(0, 2)

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}

    return(
        <>
        {
            displayedItems?.map(item => 
            <div className="menu-titles-div" key={item.id}>
                <div className="menu-titles">{item.name}</div>
                <MenuSelectorSg menuID={item.id}/>
            </div>
            )
        }
        </>
    )
}

export default MenuSelector