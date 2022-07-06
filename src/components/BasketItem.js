import React from "react";

const BasketItem = ({name, price}) => {
    return (
        <>
            <h2>{name}</h2>
            <h4>£{price}</h4>
        </>
    )
}

export default BasketItem