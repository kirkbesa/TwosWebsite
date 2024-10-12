import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Menu.css';
import R1 from '../images/R1.jpg';
import MealComponent from '../MealComponent.js';

const MenuRiceMeals = () => {

    return (
        <div>

            <div className="row row-cols-1 row-cols-md-2 g-4">

                <MealComponent 
                    imageSource={R1} 
                    mealName="Chicken Rice" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱200"
                />

            </div>
        
        </div>
    );
}
export default MenuRiceMeals