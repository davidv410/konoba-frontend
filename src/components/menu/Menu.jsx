import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState } from 'react'
import './Menu.css'
import MenuSelector from './menu-selector/MenuSelector'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Menu = forwardRef((props, ref) => {

    useGSAP(() => {
        gsap.from(".menu-container", {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: ".menu-container",
            start: "top 70%",    // when top of section hits 80% of viewport
            toggleActions: "play none none reverse" 
            }
        });

    }, [])

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