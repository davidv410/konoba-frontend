import useFetch from "../../../../hooks/useFetch"
import Menus from "./Menus"

const MenuOptions = ({ backendRoute, menu }) => {
    return(
        <>
            <div style={{ display: "", width: "fit-content", whiteSpace: "nowrap", flexWrap: "wrap" }}>
                <Menus backendRoute={backendRoute} menu={menu}/>
            </div>
        </>
    )
}

export default MenuOptions