import './MenuItem.css'
import artiklImg from '../../../assets/konobapng.png'
import juhaJedan from'../../../assets/juha1.jpg'
import juhaDva from'../../../assets/juha2.jpg'
import juhaTri from'../../../assets/juha3.jpg'
import juhaCetri from'../../../assets/juha4.jpg'
import { useState, useEffect } from 'react'

const MenuItem = ({ displayThisMenu, setDisplayThisMenu }) => {

    const [menuItems, setMenuItems] = useState([ 
        { foodType: 'Juha', name: 'Juha 1', price: 10, desc: 'Krem juha s itd itd itd', image: juhaJedan },
        { foodType: 'Juha', name: 'Juha 2', price: 12, desc: 'Goveđa juha', image: juhaDva  },
        { foodType: 'Juha', name: 'Juha 3', price:  8, desc: 'Juha od rajcice', image: juhaTri  },
        { foodType: 'Juha', name: 'Juha 4', price: 11, desc: 'Juha od gljiva', image: juhaCetri  },

        { foodType: 'Deserti', name: 'Desert 1', price: 10, desc: 'Banana kolac' },
        { foodType: 'Deserti', name: 'Desert 2', price: 12, desc: 'Lambada' },
        { foodType: 'Deserti', name: 'Desert 3', price:  8, desc: 'Baklava' },
        { foodType: 'Deserti', name: 'Desert 4', price: 11, desc: 'Cupavci' },
     ])


     const [filteredItems, setFilteredItems] = useState([])

    const filterMenuItems = (type) => {
        const filtered = menuItems.filter(item => item.foodType === type)
        setFilteredItems(filtered)
    }

    useEffect(() => {
        if (!displayThisMenu) {
            setDisplayThisMenu(menuItems[0].foodType)
        } else {
            filterMenuItems(displayThisMenu)
        }
    }, [displayThisMenu, menuItems])
   

    return(
        <>

        {
            filteredItems.map(item => (
                <section className="menu-item-container">
                    <div className="menu-item-img-div"><img src={item.image} alt="Menu Item image" className="menu-item-img"/></div>
                    <div className="menu-item-info-div">
                        <div className="menu-item-info-one">
                            <h2 className="menu-item-name">{item.name}</h2>
                            <div className='menu-item-price-div'>
                                <div className='menu-item-price-border'></div>
                                <p className="menu-item-price">${item.price}</p>
                            </div>
                        </div> 
                        <div className="menu-item-info-two">{item.desc}</div>
                    </div>
                </section>
            ))
        }
           
        </>
    )
}

export default MenuItem