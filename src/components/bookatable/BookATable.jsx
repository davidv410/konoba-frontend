import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './BookATable.css'
import BookATableForm from './bookatableform/BookATableForm'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

gsap.registerPlugin(ScrollTrigger);


const BookATable = forwardRef((props, ref) => {

     useGSAP(() => {
        gsap.from(".book-a-table-container-wrap", {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: ".book-a-table-container-wrap",
            start: "top 80%",     // when top of section hits 80% of viewport
            toggleActions: "play none none reverse" 
            }
        });

    }, [])

    return(
        <>
            <SectionDivide/>
            
            <section className="book-a-table-container-wrap" ref={ref}>

                <div className="book-a-table-container">
                    <div className='book-a-table-head'>
                        <h2>REZERVIRAJ STOL</h2>
                        <h3 className='book-little-title'>Osigurajte svoj stol unaprijed <br/> i uživajte bez brige.</h3>
                    </div>

                    <BookATableForm/>
                   
                </div>

            </section>

            <SectionDivide/>
        </>
    )
})

export default BookATable