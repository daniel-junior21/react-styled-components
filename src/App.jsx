import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import backgroundImage from "./assets/banner.png";
import Gallery from "./components/Gallery";
import images from "./images.json";
import ZoomDialog from "./components/ZoomDialog";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [galleryImages, setGalleryImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('');
  const [tag, setTag] = useState(0);

  const toggleFav = (image) => {
    if(image.id === selectedImage?.id) {
      setSelectedImage({
        ...selectedImage,
        fav: !selectedImage.fav
      })
    }
    setGalleryImages(galleryImages.map(galleryImage => {
      return {
        ...galleryImage,
        fav: galleryImage.id === image.id ? !image.fav : galleryImage.fav
      }
    }))
  }

  useEffect(() => {
    const filteredImages = images.filter(image => {
     const filterByTag = !tag || image.tagId === tag;
     const filterByName = !filter || image.title.toLowerCase().includes(filter.toLowerCase());
     return filterByTag && filterByName
    })
    setGalleryImages(filteredImages);
  }, [filter, tag])

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header
          filter={filter}
          setFilter={setFilter}
        />
        <MainContainer>
          <SideBar />
          <ContentContainer>
            <Banner 
              backgroundImage={backgroundImage} 
              text='The most complete gallery of space photos!'
            />
            <Gallery 
              images={galleryImages}
              selectImage={image => setSelectedImage(image)}
              toggleFav={toggleFav}
              setTag={setTag}
            />
          </ContentContainer>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ZoomDialog 
        image={selectedImage}
        closeZoom={() => setSelectedImage(null)}
        toggleFav={toggleFav}
      />
    </GradientBackground>
  )
}

export default App
