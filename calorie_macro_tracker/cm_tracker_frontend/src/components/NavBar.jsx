import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Button } from '../pages/Button'
import './NavBar.css'


export const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
      }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
            <Link to={'/'} className="navbar-logo">Tango Nutrition <i className="fab fa-typo3"></i></Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'}></i> 
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to={'/'}class="nav-links" onClick={closeMoblieMenu}>Home</Link></li>
                <li><Link to={'/search/'}class="nav-links" onClick={closeMoblieMenu}>Search</Link></li>
                <li><Link to={'/recordmeal/'}class="nav-links" onClick={closeMoblieMenu}>Record Meal</Link></li>
                <li><Link to={'/calendar/'}class="nav-links" onClick={closeMoblieMenu}>Calendar</Link></li>
            </ul>
            </div>
        </nav>
        </>
    )
}