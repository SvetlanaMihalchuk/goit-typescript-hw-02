import { useEffect, useState } from 'react'
import './App.css'
import { fetchPictures } from './services/api'
import ImageGallery from './ImageGallery/ImageGallery'
import SearchBar from './SearchBar/SearchBar'
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import ImageModal from './ImageModal/ImageModal'
import { Image } from '../types'

const App = () => {
  const [pictures, setPictures] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
      const allImages = await fetchPictures(query, page, perPage);
      setPictures(prev => [...prev, ...allImages]);
      }
      catch { 
        setIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page, perPage]);
  
  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
    
  }


  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />
      {pictures.length > 0 && <ImageGallery pictures={pictures} onImageClick={openModal} />}
      {isLoading && <Loader/>}
      {isError && <ErrorMessage/>}
      {pictures.length > 0 && !isLoading && (<LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />)}
    <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={selectedImage}/>
    </>
  );
  }

export default App
