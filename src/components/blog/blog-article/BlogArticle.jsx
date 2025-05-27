import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch';
import './BlogArticle.css'


const BlogArticle = () => {
    
    const navigate = useNavigate();

    const { data, error, isLoading } = useFetch("http://localhost:5000/blog");

     const displayedItems = data?.slice(0, 2)

    if (isLoading) {return <div>Učitava se...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}

    const openArticle = (title) => {
       let titleUpdate = title.replace(/\s+/g, '-')
       navigate(`/blog/${titleUpdate}`)
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    return (
        <>
        <div className='article-wrap-cont'>
            {data?.length > 0 ? (
                displayedItems.map(item => (
                    <article key={item.title} className='article-wrap' onClick={() => openArticle(item.title)}>
                        <div className='article-img-div'>
                            <img src={`./dist/assets/${item.image}`} alt={item.image} className='article-img'/>
                        </div>
                        <div className='article-info'>
                            <time className='article-date'>{formatDate(item.date)}</time>
                            <h2 className='article-title'>{item.title}</h2>
                            <p className='article-content'>{item.descr}</p>
                        </div>
                    </article>
                ))
            ) : (
                <div>Nema dostupnih članaka</div>
            )}
       </div>
       <div>
            { data.length > 2  ? <button>OTVORI SVE</button> : null}
        </div>
        </>
    )
}

export default BlogArticle