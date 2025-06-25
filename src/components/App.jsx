<<<<<<< HEAD
import { useRef, createContext, useState } from 'react'
=======
import { useRef } from 'react'
>>>>>>> 2a13552ab9cacdf6bf9500b9f7c1c46aae6ce6c6
import Homepage from "./homepage/Homepage"
import Blog from "./blog/Blog"
import Menu from "./menu/Menu"
import Galerija from "./galerija/Galerija"
import BookATable from "./bookatable/BookATable"
import Contact from "./contact/Contact"
import Footer from "./footer/Footer"
import './App.css'

<<<<<<< HEAD

function App() {
=======
function App() {

>>>>>>> 2a13552ab9cacdf6bf9500b9f7c1c46aae6ce6c6
  const blogRef = useRef(null)
  const menuRef = useRef(null)
  const galerijaRef = useRef(null)
  const bookATableRef = useRef(null)
  const contactRef = useRef(null)

<<<<<<< HEAD

=======
>>>>>>> 2a13552ab9cacdf6bf9500b9f7c1c46aae6ce6c6
  const menuScrollToFunc = (ref) => {
    if(ref === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const headerHeight = 150;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }
  
  return (
    <>
<<<<<<< HEAD
      <div className="container">
          <Homepage menuScrollToFunc={menuScrollToFunc} blogRef={blogRef} menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef}/>
          <Blog ref={blogRef}/>
          <Menu ref={menuRef}/>
          <Galerija ref={galerijaRef}/>
          <BookATable ref={bookATableRef}/>
          <Contact ref={contactRef}/>
          <Footer menuScrollToFunc={menuScrollToFunc} blogRef={blogRef} menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef}/>
      </div>
=======

      <div className="container">
        <Homepage menuScrollToFunc={menuScrollToFunc} blogRef={blogRef} menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef}/>
        <Blog ref={blogRef}/>
        <Menu ref={menuRef}/>
        <Galerija ref={galerijaRef}/>
        <BookATable ref={bookATableRef}/>
        <Contact ref={contactRef}/>
        <Footer menuScrollToFunc={menuScrollToFunc} blogRef={blogRef} menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef}/>
      </div>

>>>>>>> 2a13552ab9cacdf6bf9500b9f7c1c46aae6ce6c6
    </>
  )
}

export default App
