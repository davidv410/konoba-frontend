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
                    <div className='align-div-exepction'>
                        <LuMapPin className='location-icon icon'/>
                        <div>Rapovine (magistralni put Livno-Split), Livno</div>
                   </div>
                   <RiArrowRightLine className='contact-arrow'/>
                </div>
                <div className='contact-info-div align'>
                    <div className='align-div'>
                        <PiClockBold className='icon'/>
                        <div>Pon-Ned: 09:00 – 00:00</div>
                    </div>
                    <RiArrowRightLine className='contact-arrow'/>
                </div>
                <div className='contact-info-div align'>
                    <div className='align-div'>
                        <PiPhoneBold className='icon phone'/>
                        <div>+387 63 123 321</div>
                    </div>
                    <RiArrowRightLine className='contact-arrow'/>
                </div>
                <div className='contact-info-div align'>
                    <div className='align-div'>
                        <FiMail  className='icon'/>
                        <div>konoba@gmail.com</div>
                    </div>
                    <RiArrowRightLine className='contact-arrow'/>
                </div>
            </div>
        </>
    )   
}

export default ContactInfo