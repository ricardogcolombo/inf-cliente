import React from 'react';

const Header = ({navItems,onClick}) => {
    return (<div>
        <img onClick={onClick} className='header__logo' src='./logoConocer.png' />
        <div className='header__navBar'>
            {navItems}
        </div>
        </div>
    );
}

export default Header;
