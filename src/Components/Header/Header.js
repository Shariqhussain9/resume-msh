//CSS
import './Header.css'

//rrd imports
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    const changeTheme = () => {
        console.log("Theme is Changed");
        setDarkMode(!darkMode);
    }

    const updateColorScheme = ()=> {
        // const root = document.documentElement;

        // root.style.setProperty( darkMode ? )
        document.body.classList.toggle(darkMode ? 'dark-mode' : 'light-mode');
    }

    useEffect(() => {
        updateColorScheme();
    }, [darkMode]);

    return (
        <div className='header'>
            <div className='header-left'>
                <h3>MOHD SHARIQ HUSSAIN</h3>
            </div>
            <div className='header-right'>
                <ul className='header-list'>
                    <NavLink to='/' className='header-list_links'>
                        <li className='header-list_item'>Home</li>
                    </NavLink>
                    <NavLink to='about' className='header-list_links'>
                        <li className='header-list_item'>About</li>
                    </NavLink>
                    <NavLink to='skills' className='header-list_links'>
                        <li className='header-list_item'>Skills</li>
                    </NavLink>
                    <NavLink to='resume' className='header-list_links'>
                        <li className='header-list_item'>Resume</li>
                    </NavLink>
                    <NavLink to='works' className='header-list_links'>
                        <li className='header-list_item'>Work</li>
                    </NavLink>
                    <NavLink to='contact' className='header-list_links'>
                        <li className='header-list_item'>Contact</li>
                    </NavLink>

                    <li className='header-list_item'>
                        <button className='header-theme-btn' onClick={()=> changeTheme()}> Change Theme</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
