import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'
import MenuBurgers from './MenuBurgers.js';
import MenuPasta from './MenuPasta.js';
import MenuRiceMeals from './MenuPasta.js';

const Menu = () => {
    return (
        <div>
            <div className="card text-center" style={{ width: "65%", margin: "0" }}>
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item item ">
                            <Link  className="nav-link" to="/Menu/MenuBurgers">Burgers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#" >Rice Meals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/MenuHotdogs" >Pasta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#" >Drinks and Sides</Link>
                        </li>
                    </ul>
                </div>
                    <div className="card-body">
                        <Routes>
                            <Route exact path="/Menu/MenuBurgers" element={<MenuBurgers />} />
                            <Route exact path="/MenuBurgers" element={<MenuRiceMeals />} /> 
                            <Route exact path="/MenuHotdogs" element={<MenuPasta />} />
                        </Routes>
                    </div>
                </div>
        </div>
    );
}
export default Menu


