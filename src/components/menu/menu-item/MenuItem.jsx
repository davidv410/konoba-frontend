import './MenuItem.css'
import { useState, useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import MenuItemMore from '../menu-item-more/menuItemMore'

const MenuItem = ({menuID, subgroupID, selectSgID, selectMenuID}) => {

    const { data, error, isLoading } = useFetch(`http://localhost:5000/menu-items`)
    const [test, setTest] = useState()

    const firstSubgroupID = data
        .filter(item => item.menu_id === menuID)
        .map(item => item.subgroup_id)
        .find((id) => id !== undefined);

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}
    
    return (
        <>
            {data.map((item, i) => (
                item.menu_id === menuID ?
                    !selectMenuID ? 
                        item.subgroup_id === firstSubgroupID ?
                            <div className={`menu-item-div-wrap ${!item.price ? 'span-glavna' : null}`} key={i}>
                                <div className='menu-item-div'>
                                    <div className='menu-item-left'>
                                        <p className='menu-item-title'>{item.name}</p>
                                        <p className='item-desc'>{item.description}</p>
                                    </div>
                                    <div className={`menu-item-right-wrap ${!item.price ? 'meat-cont' : null}`}>
                                        <div className='menu-item-right'>
                                            <div className='item-line'></div>
                                            <div className='item-price'>{item.price}</div>
                                            { item.price ?  <div className='item-price-currency'>KM</div> : null}
                                        
                                        </div>
                                        <MenuItemMore itemID={item.id}/>
                                    </div>
                                </div>
                            </div>
                        : null
                     : item.subgroup_id === selectSgID ?
                     <div className='menu-item-div-wrap' key={i}>
                                <div className='menu-item-div'>
                                    <div className='menu-item-left'>
                                        <p className='menu-item-title'>{item.name}</p>
                                        <p className='item-desc'>{item.description}</p>
                                    </div>
                                    <div className='menu-item-right-wrap'>
                                        <div className='menu-item-right'>
                                            <div className='item-line'></div>
                                            <div className='item-price'>{item.price}</div>
                                            <div className='item-price-currency'>KM</div>
                                        </div>
                                        <MenuItemMore itemID={item.id}/>
                                    </div>
                                </div>
                            </div>
                     : null
                : null
            ))}
        </>
    )
}

export default MenuItem