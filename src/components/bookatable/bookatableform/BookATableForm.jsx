import './BookATableForm.css'
import { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const BookATableForm = () => {


    const [error, setError] = useState(); 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        // if(name === 'date'){
        //     const options = { year: 'numeric', month: 'short', day: 'numeric' };
        //     const dateFormat = new Date(value).toLocaleDateString('en-US', options);
        //     setFormData(prev => ({...prev, [name]: dateFormat}))
        // }else {
        // }
        setFormData(prev => ({...prev, [name]: value}))
    }

    const formValidation = () => {
        let formErrors = {}

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[0-9\+\-\s]{6,15}$/
        
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        let userDate = new Date(formData.date);
        userDate.setHours(0, 0, 0, 0);

        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()

        let currentTime = hours + ':' + minutes 
        let userTime = formData.time

        if(!formData.name){formErrors.name = 'Ime je obavezno'}

        if(!emailRegex.test(formData.email)){formErrors.email = 'Unesite valjan email'}

        if(!phoneRegex.test(formData.phone)){formErrors.phone = 'Unesite valjan broj'}

        if(!formData.date){formErrors.date = 'Datum je obavezan'}
        if(userDate < currentDate){formErrors.date = 'Unesite valjan datum'}

        if(!formData.time){formErrors.time = 'Vrijeme je obavezno'}
        
        if(userDate.getTime() === currentDate.getTime()){
            if(userTime < currentTime){
                formErrors.time = 'Unesite ispravno vrijeme'
            }
        }
        
        if(!formData.people || formData.people === 'izaberi'){formErrors.people = 'Broj ljudi je obavezan'}

        if (Object.keys(formErrors).length > 0) {
            setError(formErrors);
            return false; // Validation failed
        }
    
        setError(null);
        return true; // Validation passed
    }

    const [successMsg, setSuccessMsg] = useState("")

    const bookATableFunc = async (e) => {
        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/book-table`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(formData)
            })
            if(sendData.ok){
                const data = await sendData.json()
                console.log(data)

                setSuccessMsg('Upit za rezervaciju je poslan, potvrdu rezervacije ćete dobiti putem e-maila')
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                    people: ""
                })
            }else{
                const error = await sendData.json()
                setError({ general: error.message || 'Server error' });
            }
        } catch (error) {
            setError({ general: 'Došlo je do greške. Molimo pokušajte ponovo.' });
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
        bookATableFunc()
        setOpenCheckInfo(false)
    }

    const closeSuccess = () => {
        setSuccessMsg("")
    }

    return(
        <>
            {openCheckInfo ?    <div className="checkInfoDiv">
                                <p className="check-info-p">Provjerite vase informacije jos jedan put.</p>
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

         <form className='book-a-table-form' method='POST' onSubmit={checkInfo}>
           
                <div className="input-wrap">
                    <label htmlFor="name">Ime</label>
                    <input 
                    type="text"
                    className="name-input  input"
                    placeholder='Petar Kovač'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}/>
                    {error?.name && <p className="error-message">{error.name}</p>} 
                    {/* OVO IZNAD PRVI PUT VIDIM  */}
                    {/* {OVO ISPODE JE MOJE RIJESENJE} */}
                    {/* {error ? <p className="error-message">{error.name}</p> : null} */}
                </div>

                <div className="input-wrap">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text" 
                    className="email-input input" 
                    placeholder='petarkovac@gmail.com'
                    id='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}/>
                    {error?.email && <p className="error-message">{error.email}</p>} 
                </div>

                <div className="input-wrap">
                    <label htmlFor="phone">Broj</label>
                    <input 
                    type="text" 
                    className="phone-input input" 
                    placeholder='+387 63 249 942'  
                    id='phone'
                    name='phone' 
                    value={formData.phone}
                    onChange={handleChange}/>
                    {error?.phone && <p className="error-message">{error.phone}</p>} 
                </div>
           
                <div className="input-wrap">
                    <label htmlFor="date">Datum</label>
                    <input 
                    type="date" 
                    className="date-input input" 
                    id='date'
                    name="date" 
                    value={formData.date}
                    onChange={handleChange}/>
                    {error?.date && <p className="error-message">{error.date}</p>} 
                </div>

                <div className="input-wrap">
                    <label htmlFor="time">Vrijeme</label>
                    <input 
                        type="time"
                        className="time-input input"
                        id='time'
                        name="time" 
                        value={formData.time}
                        onChange={handleChange}
                        min="09:00"
                        max="22:00"
                    />
                    {error?.time && <p className="error-message">{error.time}</p>} 
                </div>

                <div className="input-wrap">
                    <label htmlFor="people">Broj osoba</label>
                    <select 
                    name="people" 
                    id="people"  
                    className="people-input input" 
                    value={formData.people}
                    onChange={handleChange}>
                    <option value="">izaberi</option>
                    <option value="1">1 osoba</option>
                    <option value="2">2 osobe</option>
                    <option value="3">3 osobe</option>
                    <option value="4">4 osobe</option>
                    <option value="5">5 osoba</option>
                    <option value="6">6 osoba</option>
                    <option value="7">7 osoba</option>
                    </select>
                    {error?.people && <p className="error-message">{error.people}</p>} 
                </div>
            {error?.general && <p className="error-message">{error.general}</p>}
            <button className='submit-button'>POŠALJI UPIT</button>

            { successMsg ? <div className='book-success-msg'>{successMsg} <p className="close-success" onClick={() => closeSuccess()}><IoCloseCircleOutline /></p> </div> : null}
        
        </form>

        </>
    )
}

export default BookATableForm