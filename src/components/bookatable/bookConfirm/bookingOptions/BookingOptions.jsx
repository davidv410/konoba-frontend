import { useState } from 'react'
import './BookingOptions.css'

const BookingOptions = ({ backendRoute, data, refetch}) => {

    const [popUp, setPopUp] = useState(false)
    const [popUpType, setPopUpType] = useState()
    const [userBooking, setUserBooking] = useState()

    const reservationFunction = (id, type) => {
        setPopUp(true)
        setPopUpType(type)
        setUserBooking(id)

    }

    const openArticle = (title) => {
       let titleUpdate = title.replace(/\s+/g, '-')
       navigate(`/blog/${titleUpdate}`)
    }

    const confirmDecision = () => {
        if(popUpType === 'accept'){
            postDecisionToBackend(userBooking, 'insert')
        }

        if(popUpType === 'deny'){
            postDecisionToBackend(userBooking, 'delete')
        }
    }

    const denyDecision = () => {
        if(popUpType === 'accept'){
            setPopUp(false)
            setPopUpType(null)
            setUserBooking(null)
        }

        if(popUpType === 'deny'){
            setPopUp(false)
            setPopUpType(null)
            setUserBooking(null)
        }
    }

    const postDecisionToBackend = async (id, decision) => {
        try{
            const sendData = await fetch (`${import.meta.env.VITE_API_URL}/book-table-confirm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, decision }) 
                })
            if(sendData.ok){
                const data = await sendData.json()
                console.log('RESPONSE:', data);
                setPopUp(false)
                setPopUpType(null)
                setUserBooking(null)
                refetch()
            }else{
                throw new Error('Failed to send data'); 
            }
        } catch {

        }
    }

    const removeReservation = async (id) => {
        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/book-table-list/${id}`, {
                method: 'DELETE'
            })
            if(sendData.ok){
                const data = await sendData.json()
                console.log('RESPONSE:', data);
                refetch()
            }else{
                const error = await sendData.json()
                setErrors({ general: error.message || 'Server error' });
            }
        }catch(error){
             setErrors({ general: error.message ||'Došlo je do greške. Molimo pokušajte ponovo.' });
        }
    }

    const removePendingReservation = async (id) => {
        try{
            const sendData = await fetch(`${import.meta.env.VITE_API_URL}/book-table-confirm/${id}`, {
                method: 'DELETE'
            })
            if(sendData.ok){
                const data = await sendData.json()
                console.log('RESPONSE:', data);
                refetch()
            }else{
                const error = await sendData.json()
                setErrors({ general: error.message || 'Server error' });
            }
        }catch{

        }
    }


    return(
        <>
<div>
        { backendRoute === "book-table-confirm" ? 
            data.map((item) => (
                <div key={item.id} className='booking-application'>
                    <div>Ime: {item.name}</div>
                    <div>Email: {item.email}</div>
                    <div>Broj: {item.phone}</div>
                    <div>Datum: {item.date}</div>
                    <div>Vrijeme: {item.time}</div>
                    <div>Broj ljudi: {item.people}</div>
                    <button className="admin-accept-btn" onClick={() => reservationFunction(item.id, 'accept')}>POTVRDI</button>
                    <button className="admin-deny-btn" onClick={() => reservationFunction(item.id, 'deny')}>ODBIJ</button>
                    <button onClick={() => removePendingReservation(item.id)}>OBRISI</button>
                </div>
            ))
            : null }
        </div>

        <div>
        { backendRoute === "book-table-list" ? 
            data.map((item) => (
                    <div key={item.id} className='booking-application'>
                        <div>Ime: {item.name}</div>
                        <div>Email: {item.email}</div>
                        <div>Broj: {item.phone}</div>
                        <div>Datum: {item.date}</div>
                        <div>Vrijeme: {item.time}</div>
                        <div>Broj ljudi: {item.people}</div>
                        <button onClick={() => removeReservation(item.id)}>OBRISI</button>
                    </div>
            ))
            : null }
        </div>

          <div className={`pop-up ${popUp ? `popUpActive` : null}`}>
            <p className='pop-up-text'>Jeste li sigurni da zelite { popUpType === 'accept' ? <span className='potvrditi'>potvrditi</span> : <span className='odbiti'>odbiti</span> } rezervaciju</p>
            <button onClick={() => confirmDecision()} className="admin-accept-btn">DA</button>
            <button onClick={() => denyDecision()} className="admin-deny-btn">NE</button>
        </div>
        </>
    )
}

export default BookingOptions