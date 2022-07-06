import React, {useState} from "react";

const DiscountForm = ({onDiscountSubmit}) => {

    const [discountCode, setDiscountCode] = useState("")

    const handleCodeChange = (event) => {
        setDiscountCode(event.target.value)
    }

    const handleDiscountSubmit = (event) => {
        event.preventDefault();
        const discountToSubmit = discountCode.trim();
        if (!discountToSubmit){
            return
        }
        onDiscountSubmit(discountToSubmit);
    }

    return (
        <form onSubmit={handleDiscountSubmit}>
            <input 
                type="text"
                placeholder="Discount Code"
                value={discountCode}
                onChange={handleCodeChange}
            />
            <input 
            type="submit"
            value="Submit"
            />
        </form>
    )
}

export default DiscountForm