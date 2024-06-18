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
                    <NavItem
                        activeIcon="/icons/most-liked.png"
                        inactiveIcon="/icons/most-liked-inactive.png"
                    >
                        Most Liked
                    </NavItem>
                    <NavItem
                        activeIcon="/icons/recents.png"
                        inactiveIcon="/icons/recents-inactive.png"
                    >
                        Recents
                    </NavItem>
                    <NavItem
                        activeIcon="/icons/surprise-me.png"
                        inactiveIcon="/icons/surprise-me-inactive.png"
                    >
                        Surprise me
                    </NavItem>
                </StyledList>
            </nav>
        </aside>
    );
}

export default SideBar;