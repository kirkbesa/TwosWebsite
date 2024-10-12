import React, { useState }from 'react';
import ProductItem from './ProductItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Menu.css';
import '../App.css';

const ProductList = ({ products, updateCart }) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {products.map(product => (
                <ProductItem key={product.id} product={product} updateCart={updateCart}/>
            ))}
        </div>
    );
}

export default ProductList;