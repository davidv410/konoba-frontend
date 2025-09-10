import './HomepageContent.css'
import { RiArrowRightLine } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { PiClockBold } from "react-icons/pi";

const HomepageContent = ({ menuScrollToFunc, menuRef, bookATableRef }) => {
    return(
        <>
            <div className="homepage-content-div">
                <div className='homepage-content-inside'>
                    <div className='homepage-heading'>
                        <h1>Konoba <br/> IVINA ARKA</h1>
                    </div>
                    <div className='button-container'>
                        <button className='homepage-button book-btn' onClick={() => menuScrollToFunc(bookATableRef)}>REZERVIRAJ STOL<RiArrowRightLine className='button-arrow'/></button>
                        <button className='homepage-button meni-btn' onClick={() => menuScrollToFunc(menuRef)}>MENI<RiArrowRightLine className='button-arrow'/></button>
                    </div>
                    <div className='homepage-info'>
                        <div className='location-cont'>
                            <div className='location-cont-left'>
                                <LuMapPin className='pin-icon'/>
                                <div>
                                    <a target="_blank" href="https://www.google.com/maps/place/Konoba+Ivina+Arka/@43.8177427,16.9648568,555m/data=!3m1!1e3!4m6!3m5!1s0x475f8cb53e3e5653:0x80b9d06d571629da!8m2!3d43.8177159!4d16.964916!16s%2Fg%2F11g9nsdw6v?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
                                        <p>Veliki Guber 1, Livno</p>
                                    </a>
                                </div>
                                <RiArrowRightLine className='location-arrow rotate-left'/>
                            </div>
                        </div>
                        <div className='working-hours-cont'>
                            <div><PiClockBold className='clock-icon'/></div>
                            <div>
                                <p><span className='homepage-days'>Pon-Ned:</span>  09:00 – 22:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageContent