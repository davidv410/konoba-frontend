import './ContactInfo.css'
import { LuMapPin } from "react-icons/lu";
import { PiClockBold } from "react-icons/pi";
import { PiPhoneBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";

const ContactInfo = () => {
    return(
        <>
            <div className='contact-info-wrap'>
                <div><h3>Kontakt info</h3></div>
                <div className='contact-info-div'>
                    <a style={{ color: "black" }} target="_blank" href="https://www.google.com/maps/place/Konoba+Ivina+Arka/@43.8177427,16.9648568,555m/data=!3m1!1e3!4m6!3m5!1s0x475f8cb53e3e5653:0x80b9d06d571629da!8m2!3d43.8177159!4d16.964916!16s%2Fg%2F11g9nsdw6v?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
                    <div className='align-div-exepction'>
                        <LuMapPin className='location-icon icon'/>
                        <div>Rapovine (magistralni put Livno-Split), Livno</div>
                   </div>
                   </a>
                   <RiArrowRightLine className='contact-arrow'/>
                </div>
                <div className='contact-info-div align'>
                    <div className='align-div'>
                        <PiClockBold className='icon'/>
                        <div>Pon-Ned: 09:00 - 00:00</div>
                    </div>
                    <RiArrowRightLine className='contact-arrow'/>
                </div>
                <div className='contact-info-div align'>
                    <a href="tel:+38763123321" style={{ color: "black" }}>
                    <div className='align-div'>
                        <PiPhoneBold className='icon phone'/>
                        <div>+387 63 330 814</div>
                    </div>
                    </a>
                    <RiArrowRightLine className='contact-arrow'/>
                </div>
                <div className='contact-info-div align'>
                    <a href="mailto:konobaivinaarka1@gmail.com" style={{ color: "black" }}>
                    <div className='align-div'>
                        <FiMail  className='icon'/>
                        <div>konobaivinaarka1@gmail.com</div>
                    </div>
                    </a>
                    <RiArrowRightLine className='contact-arrow'/>
                </div>
            </div>
        </>
    )   
}

export default ContactInfo