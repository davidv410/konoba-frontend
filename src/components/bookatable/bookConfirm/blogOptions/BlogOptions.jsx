import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './BlogOptions.css'

const BlogOptions = ({ backendRoute, data, refetch}) => {

    const navigate = useNavigate()

    const deleteBlog = async (id) => {
        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/blog/${id}`, {
                method: 'DELETE'
            })
            if(sendData.ok){
                const data = await sendData.json()
                console.log('RESPONSE:', data);
                refetch()
            }else{
                const error = await sendData.json()
                setErrors({ general: error.message || 'Server error' });
            }
        }catch(error){
             setErrors({ general: error.message ||'Došlo je do greške. Molimo pokušajte ponovo.' });
        }
    }

    const [openAddBlog, setOpenAddBlog] = useState(false)

    const openAddBlogFunc = () => {
        setOpenAddBlog(!openAddBlog)
    }

    const closeAddBlogFunc = () => {
        setOpenAddBlog(false)
        setBlogTemplate({
            naslov: "",
            opis: "",
            sadrzaj: ""
        })
    }

    const [blogTemplate, setBlogTemplate] = useState({
        naslov: "",
        opis: "",
        sadrzaj: ""
    })

    const [addBlogImage, setAddBlogImage] = useState()

    const handleInput = (e) => {

        const { name, value, files, type } = e.target

        if(type === 'file'){
            setAddBlogImage(files[0])
        }else{
            setBlogTemplate(prev => ({...prev, [name]: value}))
        }

    }

    const addBlog = async () => {
        
        const blogDataNew = new FormData()
        blogDataNew.append('naslov', blogTemplate.naslov)
        blogDataNew.append('opis', blogTemplate.opis)
        blogDataNew.append('sadrzaj', blogTemplate.sadrzaj)
        if (addBlogImage) {
            blogDataNew.append('slika', addBlogImage)
        }


        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/blog`, {
                method: 'POST',
                body: blogDataNew
            })
            if(sendData.ok){
                const data = await sendData.json()
                console.log('RESPONSE:', data);
                refetch()
            }else{
            
            }
        }catch{

        }
    }

    const openArticle = (title) => {
       let titleUpdate = title.replace(/\s+/g, '-')
       navigate(`/blog/${titleUpdate}`)
    }

    const [blogz, setBlogz] = useState()
    
    const chooseBlog = (id) => {
        const blog = data.find(blog => blog.id === id)
        setBlogz([blog])
    }

    const [newBlogImage, setNewBlogImage] = useState()

    const handleBlogInput = (e) => {
        const { name, value, files, type } = e.target

        if(type === 'file'){
            setNewBlogImage(files[0])
        }else{
            setBlogz(prev => ([{...prev[0], [name]: value}]))
        }
    }
    
    const closeEditBlog = () => {
        setBlogz("")
    }

    const applyEditBlog = async () => {

        const blogDataNew = new FormData()
        blogDataNew.append('id', blogz[0].id)
        blogDataNew.append('title', blogz[0].title)
        blogDataNew.append('descr', blogz[0].descr)
        blogDataNew.append('content', blogz[0].content)
        if (newBlogImage) {
            blogDataNew.append('image', newBlogImage)
        }

        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/blog-update-route`, {
                method: 'POST',
                body: blogDataNew
            })
            if(sendData.ok){
                const response = await sendData.json()
                console.log(response)
            }
        }catch{

        }
    }

    return(
        <>
        { backendRoute === "blog" ? 

        <div>
            <button onClick={() => openAddBlogFunc()} className='dodaj-blog-btn'>DODAJ</button>

            {
            data.map((item) => (
                    <div key={item.id} className='article-wrap-wrap'>
                        
                    <article key={item.title} className='article-wrap' onClick={() => openArticle(item.title)} style={{ margin: "10px" }}>
                        <div className='article-img-div'>
                            <img src={`${item.image}` || 'nema.jpg'} alt={item.image} className='article-img'/>
                        </div>
                        <div className='article-info'>
                            <time className='article-date'>{item.date}</time>
                            <h2 className='article-title'>{item.title}</h2>
                            <p className='article-content'>{item.descr}</p>
                        </div>
                        <div className="article-actions">
                            <button onClick={e => { e.stopPropagation(); chooseBlog(item.id); }}className='uredi-blog'>UREDI</button>
                            <button onClick={e => { e.stopPropagation(); deleteBlog(item.id); }}className='izbrisi-blog'>IZBRISI</button>
                        </div>
                    </article>

                    </div>
            ))
            }
        </div>
            : null }

            <div>
            { openAddBlog ? 
               <>
                <div className='add-blog-div'>
                    <button onClick={() => closeAddBlogFunc()} className='close-btn'>X</button>
                    <div className='blog-options'>
                    <div className='blog-option-div'><input className="blog-option-input" name="naslov" type="text" placeholder='naslov' onChange={handleInput}/></div>
                    <div className='blog-option-div'><textarea className="blog-option-input textarea" name="opis" id="" placeholder='opis' onChange={handleInput}></textarea></div>
                    <div className='blog-option-div'><textarea className="blog-option-input textarea" name="sadrzaj" id="" placeholder='sadrzaj' onChange={handleInput}></textarea></div>
                    <div><input  className='slika-input'  name="slika" type="file" placeholder='slika' onChange={handleInput}/></div>
                    </div>
                    <button onClick={() => addBlog()} className="add-blog-btn">DODAJ</button>
                </div>
               </>
            : 
            null
            }
        </div>


            <div>
                {blogz && blogz.map(item => (
                    <div className='add-blog-div'>
                        <button onClick={() => closeEditBlog()} className='close-btn'>X</button>
                        <div className='blog-options'>
                            <div className='blog-option-div'><textarea className="blog-option-input textarea" name="title" id="" value={item.title} onChange={handleBlogInput}></textarea></div>
                            <div className='blog-option-div'><textarea className="blog-option-input textarea" name="descr" id="" value={item.descr}  onChange={handleBlogInput}></textarea></div>
                            <div className='blog-option-div'><textarea className="blog-option-input textarea-special"name="content" id="" value={item.content}  onChange={handleBlogInput}></textarea></div>
                            <div className='slika-input'><input name="image" type="file" onChange={handleBlogInput}/></div>
                        </div>
                        <button onClick={() => applyEditBlog()} className="confirm-blog-btn">POTVRDI PROMJENE</button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default BlogOptions