import './Footer.css'
import { PiInstagramLogoBold } from "react-icons/pi";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Footer = ({ menuScrollToFunc, blogRef, menuRef, galerijaRef, bookATableRef, contactRef }) => {
    return(
        <>
        <footer>

            <section className='footer-section'>

                <div className='footer-inside'>
                    <ul className='footer-ul footer-menu'>
                        <div>
                            <li className='footer-title'>NAVIGACIJA</li>
                        </div>
                        <div className='footer-menu-li'>
                            <li className='footer-li m' onClick={() => menuScrollToFunc(blogRef)}>blog</li>
                            <li className='footer-li m' onClick={() => menuScrollToFunc(menuRef)}>menu</li>
                            <li className='footer-li m' onClick={() => menuScrollToFunc(galerijaRef)}>galerija</li>
                            <li className='footer-li m' onClick={() => menuScrollToFunc(bookATableRef)}>rezervacije</li>
                            <li className='footer-li m' onClick={() => menuScrollToFunc(contactRef)}>kontakt</li>
                        </div>
                    </ul>

                    <ul className='footer-ul footer-contact'>
                        <li className='footer-title'>KONTAKT</li>
                        <li className='footer-li c-info'>
                            <a className="a-tag" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Konoba+Ivina+Arka/@43.8177427,16.9648568,555m/data=!3m1!1e3!4m6!3m5!1s0x475f8cb53e3e5653:0x80b9d06d571629da!8m2!3d43.8177159!4d16.964916!16s%2Fg%2F11g9nsdw6v?entry=ttu">
                                Veliki Guber 1, Livno
                            </a>
                        </li>
                        <li className='footer-li c-info'>
                            <a className="a-tag" href="mailto:konobaivinaarka1@gmail.com">
                                konobaivinaarka1@gmail.com
                            </a>
                        </li>
                        <li className='footer-li c-info'>
                            <a className="a-tag" href="tel:+38763330814">
                                + 387 63 330 814
                            </a>
                        </li>
                    </ul>

                    <ul className='footer-ul'>
                        <li className='footer-title'>MREŽE</li>
                        <div className='footer-social'>
                            <li className='footer-li insta-wrap'><a href="https://www.instagram.com/konobaivinaarka/" target="_blank"><PiInstagramLogoBold className='footer-social-insta'/></a></li>
                            <li className='footer-li face-wrap'><a href="https://www.facebook.com/ivinaarka?locale=hr_HR" target="_blank"><TiSocialFacebookCircular className='footer-social-face'/></a></li>
                        </div>
                    </ul>

                </div>
                
                <div className='creator-wrap'>
                    <p className='creator'>© {new Date().getFullYear()} Konoba Ivina Arka </p>
                </div>


            </section>



        </footer>
        </>
    )
}

export default Footer