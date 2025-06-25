import { useState } from 'react'
import Subgroups from "./Subgroups"
import './menuOptions.css'
import AddItem from './addItem/AddItem'

const MenuOptions = ({ backendRoute, menu }) => {

    const [chosenMenu, setChosenMenu] = useState(1)

    const chooseMenu = (e) => {
        setChosenMenu(parseInt(e.target.value))
    }

    return(
        <>
            {

                backendRoute === 'menus' ? 
                <div>
                        <AddItem/>
                        <div className='button-wrap-cont'>
                            <div className='button-wrap'>
                                <select value={chosenMenu} onChange={chooseMenu}>
                                    {
                                        menu.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div>
                            <Subgroups menuID={chosenMenu}/>
                        </div>

                </div>
                 : null
            }
        </>
    )
}

export default MenuOptions