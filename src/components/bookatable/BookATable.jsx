import './BookATable.css'
import BookATableForm from './bookatableform/BookATableForm'
import SectionDivide from '../sectiondivide/SectionDivide'
import { forwardRef } from 'react'

const BookATable = forwardRef((props, ref) => {
    return(
        <>
            <SectionDivide/>
            
            <section className="book-a-table-container-wrap" ref={ref}>

                <div className="book-a-table-container">
                    <div className='book-a-table-head'>
                        <h2>REZERVIRAJ STOL</h2>
                        <h3 className='book-little-title'>Osigurajte svoj stol unaprijed <br/> i uživajte bez brige.</h3>
                    </div>

                    <BookATableForm/>
                   
                </div>

            </section>

            <SectionDivide/>
        </>
    )
})

export default BookATable