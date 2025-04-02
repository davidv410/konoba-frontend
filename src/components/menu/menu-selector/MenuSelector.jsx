import { useState } from 'react'
import './MenuSelector.css'

const MenuSelector = ({ activeMenu, setActiveMenu, displayThisMenu, setDisplayThisMenu }) => {

    const [menuSelector, setmenuSelector] = useState(['Juha', 'Predjela', 'Paste i rizoto', 'Jela s rostilja', 'Deserti'])


    const setActiveMenuFunc = (i) => {
        setActiveMenu(i)
        setDisplayThisMenu(menuSelector[i])
    }

    return(
        <>
            {menuSelector.map((section, i) => (
                <li key={i} className={`menu-section-item ${ activeMenu === i ? 'section-active' :  null }`} onClick={() => setActiveMenuFunc(i)}>{section}</li>
            ))}
        </>
    )
}

export default MenuSelector 