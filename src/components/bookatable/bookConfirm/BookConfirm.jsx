import useFetch from '../../../hooks/useFetch';
import './BookConfirm.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const BookConfirm = () => {

    const [backendRoute, setBackendRoute] = useState("book-table-confirm")
    const [errors, setErrors] = useState()

    const navigate = useNavigate();

    const adminTabsChoose = (route) => {
        setBackendRoute(route)
    }

    const { data, error, isLoading, refetch } = useFetch(`http://localhost:5000/${backendRoute}`);

    const [popUp, setPopUp] = useState(false)
    const [popUpType, setPopUpType] = useState()
    const [user, setUser] = useState()

    const reservationFunction = (id, type) => {
        setPopUp(true)
        setPopUpType(type)
        setUser(id)

    }

    const openArticle = (title) => {
       let titleUpdate = title.replace(/\s+/g, '-')
       navigate(`/blog/${titleUpdate}`)
    }

    const confirmDecision = () => {
        if(popUpType === 'accept'){
            postDecisionToBackend(user, 'insert')
        }

        if(popUpType === 'deny'){
            postDecisionToBackend(user, 'delete')
        }
    }

    const denyDecision = () => {
        if(popUpType === 'accept'){
            setPopUp(false)
            setPopUpType(null)
            setUser(null)
        }

        if(popUpType === 'deny'){
            setPopUp(false)
            setPopUpType(null)
            setUser(null)
        }
    }

    const postDecisionToBackend = async (id, decision) => {
        try{
            const sendData = await fetch ('http://localhost:5000/book-table-confirm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, decision }) 
                })
            if(sendData.ok){
                const data = await sendData.json()
                console.log('RESPONSE:', data);
                setPopUp(false)
                setPopUpType(null)
                setUser(null)
                refetch()
            }else{
                throw new Error('Failed to send data'); 
            }
        } catch {

        }
    }

    const removeReservation = async (id) => {
        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/book-table-list/${id}`, {
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


    const deleteBlog = async (id) => {
        try{
            const sendData = await fetch(`http://localhost:5000/blog/${id}`, {
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
        setOpenAddBlog(true)
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

    const handleInput = (e) => {
        setBlogTemplate(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const addBlog = async () => {
        console.log(blogTemplate)
        try{
            const sendData = await fetch('http://localhost:5000/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogTemplate) 
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


    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}


    return(
        <>
        <section className="admin-section">

        <div className='admin-nav-cont'>
            <ul className='admin-ul'>
                <li className={`admin-li ${ backendRoute === "book-table-confirm" ? "admin-active-li" : null }`} onClick={() => adminTabsChoose("book-table-confirm")}>Na cekanju rezervacije</li>
                <li className={`admin-li ${ backendRoute === "book-table-list" ? "admin-active-li" : null }`} onClick={() => adminTabsChoose("book-table-list")}>Potvrdjene rezervacije</li>
                <li className={`admin-li ${ backendRoute === "blog" ? "admin-active-li" : null }`} onClick={() => adminTabsChoose("blog")}>Blog</li>
            </ul>
        </div>

        <div>
        { backendRoute === "book-table-confirm" ? 
            data.map((item) => (
                <div key={item.id} className='booking-application'>
                    <div>Ime: {item.name}</div>
                    <div>Email: {item.email}</div>
                    <div>Broj: {item.phone}</div>
                    <div>Datum: {item.date}</div>
                    <div>Vrijeme: {item.time}</div>
                    <div>Broj ljudi: {item.people}</div>
                    <button className="admin-accept-btn" onClick={() => reservationFunction(item.id, 'accept')}>ACCEPT</button>
                    <button className="admin-deny-btn" onClick={() => reservationFunction(item.id, 'deny')}>DENY</button>
                </div>
            ))
            : null }
        </div>

        <div>
        { backendRoute === "book-table-list" ? 
            data.map((item) => (
                    <div key={item.id} className='booking-application'>
                        <div>Ime: {item.name}</div>
                        <div>Email: {item.email}</div>
                        <div>Broj: {item.phone}</div>
                        <div>Datum: {item.date}</div>
                        <div>Vrijeme: {item.time}</div>
                        <div>Broj ljudi: {item.people}</div>
                        <button onClick={() => removeReservation(item.id)}>IZBRISI</button>
                    </div>
            ))
            : null }
        </div>
        <div>
        { backendRoute === "blog" ? 

        <div>
            <button onClick={() => openAddBlogFunc()}>DODAJ</button>

            {
            data.map((item) => (
                    <div key={item.id} style={{ width: "", display: "flex" }}>
                        
                    <article key={item.title} className='article-wrap' onClick={() => openArticle(item.title)} style={{ margin: "10px" }}>
                        <div className='article-img-div'>
                            <img src={`./dist/assets/${item.image}`} alt={item.image} className='article-img'/>
                        </div>
                        <div className='article-info'>
                            <time className='article-date'>{item.date}</time>
                            <h2 className='article-title'>{item.title}</h2>
                            <p className='article-content'>{item.descr}</p>
                        </div>
                    </article>
                        <button>UREDI</button>
                        <button onClick={() => deleteBlog(item.id)}>IZBRISI</button>

                    </div>
            ))
            }
        </div>
            : null }

        </div>

        <div className={`pop-up ${popUp ? `popUpActive` : null}`}>
            Jeste li sigurni da zelite { popUpType === 'accept' ? <span style={{ color: 'green' }}>potvrditi</span> : <span style={{ color: 'red' }}>odbiti</span> } rezervaciju za
            <button onClick={() => confirmDecision()}>DA</button>
            <button onClick={() => denyDecision()}>NE</button>
        </div>


        <div style={{ position: 'absolute' }} >
            { openAddBlog ? 
               <>
                <div style={{ backgroundColor: 'white', padding: '2vw' }}>
                    <button onClick={() => closeAddBlogFunc()}>X</button>
                    <div><input    name="naslov" type="text" placeholder='naslov' onChange={handleInput}/></div>
                    <div><textarea name="opis" id="" placeholder='opis' onChange={handleInput}></textarea></div>
                    <div><textarea name="sadrzaj" id="" placeholder='sadrzaj' onChange={handleInput}></textarea></div>
                    <div><input    name="slika" type="file" placeholder='slika' onChange={handleInput}/></div>
                    <button onClick={() => addBlog()}>DODAJ</button>
                </div>
               </>
            : 
            null
            }
        </div>

        { errors ?  <p>{errors.general}</p> : null}

        </section>
        </>
    )
}

export default BookConfirm