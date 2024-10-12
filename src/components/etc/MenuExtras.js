import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Menu.css';
import '../App.css';
import B8 from '../images/B8.jpg'
import R1 from '../images/R1.jpg'
import P1 from '../images/P1.jpg'
import MealComponent from '../MealComponent.js';

const MenuExtras = () => {

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">

                <MealComponent 
                    imageSource={B8} 
                    mealName="Peanut Butter Burger" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱180"
                />

                <MealComponent 
                    imageSource={R1} 
                    mealName="Chicken Rice" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱200"
                />

                <MealComponent 
                    imageSource={P1} 
                    mealName="Pasta 1" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱220"
                />

            </div>

        </div>
    );
}
export default MenuExtras


