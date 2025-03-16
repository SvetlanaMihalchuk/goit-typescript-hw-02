import React, { FunctionComponent } from 'react';
import Modal from 'react-modal'
import css from "./ImgeModal.module.css"
import { Image } from '../../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

interface ImageModalProps {
  isOpen: boolean,
  onClose: () => void,
  image?: Image | null
}

const ImageModal: FunctionComponent <ImageModalProps>  = ({ isOpen, onClose, image }) => {
  if (!image) return null;
    return (
      <div>
        <Modal className={css.modal}
          overlayClassName={css.overlay}
              isOpen={isOpen}
                onRequestClose={onClose}
                style={customStyles}
          >
          <img
              className={css.image}
              src={image.urls.regular}
              alt={image.alt_description}
          />
          </Modal>
    </div>
  )
}

export default ImageModal