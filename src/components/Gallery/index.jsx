import styled from "styled-components";
import Title from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";

const GalleryContainer = styled.div`
    display: flex;
`;

const GallerySection = styled.section`
    flex-grow: 1;
`;

const Gallery = ({images = [], selectImage, toggleFav}) => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <GallerySection>
                    <Title>Browse the gallery</Title>
                    {images.map(image => 
                        <Image 
                            zoomImage={selectImage}
                            toggleFav={toggleFav}
                            key={image.id} 
                            image={image} 
                        />
                    )}
                </GallerySection>
                <Popular />
            </GalleryContainer>
        </>
    );
}

export default Gallery;