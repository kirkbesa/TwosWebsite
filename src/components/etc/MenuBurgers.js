import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Menu.css';
import '../App.css';
import B8 from '../images/B8.jpg';
import MealComponent from './MealComponent.js';

const MenuBurgers = () => {

    return (
        <div>
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
    );
}
export default MenuBurgers


