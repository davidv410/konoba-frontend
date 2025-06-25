import useFetch from "../../../../hooks/useFetch"
import Meats from "./Meats"
import './menuOptions.css'

const Items = ({ menuID, subgroupID }) => {

    const { data } = useFetch(`${import.meta.env.VITE_API_URL}/menu-items`)

    const firstFilter = data.filter(item => item.subgroup_id)
    const secondFilter = data.filter(item => !item.subgroup_id)


     const removeItem = async (id) => {
        try{
            const removeItem = await fetch(`${import.meta.env.VITE_API_URL}/menu-items/${id}`, {
                method: 'DELETE'
            })
            if(removeItem.ok){
                const response = await removeItem.json()
                console.log(response)
            }else{
                const error = await removeItem.json()
                console.log(error)
            }
        }catch{

        }
    }

    return(
        <>
        {
          firstFilter.map(item => (
                item.subgroup_id === subgroupID ?
                <div className="item-wrap">
                    <p><span>{item.name}</span><span>{item.price}</span></p> 
                    <button className="delete-btn" onClick={() => removeItem(item.id)}>DEL</button>
                </div>
                : null
          ))
        }

        {
          secondFilter.map(item => (
                item.menu_id === menuID ?
                    <div className="item-wrap">
                        <p><span>{item.name}</span><span>{item.price}</span></p> 
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {
                            !item.price ? 
                            <div>
                                <Meats itemID={item.id}/>
                            </div>
                            : null
                        }
                        <button className="delete-btn" onClick={() => removeItem(item.id)}>DEL</button>
                        </div>
                    </div>
                : null
          ))
        }

        </>
    )
}

export default Items