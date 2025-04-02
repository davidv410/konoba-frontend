import { useParams } from "react-router-dom";

const Article = () => {

    const { title } = useParams();
    console.log(title)
    
    return(
        <></>
    )
}

export default Article