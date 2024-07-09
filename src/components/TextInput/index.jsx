import styled from "styled-components";

const StyledInput = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const SearchIcon = styled.img`
position: absolute;
top: 10px;
right: 10px;
width: 38px;
height: 38px;
`;

const TextInput = ({setFilter}) => {
    return (
        <StyledContainer>
            <StyledInput 
                type="text" 
                onChange={(event) => {setFilter(event.target.value)}} 
                placeholder="What would you like to find?"
            />
            <SearchIcon src="/images/search.png" alt="search-icon" />
        </StyledContainer>
    );
}

export default TextInput;