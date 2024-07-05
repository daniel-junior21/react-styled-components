import styled from "styled-components"
import IconButton from "../../IconButton";

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Image = ({image, maximized = false, zoomImage, toggleFav}) => {
    let favIcon = '/icons/fav.png';
    if (image.fav) {
        favIcon = '/icons/fav-active.png';
    }

    return (
        <Figure $maximized={maximized} id={`image-${image.id}`}>
        <img src={image.path} alt={image.alt} />
        <figcaption>
            <h3>{image.title}</h3>
            <Footer>
                <h4>{image.source}</h4>
                <IconButton onClick={() => toggleFav(image)}>
                    <img src={favIcon} alt="Fav icon" />
                </IconButton>
                {!maximized && <IconButton aria-hidden={maximized} onClick={() => zoomImage(image)}>
                    <img src="/icons/maximized.png" alt="Expand Icon" />
                </IconButton>}
            </Footer>
        </figcaption>
    </Figure>
    )
}

export default Image;