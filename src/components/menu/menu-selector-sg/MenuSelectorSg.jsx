import { useEffect, useState } from 'react'
import './MenuSelectorSg.css'
import MenuItem from '../menu-item/MenuItem'
import Menu from '../Menu'
import useFetch from '../../../hooks/useFetch'

const MenuSelectorSg = ({ menuID }) => {

    const { data, error, isLoading } = useFetch("http://localhost:5000/menus-sg")

    const [selectSgID, setSelectSgID] = useState()
    const [selectMenuID, setSelectMenuID] = useState()

    const [defaultSubGroup, setDefaultSubGroup] = useState(0)

    const filter = data.filter(item => {
        if( item.menu_id === menuID ) { return true }
    })

    const selectSg = (i) => {
        setSelectSgID(filter[i].id)
        setSelectMenuID(filter[i].menu_id)
        setDefaultSubGroup(i)
    }

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}
    
    return(
        <>
            {filter.map((item, i) => 
                <div key={item.id} className={`menu-subgroup-title ${ i === defaultSubGroup ? 'active' : null}`} onClick={() => selectSg(i)}>
                    {item.name}
                </div>
                
            )}

        
            <div  className="menu-item-div-cont">
                <MenuItem menuID={menuID} subgroupID={null} selectSgID={selectSgID} selectMenuID={selectMenuID}/>
            </div>
        </>
    )
}

export default MenuSelectorSg