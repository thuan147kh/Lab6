import React from 'react';
import classNames from 'classnames/bind';
import './DarkMode.css'
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";


export default function DarkMode() {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }
    
    const setLightMode = () =>{
        document.querySelector('body').setAttribute('data-theme', 'light');
    }
    
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }
    return (
        <div className='dark_mode'>
            <input
                onChange={toggleTheme}
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
}
