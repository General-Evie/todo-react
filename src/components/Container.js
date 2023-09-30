import React, { FC, useState, useEffect } from 'react'
import Nav from './Nav'
import { SunIcon } from './svgs/SunSvg'
import { MoonIcon } from './svgs/MoonSvg'



function Container() {
    const [isDarkMode, setIsDarkMode] = useState(true);


    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const Html = document.documentElement
        Html.style.setProperty(
          'background-image',
          isDarkMode ? 'var(--background-dark)' : 'var(--background-light)'
        );
        Html.style.setProperty(
            'background-color',
            isDarkMode ?  'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)'
          );
      }, [isDarkMode]);

    return (
        <div className='container'>
            <header>
                <h1>Todo</h1>
                <div onClick={toggleDarkMode}>
                    {isDarkMode ? <SunIcon /> : <MoonIcon />}   
                </div>
            </header>
            <Nav />

            <p>Drag and drop to reorder list</p>
        </div>
    )
}

export default Container