import { useState } from 'react'
import SectionDivide from '../sectiondivide/SectionDivide'
import './Galerija.css'
import { forwardRef } from 'react'

import slika1 from './../../assets/galerija1.jpg'
import slika2 from './../../assets/galerija2.jpg'
import slika3 from './../../assets/galerija3.jpg'
import slika4 from './../../assets/galerija4.jpg'
import slika5 from './../../assets/galerija5.jpg'
import slika6 from './../../assets/galerija6.jpg'

import slika7 from './../../assets/galerija7.jpg'
import slika8 from './../../assets/galerija8.jpg'
import slika9 from './../../assets/galerija9.jpg'
import slika10 from './../../assets/galerija101.jpg'
import slika11 from './../../assets/galerija11.jpg'
import slika12 from './../../assets/galerija12.jpg'

const Galerija = forwardRef((props, ref) => {

    const [gallery, setGallery] = useState([
        slika1,
        slika2,
        slika3,
        slika4,
        slika5,
        slika6,

        slika7,
        slika8,
        slika9,
        slika10,
        slika11,
        slika12,

    ])

    return(
        <>
        <SectionDivide/>
            <section className="gallery-section" ref={ref}>
                <div className="gallery">
                {
                    gallery.map((image, i) => (

                        <div className='block' key={i} style={{ backgroundImage: `url(${image})` }}></div>
                    ))
                }
                </div>
            </section>
        </>
    )
})

export default Galerija