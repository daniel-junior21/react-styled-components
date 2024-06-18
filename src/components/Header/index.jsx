import styled from "styled-components";
import TextInput from "../TextInput";

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src="/images/brand.png" alt=""/>
            <TextInput />
        </StyledHeader>
    );
}

export default Header;