import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './NavigationBar.css';


function NavigationBar() {
    // setClick is the name of the function 
    // click is the true and false value, showing if it clicked
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    //navigator to reroute pages
    const navigate = useNavigate();


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false);
    }
    // if the window size is less 960, then drop down menu will be showed if you click upon the button
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    // whenever the user resize the screen, we show the drop down button
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    {/* redict to homepage if the logo is being clicked */}
                    <Link className="navbar-logo" onClick={closeMobileMenu}>
                        Find.it
                        {/* the logo */}
                    </Link>
                    <img 
                    className = "mag_class"
                    src = "images/magnifying_glass.png"
                    alt = "logo"/>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    {/* the upper right corner area */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        
                        {/* help section */}
                        <li className='nav-item'>
                            <Link className='nav-links' onClick={closeMobileMenu}>
                                My Post
                            </Link>
                        </li>

                        {/* login section */}
                        <li className='nav-item'>
                            <Link className='nav-links' onClick={closeMobileMenu}>
                                Search 
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link className='nav-links' onClick={closeMobileMenu}>
                                Create 
                            </Link>
                        </li>

                    </ul>

                    {/* sign up section */}
                    {button 
                    && <Button buttonStyle='btn--regular' onClick={handleSignUp}> Create
                    </Button>}
                </div>
            </nav>
        </>
    );
}

export default NavigationBar;