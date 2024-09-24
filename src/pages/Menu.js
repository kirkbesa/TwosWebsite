import { useState } from "react";
import "../App.css"
import "./Menu.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBurgers from './MenuBurgers.js';
import MenuRiceMeals from './MenuRiceMeals.js';
import MenuPasta from './MenuPasta.js';
import MenuExtras from './MenuExtras.js';

const Tabs = () => {
const [toggleState, setToggleState] = useState(1)

const toggleTab = (index) => {
    setToggleState(index)
}

    return (
        <div>
            <div className="menu-container">
                <div className="block-tabs">
                    <button className= {toggleState === 1? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(1)}>Burgers</button>
                    <button className= {toggleState === 2? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(2)}>Rice Meals</button>
                    <button className= {toggleState === 3? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(3)}>Pasta</button>
                    <button className= {toggleState === 4? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(4)}>Extras</button>
                </div>
                <hr/>
                <div className="content-tabs scrollable-container">
                    <div className={toggleState===1 ? 'content active-content': 'content'}>
                        <MenuBurgers />
                    </div>

                    <div className={toggleState===2 ? 'content active-content': 'content'}>
                        <MenuRiceMeals />
                    </div>

                    <div className={toggleState===3 ? 'content active-content': 'content'}>
                        <MenuPasta />
                    </div>

                    <div className={toggleState===4 ? 'content active-content': 'content'}>
                        <MenuExtras />
                    </div>
                </div>
            </div>

            <div className="price-container">

            </div>

        </div>
    );
}
export default Tabs;