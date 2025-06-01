import './ContactForm.css'
import { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const ContactForm = () => {

    const [errors, setErrors] = useState()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const formValidation = () => {
        let newErrors = {}

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[0-9\+\-\s]{6,15}$/

        if(!formData.name){newErrors.name = 'Ime je obavezno'}
        if(!emailRegex.test(formData.email)){newErrors.email = 'Unesite valjan email'}
        if(!phoneRegex.test(formData.phone)){newErrors.phone = 'Unesite valjan broj'}
        if(!formData.message){newErrors.message = 'Unesite poruku'}

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return false
        }

        setErrors(null);
        return true
    }

    const [successMessage, setSuccessMessage] = useState("")

    const contactSubmit = async () => {
       try{
           const sendData = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(formData)
            })
            if(sendData.ok){
                const data = await sendData.json()
                setFormData({ name: '', email: '', phone: '', message: '' });
                setSuccessMessage("E-mail uspješno poslan.")
            }else{
                const error = await sendData.json()
                setErrors(error.message || 'Server error'); 
                // setSuccessMessage("NESTO JE POSLO PO ZLU, POKUSAJTE PONOVNO")
            }
       }catch (error){
            setErrors({ general: 'Došlo je do greške. Molimo pokušajte ponovo.' });
       }
    }

    const [openCheckInfo, setOpenCheckInfo] = useState(false)

    const checkInfo = (e) => {
        e.preventDefault()
        if(!formValidation()){
            return
        }

        setOpenCheckInfo(true)
    }

    const odustani = () => {
        setOpenCheckInfo(false)
    }

    const posalji = () => {
        contactSubmit()
        setOpenCheckInfo(false)
    }

     const closeSuccess = () => {
        setSuccessMessage("")
    }

    return(
        <>

            {openCheckInfo ? 
                            <div className="checkInfoDiv">
                                <p className="check-info-p">Provjerite vaše informacije još jedan put.</p>
                                <div className="check-info-info">
                                {Object.entries(formData).map(([key, value]) => (
                                    <p key={key} className="info-p">
                                        {key}: {value}
                                    </p>
                                ))}
                                </div>
                                <button onClick={() => posalji()} className="send-btn">POŠALJI</button>
                                <button onClick={() => odustani()} className="quit-btn">ODUSTANI</button>
                            </div>
            : null}

            { successMessage ? <div className='contact-success-msg'>{successMessage} <p  className="close-success" onClick={() => closeSuccess()}><IoCloseCircleOutline />

</p></div> : null}

            <form action="" className='contact-form' onSubmit={checkInfo} method='POST'>
                <div className='contact-heading-div'><h3>Pošaljite poruku</h3></div>
                <div className='input-div name'>
                    <label htmlFor="name">Ime</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className='contact-form-input' 
                    placeholder='Petar Kovac'
                    value={formData.name}
                    onChange={handleChange}
                    />
                    {errors ? <p className="error-message">{errors.name}</p> : null}
                </div>
                <div className='input-div email'>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    className='contact-form-input' 
                    placeholder='petarkovac@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {errors ? <p className="error-message">{errors.email}</p> : null}
                </div>
                <div className='input-div number'>
                    <label htmlFor="phone">Broj</label>
                    <input 
                    type="text" 
                    id="phone" 
                    name="phone" 
                    className='contact-form-input' 
                    placeholder='+387 63 123 321'
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    {errors ? <p className="error-message">{errors.phone}</p> : null}
                </div>
                <div className='input-div message'>
                    <label htmlFor="message">Poruka</label>
                    <textarea 
                    type="messsage" 
                    id="message" 
                    name="message" 
                    className='message-input' 
                    placeholder='Unesite svoju poruku ovdje...'
                    value={formData.message}
                    onChange={handleChange}
                    />
                    {errors ? <p className="error-message">{errors.message}</p> : null}
                </div>
                <button className='contact-form-button'>POŠALJI PORUKU</button>
            </form>
        </>
    )
}

export default ContactForm