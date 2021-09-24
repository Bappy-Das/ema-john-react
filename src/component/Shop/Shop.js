import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className="shop-container">
            <div className="item-name">

                <a href="/">All Products</a>

            </div>
            <div className="product-show">
                {/* <h3>Show Product: {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="product-cart">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;