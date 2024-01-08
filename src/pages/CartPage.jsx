import React from 'react';
import {useSelector} from "react-redux";


function CartPage(props) {
    const {products} = useSelector(state => state.cartReducer)

    return (
        <div>
            {products?.map((item, index) => (
                <div key={index}>
                    <img src={item.images[0]} alt="image" />
                    <p>{item.brand}</p>
                    <p>{item.price}$</p>
                </div>
            ))}
        </div>
    );
}

export default CartPage;