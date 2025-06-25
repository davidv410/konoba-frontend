import Galerija from '../../../galerija/Galerija'
import { useState } from 'react'
import "./GalleryOptions.css"

const GalleryOptions = ({ backendRoute, data, refetch }) => {

    const removeImage = async (id) => {
        try{
            const removeImage = await fetch(`${import.meta.env.VITE_API_URL}/gallery-route/${id}`, {
                method: 'DELETE'
            })
            if(removeImage.ok){
                const response = await removeImage.json()
                console.log(response)
            }else{
                const error = await removeImage.json()
                console.log(error)
            }
        }catch{

        }
    }

    const [galleryImageAdd, setGalleryImageAdd] = useState()
    
    const handleImage = (e) => {
        const { name, type, files } = e.target
        if(type === 'file'){
            setGalleryImageAdd(files[0])
        }
    }

    const addImage = async () => {

        const imageForm = new FormData()
        imageForm.append('image', galleryImageAdd)

        try{
            const uploadImage = await fetch(`${import.meta.env.VITE_API_URL}/gallery-route`, {
                method: 'POST',
                body: imageForm
            })
            if(uploadImage.ok){
                const response = await uploadImage.json()
                console.log(response)
            }else{
                const error = await uploadImage.json()
                console.log(error)
            }
        }catch (error){

        }
            
    }

    return(
         <>
          <div>
            { backendRoute === "gallery-route" ? 
                <div style={{ margin: "20px 5px" }}>
                    <div className='image-cont-wrap'>
                    {
                        data.map((item) => (
                                <div key={item.id} className='image-cont'>
                                    <img src={`${item.image_path}`} alt="" className="image"/>
                                    <button onClick={() => removeImage(item.id)} className='delete-img-btn'>IZBRISI</button>
                                </div>
                        ))
                    }
                    </div>
                    <div>
                        <input name="image" type="file" onChange={handleImage}/>
                        <button onClick={() => addImage()}>DODAJ SLIKU</button>
                    </div>
                </div>

                : null }
            </div>

         </>
    )
}

export default GalleryOptions