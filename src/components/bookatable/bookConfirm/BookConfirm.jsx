import useFetch from '../../../hooks/useFetch';
import './BookConfirm.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../../../contexts/UserContext'
import AdminLogout from '../../adminlogin/AdminLogout';
import BlogOptions from './blogOptions/BlogOptions';
import GalleryOptions from './galleryOptions/GalleryOptions';
import BookingOptions from './bookingOptions/BookingOptions';
import MenuOptions from './menuOptions/MenuOptions';

const BookConfirm = () => {
    const [backendRoute, setBackendRoute] = useState("book-table-confirm")
    const [errors, setErrors] = useState()
    const [navOpen, setNavOpen] = useState(false) // NEW

    const { user } = useUser()
    const navigate = useNavigate();

    const adminTabsChoose = (route) => {
        setBackendRoute(route)
        setNavOpen(false) // Optionally close nav after selection
    }

    const { data, error, isLoading, refetch } = useFetch(`${import.meta.env.VITE_API_URL}/${backendRoute}`);

    if (isLoading) {return <div>Loading...</div>; }
    if (error) {return <div>Error: {error.message}</div>;}

    return(
        <>
        { user.username ? 
        <section className="admin-section">

            <button className="admin-nav-toggle" onClick={() => setNavOpen(open => !open)}>
                {navOpen ? "Zatvori" : "Otvori"}
            </button>

            <div className={`admin-nav-cont${navOpen ? " open" : ""}`}>
                <ul className='admin-ul'>
                    <li className={`admin-li ${ backendRoute === "book-table-confirm" ? "admin-active-li" : "" }`} onClick={() => adminTabsChoose("book-table-confirm")}>Na cekanju rezervacije</li>
                    <li className={`admin-li ${ backendRoute === "book-table-list" ? "admin-active-li" : "" }`} onClick={() => adminTabsChoose("book-table-list")}>Potvrdjene rezervacije</li>
                    <li className={`admin-li ${ backendRoute === "blog" ? "admin-active-li" : "" }`} onClick={() => adminTabsChoose("blog")}>Blog</li>
                    <li className={`admin-li ${ backendRoute === "gallery-route" ? "admin-active-li" : "" }`} onClick={() => adminTabsChoose("gallery-route")}>Galerija</li>
                    <li className={`admin-li ${ backendRoute === "menus" ? "admin-active-li" : "" }`} onClick={() => adminTabsChoose("menus")}>Meni</li>
                    <li><AdminLogout/></li>
                </ul>
            </div>

            <div style={{ margin: "40px 10px " }}>
                <BookingOptions backendRoute={backendRoute} data={data} refetch={refetch}/>
                <BlogOptions backendRoute={backendRoute} data={data} refetch={refetch}/>
                <GalleryOptions backendRoute={backendRoute} data={data} refetch={refetch}/>
                <MenuOptions backendRoute={backendRoute} menu={data} refetch={refetch}/>
            </div>

            { errors ?  <p>{errors.general}</p> : null}

        </section>
        : 
        <div><button onClick={() => navigate('/admin-login')}>LOGIN</button></div>
         }
        </>
    )
}

export default BookConfirm