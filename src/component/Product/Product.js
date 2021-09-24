import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="products-details">
                <h4 className="product-name">{name}</h4>
                <p><small>By : {seller}</small></p>
                <p>Price : {price}$</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-reguler">{cartIcon} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;