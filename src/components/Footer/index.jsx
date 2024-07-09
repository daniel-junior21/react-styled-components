import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`;

const ContainerIcon = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`;

const FooterText = styled.p`
    font-size: 16px;
    color: white;
    margin: 0;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <ContainerIcon>
                <li>
                    <a href="#">
                        <img src="/images/social/facebook.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/image/social/twitter.svg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/image/social/instagram.svg" alt="" />
                    </a>
                </li>
            </ContainerIcon>
            <FooterText>Develop by Alura.</FooterText>
        </StyledFooter>
    );
}

export default Footer;