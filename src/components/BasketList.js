import React, {useState} from "react";
import BasketItem from "./BasketItem";
import DiscountForm from "./DiscountForm";

const BasketList = ({basketList}) => {

    const [discount, setDiscount] = useState()

    const basketNodes = basketList.map((item, index) => {
        return (<BasketItem name={item.name} price={item.price} key={index}/>)
    })

    const initialTotal = basketList.reduce((runningTotal, item) => {
        return runningTotal + item.price
    }, 0);

    const finalTotal = () => {
        console.log(discount, initialTotal);
        if (discount === "CODE10") {
            return (initialTotal * 0.9)
        } else if (discount === "CODE20") {
            return (initialTotal * 0.8)
        } else {
            return initialTotal
        }
    }
    
    const addDiscount = (submittedDiscount) => {
        setDiscount(submittedDiscount)
    }

    return (
        <>
            <h1>Basket</h1>
            {basketNodes}
            <p>Total before discount:</p>
            <p>£{initialTotal}</p>
            <p>Total with discount:</p>
            <p>£{finalTotal()}</p>
            <DiscountForm onDiscountSubmit={(code) => addDiscount(code)}/>
        </>
    )
}

export default BasketList