import React from 'react';

import classes from './TopBar.module.css'

const TopBar = () =>{
    return (
        <header>
        <nav className={classes.Topbar}>
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="Amazon-Logo" />
       </nav>
       </header>
    )
}

export default TopBar;