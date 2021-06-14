import React from "react";
import '../Header/Header.css'
import TeslaLogo from '../../assets/teslaLogoSmall.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-logo">
                <img src={TeslaLogo} alt='Tesla Logo'/>
            </div>

            <div className="header-center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className="header-right">
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>
            </div>
        </div>

    )
}
export default Header