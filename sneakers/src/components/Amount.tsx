import React, { useRef, useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Amount = () => {
    const [counter, setCounter] = useState(0);

    function decrementItem() {
        if (counter === 0) {
            return;
        }
        setCounter(counter - 1);
    }

    function addItemsToCart()
    {
        console.log("add items to cart function");
    }

    return (
        <div className='amount'>
            <div className='amount-clicker'>
                <button className='amount-button button-left' onClick={() => decrementItem()}>-</button>
                <button className='amount-button' >{counter}</button>
                <button className='amount-button button-right' onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <button 
            onClick={() => addItemsToCart()}
            className='cart-button'>
                <ShoppingCartOutlinedIcon
                    className='icon-cart-small' />
                <span>Add to cart</span>
            </button>
        </div>
    )
}
