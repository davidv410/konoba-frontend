import useFetch from "../../../../../hooks/useFetch"
import { useState } from "react"
import "./AddItem.css"

const AddItem = () => {

    const { data } = useFetch(`${import.meta.env.VITE_API_URL}/menus`)
    const { data: subgroupsData } = useFetch(`${import.meta.env.VITE_API_URL}/menus-sg`)

    const [menuItem, setMenuItem] = useState({ name: "", descr:"", price:"", menu_id:"", subgroup_id:"" })
    const [meat, setMeat] = useState({ meat:"", price:"", menu_id:"" })

    const [meatArr, setMeatArr] = useState([])

    const [subgroups, setSubgroups] = useState([])

    const [meatChecked, setMeatChecked] = useState(false)

    const [menuName, setMenuName] = useState("")
    const [subgroupName, setSubgroupName] = useState("")
    const [meatName, setMeatName] = useState("")

    const handleInput = (e) => {
        const { name, value } = e.target
        setMenuItem(prev => ({...prev, [name]: value}))
    }

    const checkIfSubgroup = (e) => {
        const menu = e.target.value
        setMenuName(menu)
        
        const findMenuID = data.filter(item => item.name === menu)

        if (findMenuID.length === 0) {
             setMenuItem(prev => ({ ...prev, menu_id: "", subgroup_id: "" }));
            setMeat(prev => ({ ...prev, menu_id: "" }));
            setSubgroups([]);
            setSubgroupName("");
            return;
        }

        setMenuItem(prev => ({...prev, menu_id: findMenuID[0].id}))
        setMeat(prev => ({...prev, menu_id: findMenuID[0].id}))

        const checkSubgroup = subgroupsData.filter(item => item.menu_id === findMenuID[0].id)
        if(checkSubgroup.length > 0){
            setSubgroups(checkSubgroup)
        }else{
            setSubgroups([])
            setMenuItem(prev => ({...prev, subgroup_id: ""}))
        }
    }

    const chooseSubgroup = (e) => {
        const subgroup = e.target.value
        setSubgroupName(subgroup)
        const findSubgroupID = subgroupsData.filter(item => item.name === subgroup)
        setMenuItem(prev => ({...prev, subgroup_id: findSubgroupID[0].id}))
    }

    const handleMeat = (e) => {
        const checked = e.target.checked
        if(checked){
            setMeatChecked(true)
            setMenuItem(prev => ({...prev, price: ""}))
        }else{
            setMeatChecked(false)
            setMeatErrors({})
        }
    }

    const handleMeatInputs = (e) => {
        const {name, value} = e.target
        if (name === "meat") {
            setMeatName(value)
        }
        setMeat(prev => ({...prev, [name]: value}))
    }

    const [meatErrors, setMeatErrors] = useState({})

    const addMeat = () => {

        setFormErrors({})
        const errors = {};

        if (meatChecked) {
            if (!meat.menu_id) errors.menu_id = "Meni prazan";
            if (!meat.meat) errors.meat = "Unesi meso";
            if (!meat.price) errors.price = "Unesi cijenu mesa";
            if(meat.meat === '') errors.meat = "Unesi meso";

            setMeatErrors(errors);

            if (Object.keys(errors).length > 0) {
                return;
            }
        }

        // Use a local copy to avoid stale state
        const currentMeat = { ...meat };

        setMeatArr(prev => ([...prev, currentMeat]));
        setMeat(prev => ({ ...prev, meat: "", price: "" }));
        setMeatName("");
    }

    const [formErrors, setFormErrors] = useState({})

    const submitBtn = async () => {
        try {
            const errors = {}

            if(!menuItem.name){errors.name = "Ime prazno"}
            // if(!menuItem.descr){errors.descr = "Opis prazno"}
            if(!menuItem.menu_id){errors.menu = "Meni prazno"}
    
            if(subgroups.length > 0){
                if(!menuItem.subgroup_id){ errors.subgroup = "Subgroup prazno" }
            }
    
            if(meatChecked){
                if(meatArr.length < 1){
                    errors.meat_arr = "Dodajte meso"
                }
            }else{
                if(!menuItem.price){errors.menu_price = "Cijena prazno"}
            }
    
            if (Object.keys(errors).length > 0) {
                setFormErrors(errors)
                return
            }

                const sendData = await fetch(`${import.meta.env.VITE_API_URL}/menu-items`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        menuItem,
                        meatArr
                    })
                })

                if(sendData.ok){
                    const response = await sendData.json()

                    console.log(response)
                    console.log(menuItem)
                    console.log(meatArr)

                    setMenuItem({ name: "", descr:"", price:"", menu_id:"", subgroup_id:"" })
                    setMeat({ meat:"", price:"", menu_id:"" })
                    setSubgroups([])
                    setMeatArr([])
                    setMenuName("")
                    setSubgroupName("")
                    setMeatName("")
                    setFormErrors({})
                    setMeatErrors({})
                }else{
                    const error = await sendData.json()
                    console.log(error)
                }
        }catch{

        }

            
    }

    return(
        <>
        <section className="add-item-section">
            <div className="add-item-form-wrap">
                <div >
                    <div className="add-item-input-div">
                        <input className="add-item-input" type="text" placeholder="Ime"  name="name"  value={menuItem.name}  onChange={handleInput}/>
                        <p className="error">{formErrors.name}</p>
                    </div>
                    <div className="add-item-input-div">
                        <input className="add-item-input" type="text" placeholder="Cijena" name="price" value={menuItem.price}  onChange={handleInput} disabled={`${meatChecked ? 'disabled' : ''}`}/>
                        <p className="error">{formErrors.menu_price}</p>
                    </div>
                    <div className="add-item-input-div">
                        <input className="add-item-input" type="text" placeholder="Opis" name="descr" value={menuItem.descr}  onChange={handleInput}/>
                        <p className="error">{formErrors.descr}</p>
                    </div>
                </div>  

                <div>

                    <div>
                        <select value={menuName} onChange={checkIfSubgroup} className="add-item-input select">
                            <option value="">meni</option>
                            {
                                data.map(item => (
                                    <option>{item.name}</option>
                                ))
                            }
                        </select>
                        <p className="error">{formErrors.menu}</p>
                    </div>

                    <div>
                        {
                            subgroups.length > 0 ? 
                                <select value={subgroupName} onChange={chooseSubgroup} className="add-item-input select">
                                    <option value="">podgrupa</option>
                                        {
                                            subgroups.map(item => (
                                                <option>{item.name}</option>
                                            ))
                                        }
                                </select>
                            : null
                        }
                        <p className="error">{formErrors.subgroup}</p>
                    </div>
                </div>

                <div className="checkbox-div">
                    <span className="checkbox-text">više vrsta mesa</span><input type="checkbox" name="" id="" onClick={handleMeat} className="checkbox"/>
                </div>

                { meatChecked ? 
                    <div>
                        <div>
                            <select name="meat" id="" value={meatName} onChange={handleMeatInputs} className="add-item-input select">
                                <option value="">meat</option>
                                <option>Svinjetina</option>
                                <option>Teletina</option>
                                <option>Piletina</option>
                            </select>
                        </div>
                        <div>
                            <input className="add-item-input" type="text" placeholder="price" name="price" value={meat.price} onChange={handleMeatInputs}/>
                        </div>
                        <button onClick={addMeat} className="add-btn meat-btn">Dodaj meso</button>
                    </div>
                    : null
                }

                {
                    meatArr.length > 0 ?
                        meatArr.map(item => (
                            <div className="meat-list-div">
                                <span>- {item.meat}</span>
                                <span>    {item.price} KM</span>
                            </div>
                        ))
                    : null
                }
                 <div>
                    <p className="error">{meatErrors.meat}</p>
                    <p className="error">{meatErrors.menu_id}</p>
                    <p className="error">{meatErrors.price}</p>
                </div>
                <div>
                    <p className="error">{formErrors.meat}</p>
                    <p className="error">{formErrors.meat_price}</p>
                </div>
                <div>
                    <p className="error">{formErrors.meat_arr}</p>
                </div>

                <button onClick={submitBtn} className="add-btn">DODAJ</button>

            </div>
        </section>
        </>
    )
}

export default AddItem