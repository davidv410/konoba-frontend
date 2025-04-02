import './BookATableForm.css'

const BookATableForm = () => {
    return(
        <>
         <form className='book-a-table-form'>
           
                <div className="input-wrap">
                    <label htmlFor="">Ime</label>
                    <input type="text" className="name-input  input" placeholder='Ime'/>
                </div>
                <div className="input-wrap">
                    <label htmlFor="">Email</label>
                    <input type="text" className="email-input input" placeholder='Email'/>
                </div>
                <div className="input-wrap">
                    <label htmlFor="">Broj</label>
                    <input type="text" className="phone-input input" placeholder='Broj'/>
                </div>
           
                <div className="input-wrap">
                    <label htmlFor="">Datum</label>
                    <input type="date" className="date-input input"/>
                </div>

                <div className="input-wrap">
                    <label htmlFor="">Vrijeme</label>
                    <input type="time" className="time-input input"/>
                </div>

                <div className="input-wrap">
                    <label htmlFor="">Broj osoba</label>
                    <select name="" id=""  className="people-input input">
                        <option value="">1 osoba</option>
                        <option value="">2 osoba</option>
                        <option value="">3 osoba</option>
                        <option value="">4 osoba</option>
                        <option value="">5 osoba</option>
                        <option value="">6 osoba</option>
                        <option value="">7 osoba</option>
                    </select>
                </div>

            <button className='submit-button'>POŠALJI UPIT</button>
        </form>

        </>
    )
}

export default BookATableForm