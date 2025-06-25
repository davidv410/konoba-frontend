import useFetch from "../../../../hooks/useFetch"

const Meats = ({ itemID }) => {

    const { data } = useFetch(`${import.meta.env.VITE_API_URL}/menu-item-more`)

    return(
        <>
            {
            data.map(meat => (
                meat.menu_item_id === itemID ? 
                    <p><span>{meat.meat}</span><span>{meat.price}</span></p>
                : null
            ))
            }
        </>
    )
}

export default Meats