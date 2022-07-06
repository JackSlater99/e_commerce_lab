import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import BasketList from "../components/BasketList";
import ErrorPage from "../components/ErrorPage";
import NavBar from "../components/NavBar";
import ShopList from "../components/ShopList";
import Checkout from "../components/Checkout";


const Title = styled.h1`
text-align: center;
font-size: 1.5em;
color: #fff;
background-color: #062c43;
margin: 0;
padding: 1em
`
const ShopContainer = () => {
    
    const [itemList, setItemList] = useState([
        {name: "Hat", price: 10},
        {name: "T-Shirt", price: 20},
        {name: "Glasses", price: 15},
        {name: "Jacket", price: 40},
        {name: "Hoodie", price: 25}
    ])
    const [basket, setBasket] = useState([])
    
    const onItemAdd = function(item) {
        const copyBasket = [...basket, item]
        setBasket(copyBasket)
    }
 
    return (
        <>
            <Router>
                <Title>Shop</Title>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ShopList itemList={itemList} onItemAdd={onItemAdd}/>}/>
                    <Route path="/basket" element={<BasketList basketList={basket}/>}/>
                    {/* <Route path="/Checkout" element={<Checkout />}/> */}
                    <Route path ="*"element ={<ErrorPage />}  />             
                </Routes>
            </Router>
        </>
    )
}

export default ShopContainer;