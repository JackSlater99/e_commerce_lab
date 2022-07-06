import React from "react";
import ShopItem from "./ShopItem";
import styled from "styled-components";

const StyledList =styled.ul`
display:flex;
background: #054569;
justify-content: space-evenly;
list-style: none;
color: #ffffff;
`

const ShopList = ({itemList, onItemAdd}) => {
    
    const itemNodes = itemList.map((item, index) => {
        return (
            <ShopItem item={item} key={index} onItemAdd ={onItemAdd}/>
        )
    })
    
    return (
        <>
            <h1>Items</h1>
            <StyledList>
                {itemNodes}
            </StyledList>
        </>
    )
}

export default ShopList