import React, { FunctionComponent } from "react";
import css from "./ImageCard.module.css"
import { Image } from "../../types";

interface ImageCardProps {
  image: Image,
  onClick: () => void
}

const ImageCard: FunctionComponent<ImageCardProps> = ({ image, onClick }) => {
  return (
      <div className={css.container} onClick={onClick}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
          />
      </div>
  )
}

export default ImageCard