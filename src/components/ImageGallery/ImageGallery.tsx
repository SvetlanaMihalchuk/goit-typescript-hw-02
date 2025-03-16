import React, { FunctionComponent } from "react"
import { Image } from "../../types"
import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

interface ImageGalleryProps {
    pictures: Image[],
    onImageClick: (image: Image) => void,
}

const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ pictures, onImageClick }) => {
    return (
        <ul className={css.list}>
            {pictures.map((image) => (
                <li className={css.item} key={image.id} > 
                    <ImageCard {...image} image={image} onClick={() => onImageClick(image)}/>
                </li>
          ))}
            </ul> 
  )
}

export default ImageGallery