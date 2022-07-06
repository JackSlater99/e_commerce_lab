import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

const NavList =styled.ul`
display:flex;
background: #ffffff;
justify-content: space-evenly;
list-style: none;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: #054569;
`

const NavBar = () => {

    return(
    <NavList>
        <li>
            <StyledLink to="/">Home</StyledLink>
        </li>
    
        <li>
            <StyledLink to="/basket"> Basket</StyledLink>
        </li>
    </NavList> 
    )
}
export default NavBar;