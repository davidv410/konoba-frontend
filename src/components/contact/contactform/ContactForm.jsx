import './ContactForm.css'

const ContactForm = () => {
    return(
        <>
            <form action="" className='contact-form'>
                <div className='contact-heading-div'><h3>Posaljite poruku</h3></div>
                <div className='input-div name'>
                    <label htmlFor="">Ime</label>
                    <input type="text" className='contact-form-input' placeholder='Petar Kovac'/>
                </div>
                <div className='input-div email'>
                    <label htmlFor="">Email</label>
                    <input type="text" className='contact-form-input' placeholder='petarkovac@gmail.com'/>
                </div>
                <div className='input-div number'>
                    <label htmlFor="">Broj</label>
                    <input type="text" className='contact-form-input' placeholder='+387 63 123 321'/>
                </div>
                <div className='input-div message'>
                    <label htmlFor="">Poruka</label>
                    <textarea type="messsage" className='message-input' placeholder='Unesite svoju poruku ovdje...'/>
                </div>
                <button className='contact-form-button'>POSALJI PORUKU</button>
            </form>
        </>
    )
}

export default ContactForm