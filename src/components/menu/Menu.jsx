import { useState } from 'react'
import './Menu.css'
import MenuSelector from './menu-selector/MenuSelector'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

const Menu = forwardRef((props, ref) => {
    const [showAll, setShowAll] = useState(false)

    const toggleMenu = () => {
        setShowAll(!showAll)
    }

    return(
        <>
        <SectionDivide/>
            <section className="menu-container" ref={ref}>
                <h2>MENI</h2>
                <h3 className='menu-little-title'>Svježe, ukusno i <br/> s ljubavlju pripremljeno</h3>

                <div className='menu'>
                    <MenuSelector showAll={showAll} />
                </div>

                <button className="show-more-btn" onClick={toggleMenu}>{showAll ? 'Prikaži manje' : 'Prikaži više'}</button>
            </section>
        </>
    )
})

export default Menu