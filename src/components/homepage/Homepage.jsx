import './Homepage.css'
import Header from './header/Header'
import HomepageContent from './homepage-content/HomepageContent'

const Homepage = ({ menuScrollToFunc, blogRef, menuRef, galerijaRef, bookATableRef, contactRef }) => {
    return(
        <>
            <div className="homepage-container">
                <Header menuScrollToFunc={menuScrollToFunc} blogRef={blogRef}  menuRef={menuRef} galerijaRef={galerijaRef} bookATableRef={bookATableRef} contactRef={contactRef} />
                <HomepageContent menuScrollToFunc={menuScrollToFunc} menuRef={menuRef} bookATableRef={bookATableRef}/>
            </div>
        </>
    )
}

export default Homepage