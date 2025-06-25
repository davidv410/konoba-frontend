import useFetch from "../../../../hooks/useFetch"
import Items from "./Items"
import './menuOptions.css'

const Subgroups = ({ menuID }) => {

    const { data } = useFetch(`${import.meta.env.VITE_API_URL}/menus-sg`)

    const filter = data.filter(subgroup => subgroup.menu_id === menuID)


    return(
        <>
        
        <div className="menu-blocks">
            {filter.map(subgroup => (
                <div>
                    <div className="subgroup-titles">{subgroup.name}</div>
                    <Items menuID={menuID} subgroupID={subgroup.id}/>
                </div>
            ))}
        </div>

        <Items menuID={menuID}/>

        </>
    )
}

export default Subgroups