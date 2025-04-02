import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './BlogArticle.css'
import posaoBlog from '../../../assets/posaoblog.jpg'
import kobasijadaBlog from '../../../assets/kobasijadablog.jpg'


const BlogArticle = () => {
    
    const navigate = useNavigate();

    const [blogData, setBlogData] = useState([
        {image: posaoBlog, date: "MAR 22, 2025", title: "Oglas za posao", desc:`Radno mjesto: KONOBAR (potrebno iskustvo na istim ili sličnim poslovima)`},
        {image: kobasijadaBlog, date: "MAR 25, 2025", title: "Livanjska kobasijada", desc:`…Tradicija se nastavlja…`}
    ])

    const openArticle = (title) => {
       let titleUpdate = title.replace(/\s+/g, '-')
       navigate(`/article/${titleUpdate}`)

        // ovo ce mi trebat
        // let str = "hello-world-this-is-JS";
        // let newStr = str.replace(/-/g, " ");
        // console.log(newStr);
    }

    return (
        <>
            {blogData?.length > 0 ? (
                blogData.map(item => (
                    <article key={item.title} className='article-wrap' onClick={() => openArticle(item.title)}>
                        <div className='article-img-div'>
                            <img src={item.image} alt={item.title} className='article-img'/>
                        </div>
                        <div className='article-info'>
                            <time className='article-date'>{item.date}</time>
                            <h2 className='article-title'>{item.title}</h2>
                            <p className='article-content'>{item.desc}</p>
                        </div>
                    </article>
                ))
            ) : (
                <p className="error-message">Nema dostupnih članaka</p>
            )}
        </>
    )
}

export default BlogArticle