import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import './Article.css'
import Header from "../homepage/header/Header";
import SectionDivide from '../sectiondivide/SectionDivide'
import Footer from '../footer/Footer'

const Article = () => {

    const [filteredBlog, setFilteredBlog] = useState([])

    const { title } = useParams();
    const { data, error, isLoading } = useFetch(`${import.meta.env.VITE_API_URL}/blog`);

    let str = title;
    let newTitle = str.replace(/-/g, " ");

    const filterData = (titleParam) => {
        const filter = data.filter(item => item.title === titleParam)
        setFilteredBlog(filter)
    }
    
    useEffect(() => {
        if (data.length > 0) {
            filterData(newTitle)
        }
    }, [data, newTitle]);

    
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}
  
    return(
        <>
        <Header/>
        <div className="article-container-separate">
        {
            filteredBlog.map(item => (
                <div key={item.id} className="article-wrap-separate">
                    <div className="first-div">
                        <h1 className="article-title-separate">{item.title}</h1>
                        <div className="article-date-separate">{formatDate(item.date)}</div>
                        <h3 className="article-desc-separate">{item.descr}</h3>
                    </div>
                    <div className="second-div">
                        <img src={`${item.image}`} alt={item.image} className='article-img-separate'/>
                        <div className="article-content-separate" style={{ whiteSpace: 'pre-line' }}>{item.content}</div>
                    </div>
                </div>
            ))
        }
        </div>

        <div className="section-divide-margin">
            <SectionDivide/>
        </div>
        <Footer/>
        </>
    )
}

export default Article