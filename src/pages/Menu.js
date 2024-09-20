import { useState } from "react";
import "../App.css"

const Tabs = () => {
const [toggleState, setToggleState] = useState(1)

const toggleTab = (index) => {
    setToggleState(index)
}

    return (
        <div>
            <div className="menu-container">
                <div className="block-tabs">
                    <button className= {toggleState === 1? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(1)}>Burger</button>
                    <button className= {toggleState === 2? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(2)}>Rice</button>
                    <button className= {toggleState === 3? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(3)}>Lorem</button>
                    <button className= {toggleState === 4? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(4)}>Ipsum</button>
                    <button className= {toggleState === 5? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(5)}>Dolor</button>
                    <button className= {toggleState === 6? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(6)}>Sit</button>
                    <button className= {toggleState === 7? 'tabs active-tabs' : 'tabs'}onClick={()=>toggleTab(7)}>Amet</button>
                </div>

                <div className="content-tabs">
                    <div className={toggleState===1 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Burger 1</li></p>
                        <p><li>Burger 2</li></p>
                        <p><li>Burger 3</li></p>
                        <p><li>Burger 4</li></p>
                        <p><li>Burger 5</li></p>
                    </div>
                    <div className={toggleState===2 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Rice 1</li></p>
                        <p><li>Rice 2</li></p>
                        <p><li>Rice 3</li></p>
                        <p><li>Rice 4</li></p>
                        <p><li>Rice 5</li></p>
                    </div>
                    <div className={toggleState===3 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Lorem 1</li></p>
                        <p><li>Lorem 2</li></p>
                        <p><li>Lorem 3</li></p>
                        <p><li>Lorem 4</li></p>
                        <p><li>Lorem 5</li></p>
                    </div>
                    <div className={toggleState===4 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Ipsum 1</li></p>
                        <p><li>Ipsum 2</li></p>
                        <p><li>Ipsum 3</li></p>
                        <p><li>Ipsum 4</li></p>
                        <p><li>Ipsum 5</li></p>
                    </div>
                    <div className={toggleState===5 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Dolor 1</li></p>
                        <p><li>Dolor 2</li></p>
                        <p><li>Dolor 3</li></p>
                        <p><li>Dolor 4</li></p>
                        <p><li>Dolor 5</li></p>
                    </div>
                    <div className={toggleState===6 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Sit 1</li></p>
                        <p><li>Sit 2</li></p>
                        <p><li>Sit 3</li></p>
                        <p><li>Sit 4</li></p>
                        <p><li>Sit 5</li></p>
                    </div>
                    <div className={toggleState===7 ? 'content active-content': 'content'}>
                        <hr/>
                        <p><li>Amet 1</li></p>
                        <p><li>Amet 2</li></p>
                        <p><li>Amet 3</li></p>
                        <p><li>Amet 4</li></p>
                        <p><li>Amet 5</li></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tabs


