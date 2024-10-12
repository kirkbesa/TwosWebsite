import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Menu.css';
import '../App.css';

const MealComponent = (props) => {

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <div className="row g-0 img-parent">
                        <div className="col-md-4">
                            <img src={props.imageSource} className="card-img-left rounded-start cropped-img" alt="B8" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.mealName}</h5>
                                <p className="card-text">{props.mealDescription}</p>      
                                <div className="meal-card-bottom">
                                    <h3 className="price">{props.mealPrice}</h3>
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-outline-primary">-</button>
                                        <button type="" className="btn btn-primary disabled">QTY</button>
                                        <button type="button" className="btn btn-outline-primary btn-right-radius">+</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

MealComponent.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    mealName: PropTypes.string,
    mealDescription: PropTypes.string,
    mealPrice: PropTypes.string,
}

export default MealComponent