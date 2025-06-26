import { useState } from 'react'
import './Header.css'
import { PiInstagramLogoBold } from "react-icons/pi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom'

const Header = ({ menuScrollToFunc, blogRef, menuRef, galerijaRef, bookATableRef, contactRef }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const checkURL = (refName) => {
         if (location.pathname !== "/") {
            navigate("/")
        } else {
            menuScrollToFunc(refName)
        }
        setIsMenuOpen(false)
    }

    return(
        <>
        <header>
            <div className='header-inside'>
                <div className='header-img-container'>
                    <a href="https://https://www.konobaivinaarka.com/" className='header-a-container'><img src={logo} className='logo' alt="Konoba Ivina Arka logo" /></a>
                </div>
                <div className='navigation-container'>
                    <nav>
                        <ul className='nav-list'>
                            <li className='list-item'  onClick={() => checkURL(blogRef)}><a>BLOG</a></li>
                            <li className='list-item'  onClick={() => checkURL(menuRef)}><a>MENU</a></li>
                            <li className='list-item'  onClick={() => checkURL(galerijaRef)}><a>GALERIJA</a></li>
                            <li className='list-item'  onClick={() => checkURL(bookATableRef)}><a>REZERVACIJE</a></li>
                            <li className='list-item'  onClick={() => checkURL(contactRef)}><a>KONTAKT</a></li>
                        </ul>
                    </nav>

                    <div className='social-links-container'>
                        <ul className='social-list'>
                            <li className='list-item'><a href="https://www.instagram.com/konobaivinaarka/" target="_blank"><PiInstagramLogoBold  className='social-icons-insta'/></a></li>
                            <li className='list-item'><a href="https://www.facebook.com/ivinaarka?locale=hr_HR" target="_blank"><TiSocialFacebookCircular className='social-icons-face'/></a></li>
                        </ul>
                    </div>
                </div>

                <div className='ham-button-wrap'>
                    <GiHamburgerMenu 
                    className='ham-button' 
                    onClick={() => openMenu()}
                    aria-label="Open mobile menu"
                    />
                </div>

                <div className={`mobile-menu ${isMenuOpen ? null : 'mobile-closed'}`}>
                    
                    <ul className='mobile-menu-ul'>
                            <li className='list-item'  onClick={() => checkURL(blogRef)}><a>BLOG</a></li>
                            <li className='list-item'  onClick={() => checkURL(menuRef)}><a>MENU</a></li>
                            <li className='list-item'  onClick={() => checkURL(galerijaRef)}><a>GALERIJA</a></li>
                            <li className='list-item'  onClick={() => checkURL(bookATableRef)}><a>REZERVACIJE</a></li>
                            <li className='list-item'  onClick={() => checkURL(contactRef)}><a>KONTAKT</a></li>
                    </ul>

                    <ul className='social-list-mobile'>
                        <li className='list-item'><a href="" target="_blank"><PiInstagramLogoBold  className='social-icons-insta'/></a></li>
                        <li className='list-item'><a href="" target="_blank"><TiSocialFacebookCircular className='social-icons-face'/></a></li>
                    </ul>

                </div>

            </div>
        </header>
        </>
    )
}

export default Header