import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState, useEffect } from 'react'
import SectionDivide from '../sectiondivide/SectionDivide'
import './Galerija.css'
import { forwardRef } from 'react'
import { MdArrowBackIos  } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import useFetch from './../../hooks/useFetch'

gsap.registerPlugin(ScrollTrigger);


const Galerija = forwardRef((props, ref) => {
    
    
    const { data, error, isLoading } = useFetch(`${import.meta.env.VITE_API_URL}/gallery-route`)
    
    // Run GSAP animation after data is loaded and rendered
    useEffect(() => {
        if (!data || !data.length) return;
        const anim = gsap.fromTo(
            ".gallery-section",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".gallery-section",
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
        ScrollTrigger.refresh();
    }, [data]);


    const [openImage, setOpenImage] = useState()
    const [currentIndex, setCurrentIndex] = useState()

    const openImageFunc = (i) => {
       data.filter((item, index) => {
            if(index === i){
                setCurrentIndex(i)
                setOpenImage(item.image_path)
            }
        })
    }

    const closeImageFunc = () => {
        setOpenImage("")
    }

    const moveLeft = () => {
        currentIndex > 0 ? openImageFunc(currentIndex - 1) : openImageFunc(data.length - 1)
    }

    const moveRight = () => {
        currentIndex === data.length - 1 ?  openImageFunc(0) :  openImageFunc(currentIndex + 1)
    }

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}

    return(
        <>
        <SectionDivide/>
            <section className="gallery-section" ref={ref}>
                <div className="gallery">
                {
                    data.map((image, i) => (
                        
                        <div className='block' key={i} onClick={() => openImageFunc(i)} >
                            <img className='image-block' style={{ width: "100%", height: "100%" }} src={`${image.image_path}`} alt="" />
                        </div>
                        
                    ))
                }
                </div>
            </section>
                { openImage ?
                    <div className='open-image-div-wrap'>
                        <div className="open-image-div">
                            <img src={`${openImage}`} className='article-img'/>
                        </div>
                            <button onClick={() => closeImageFunc()} className="close-image"><IoMdClose className='close-icon'/></button>
                            <button onClick={() => moveLeft()} className="move-left-image"><MdArrowBackIos className='left-icon'/></button>
                            <button onClick={() => moveRight()} className="move-right-image"><MdArrowForwardIos className='right-icon'/></button>
                    </div>
                : null
                }
        </>
    )
})

export default Galerija