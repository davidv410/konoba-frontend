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
                        <li className='footer-li' onClick={() => menuScrollToFunc(blogRef)}>blog</li>
                        <li className='footer-li' onClick={() => menuScrollToFunc(menuRef)}>menu</li>
                        <li className='footer-li' onClick={() => menuScrollToFunc(galerijaRef)}>galerija</li>
                        <li className='footer-li' onClick={() => menuScrollToFunc(bookATableRef)}>rezervacije</li>
                        <li className='footer-li' onClick={() => menuScrollToFunc(contactRef)}>kontakt</li>
                    </ul>

                    <ul className='footer-ul'>
                        <a target="_blank" href="https://www.google.com/maps/place/Konoba+Ivina+Arka/@43.8177427,16.9648568,555m/data=!3m1!1e3!4m6!3m5!1s0x475f8cb53e3e5653:0x80b9d06d571629da!8m2!3d43.8177159!4d16.964916!16s%2Fg%2F11g9nsdw6v?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
                            <li className='footer-li c-info'>Rapovine (magistralni put Livno-Split), Livno</li>
                        </a>
                        <a href="mailto:konobaivinaarka1@gmail.com"></a><li className='footer-li c-info'>konobaivinaarka1@gmail.com</li>
                        <a href="tel:+38763123321" ><li className='footer-li c-info'>+ 387 63 330 814</li></a>
                    </ul>

                    <ul className='footer-ul footer-social'>
                        <li className='footer-li insta-wrap'><a href="https://www.instagram.com/konobaivinaarka/" target="_blank"><PiInstagramLogoBold className='footer-social-insta'/></a></li>
                        <li className='footer-li face-wrap'><a href="https://www.facebook.com/ivinaarka?locale=hr_HR" target="_blank"><TiSocialFacebookCircular className='footer-social-face'/></a></li>
                    </ul>

                </div>
                
                <div className='creator-wrap'>
                    <p className='creator'>David Vrgoč</p>
                </div>


            </section>



        </footer>
        </>
    )
}

export default Footer