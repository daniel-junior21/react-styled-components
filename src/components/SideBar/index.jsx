import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const SideBar = () => {
    return(
        <aside>
            <nav>
                <StyledList>
                    <NavItem 
                        active={true}
                        activeIcon="/icons/home.png"
                        inactiveIcon="/icons/home-inactive.png"
                    >
                        Home
                    </NavItem>
                    <NavItem 
                        activeIcon="/icons/most-viewed.png"
                        inactiveIcon="/icons/most-viewed-inactive.png"
                    >
                        Most Viewed
                    </NavItem>
                    {/* <NavItem>
                        <StyledLink href="">Most Liked</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink href="">Recents</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink href="">Surprise me</StyledLink>
                    </NavItem> */}
                </StyledList>
            </nav>
        </aside>
    );
}

export default SideBar;