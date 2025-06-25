import './Contact.css'
import ContactForm from './contactform/ContactForm'
import ContactInfo from './contactinfo/ContactInfo'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
    return(
        <>
            <section className="contact-section" ref={ref}>
                <div className='contact-title'>
                    <h2>KONTAKT</h2>
                    <h3 className='contact-little-title'>Imate pitanja ili poseban zahtjev?</h3>
                </div>

                <div className='contact-content-wrap'>
                    <div className='contact-form-wrap'>
                        <ContactForm/>
                    </div>
                    <div className='contact-info-wrap'>
                        <ContactInfo/>
                    </div>
                </div>
            </section>
            <SectionDivide/>
        </>
    )   
})

export default Contact