import './Blog.css'
import BlogArticle from './blog-article/BlogArticle'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

const Blog = forwardRef((props, ref) => {
    return (
        <>

        
            <section className="blog-container" ref={ref}>
                <div className="container-title">
                    <h2>BLOG</h2>
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