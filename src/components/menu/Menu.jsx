import { useState } from 'react'
import './Menu.css'
import MenuSelector from './menu-selector/MenuSelector'
import MenuItem from './menu-item/MenuItem'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

const Menu = forwardRef((props, ref) => {

    const [activeMenu, setActiveMenu] = useState(0)

    const [displayThisMenu, setDisplayThisMenu] = useState()

    return(
        <>
        <SectionDivide/>
            <section className="menu-container" ref={ref}>

                <h2>MENI</h2>
                <h3 className='menu-little-title'>Svježe, ukusno i <br/> s ljubavlju pripremljeno</h3>

                <div className='menu'>
                    <ul className='menu-sections'>
                        <MenuSelector 
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}
                            displayThisMenu={displayThisMenu}
                            setDisplayThisMenu={setDisplayThisMenu}
                        />
                    </ul>
                    <div className='menu-items'>
                        <MenuItem
                            displayThisMenu={displayThisMenu}
                            setDisplayThisMenu={setDisplayThisMenu}
                        />
                    </div>
                </div>
            </section>
        </>
    )
})

export default Menu 