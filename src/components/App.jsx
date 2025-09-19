import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

import { useRef, createContext, useState } from 'react'
import Homepage from "./homepage/Homepage"
import Blog from "./blog/Blog"
import Menu from "./menu/Menu"
import Galerija from "./galerija/Galerija"
import BookATable from "./bookatable/BookATable"
import Contact from "./contact/Contact"
import Footer from "./footer/Footer"
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  const blogRef = useRef(null)
  const menuRef = useRef(null)
  const galerijaRef = useRef(null)
  const bookATableRef = useRef(null)
  const contactRef = useRef(null)

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
      <div className="container">
          <Homepage menuScrollToFunc={menuScrollToFunc} blogRef={blogRef} menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef}/>
          <Blog ref={blogRef}/>
          <Menu ref={menuRef}/>
          <Galerija ref={galerijaRef}/>
          <BookATable ref={bookATableRef}/>
          <Contact ref={contactRef}/>
          <Footer menuScrollToFunc={menuScrollToFunc} blogRef={blogRef} menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef}/>
      </div>
    </>
  )
}

export default App
