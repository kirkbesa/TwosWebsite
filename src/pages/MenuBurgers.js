import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import '../App.css';
import B8 from '../images/B8.jpg';
import MealComponent from './MealComponent.js';

const MenuBurgers = () => {

    return (
        <div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <MealComponent 
                    imageSource={B8} 
                    mealName="Peanut Butter Burger" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱180"
                />

                <MealComponent 
                    imageSource={B8} 
                    mealName="Peanut Butter Burger" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱180"
                />

                <MealComponent 
                    imageSource={B8} 
                    mealName="Peanut Butter Burger" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱180"
                />

                <MealComponent 
                    imageSource={B8} 
                    mealName="Peanut Butter Burger" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱180"
                />

                <MealComponent 
                    imageSource={B8} 
                    mealName="Peanut Butter Burger" 
                    mealDescription="This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    mealPrice="₱180"
                />

            </div>
                
        </div>
    );
}
export default MenuBurgers


