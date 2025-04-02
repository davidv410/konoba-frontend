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
                                    <p>Rapovine (magistralni put Livno-Split), Livno</p>
                                </div>
                                <RiArrowRightLine className='location-arrow rotate-left'/>
                            </div>
                        </div>
                        <div className='working-hours-cont'>
                            <div><PiClockBold className='clock-icon'/></div>
                            <div>
                                <p><span className='homepage-days'>Pon-Ned:</span>  09:00 – 00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageContent