import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import '../App.css';

const MealComponent = (props) => {

    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <div class="row g-0 img-parent">
                        <div class="col-md-4">
                            <img src={props.imageSource} class="card-img-left rounded-start cropped-img" alt="B8" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{props.mealName}</h5>
                                <p class="card-text">{props.mealDescription}</p>
                                
                                <div class="meal-card-bottom">
                                    <h3 class="price">{props.mealPrice}</h3>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-outline-primary">-</button>
                                        <button type="" class="btn btn-primary disabled">QTY</button>
                                        <button type="button" class="btn btn-outline-primary btn-right-radius">+</button>
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
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    mealName: PropTypes.string.isRequired,
    mealDescription: PropTypes.string.isRequired,
    mealPrice: PropTypes.string.isRequired,
}

export default MealComponent