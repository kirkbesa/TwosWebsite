import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import P1 from '../images/P1.jpg';
import MealComponent from './MealComponent.js';

const MenuPasta = () => {

    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4">

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
export default MenuPasta


