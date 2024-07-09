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

const ImageSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const Gallery = ({images = [], selectImage, toggleFav, setTag}) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GalleryContainer>
                <GallerySection>
                    <Title>Browse the gallery</Title>
                    <ImageSection>
                        {images.map(image => 
                            <Image 
                                zoomImage={selectImage}
                                toggleFav={toggleFav}
                                key={image.id} 
                                image={image} 
                            />
                        )}
                    </ImageSection>
                </GallerySection>
                <Popular />
            </GalleryContainer>
        </>
    );
}

export default Gallery;