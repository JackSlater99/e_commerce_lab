import React from "react";

const ShopItem = ({item, onItemAdd}) => {
    
    const handleClick = () => {
        onItemAdd(item)
    }

    return (
        <>
            <h2>{item.name}</h2>
            <h4>£{item.price}</h4>
            <button onClick={handleClick}>Add to Basket</button>
        </>
    )
}

export default ShopItem