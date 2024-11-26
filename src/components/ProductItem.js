import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Menu.css';
import '../App.css';
import { AuthContext } from '../context/authContext';

const ProductItem = ({product, updateCart}) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <div className="row g-0 img-parent">
                        <div className="col-md-4">
                            <img src={`../images/${product.imageUrl}`} className="card-img-left rounded-start cropped-img" alt={`${product.image}`} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>      
                                <div className="meal-card-bottom">
                                    <h3 className="price">Php {product.price}</h3>
                                    { isAuthenticated ?
                                    <>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-primary" onClick={() => updateCart(product, 'remove')}>-</button>
                                        <button type="" className="btn btn-primary disabled">QTY</button>
                                        <button type="button" className="btn btn-outline-primary btn-right-radius" onClick={() => updateCart(product, 'add')}>+</button>
                                    </div>
                                    </>
                                    :
                                    <>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;