import { useState } from 'react'
import './Header.css'
import { PiInstagramLogoBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import logo from '../../../assets/logo.png';


const Header = ({ menuScrollToFunc, blogRef, menuRef, galerijaRef, bookATableRef, contactRef }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <>
        <header>
            <div className='header-inside'>
                <div className='header-img-container'>
                    <img src={logo} className='logo' alt="Konoba Ivina Arka logo" />
                </div>
                <div className='navigation-container'>
                    <nav>
                        <ul className='nav-list'>
                            <li className='list-item'  onClick={() => menuScrollToFunc(blogRef)}><a>BLOG</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(menuRef)}><a>MENU</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(galerijaRef)}><a>GALERIJA</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(bookATableRef)}><a>REZERVACIJE</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(contactRef)}><a>KONTAKT</a></li>
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
                            <li className='list-item'  onClick={() => menuScrollToFunc(blogRef)}><a>BLOG</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(menuRef)}><a>MENU</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(galerijaRef)}><a>GALERIJA</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(bookATableRef)}><a>REZERVACIJE</a></li>
                            <li className='list-item'  onClick={() => menuScrollToFunc(contactRef)}><a>KONTAKT</a></li>
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