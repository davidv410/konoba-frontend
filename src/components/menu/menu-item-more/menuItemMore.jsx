import { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'

const MenuItemMore = ({ itemID }) => {

    const { data, error, isLoading } = useFetch("http://localhost:5000/menu-item-more")

    const filter = data.filter(item => {
        if(item.menu_item_id === itemID) {
            return true
        }
    })

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}
    
    return(
        <>
         {
            filter.map(item => 
                <div className='menu-item-more'>
                    <div className='item-meat-type'>{item.meat}</div>
                    <div className='item-price'>{item.price}</div>
                    <div className='item-price-currency'>KM</div>
                </div>
            )
         }
        </>
    )
}

export default MenuItemMore