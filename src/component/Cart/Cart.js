import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    // const { shipping } = props.cart;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const totalBeforeTax = total + shipping;
    // const tax = (totalBeforeTax * 10) / 100;
    const tax = (totalBeforeTax * 0.1); // 10% tax . so its use 0.1


    const orderTotal = total + shipping + tax;
    return (
        <div>
            <div className="order-summery">
                <h3>Order Summary</h3>
                <h5>Order Item : {props.cart.length}</h5>
            </div>
            <div className="cart-name">
                <table>
                    <tr><td>Items :</td><td>{total.toFixed(2)} $</td></tr>
                    <tr><td>Shipping & Handling:</td><td>{shipping.toFixed(2)} $</td></tr>
                    <tr><td>Total before tax:</td><td>{totalBeforeTax.toFixed(2)} $</td></tr>
                    <tr><td>Estimated Tax:</td><td>{tax.toFixed(2)} $</td></tr>
                </table>
                <h4>Order Total : {orderTotal.toFixed(2)} $</h4>
            </div>
            <button className="btn-reguler">Review Your Order</button>
        </div>
    );
};

export default Cart;