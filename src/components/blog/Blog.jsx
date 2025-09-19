import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './Blog.css'
import BlogArticle from './blog-article/BlogArticle'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Blog = forwardRef((props, ref) => {

    useGSAP(() => {
    
        gsap.from(".blog-container", {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
            trigger: ".blog-container",
            start: "top 90%",   // when top of section hits 80% of viewport
            toggleActions: "play none none reverse" 
            }
        });

    }, [])

    return (
        <>

        
            <section className="blog-container" ref={ref}>
                <div className="container-title">
                    <h2 className='blog-heading'>BLOG</h2>
                    <h3 className='blog-little-title'>Najnovije vijesti iz konobe</h3>
                    <p  className='blog-little-title-desc'>Posebne ponude, novi okusi i kulinarske priče.</p>
                </div>

                <div className='blog-article-container'>
                    <BlogArticle/>
                </div>
            </section>
        </>
    )
})

export default Blog