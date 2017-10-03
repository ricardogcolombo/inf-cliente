import React from 'react';

const Header = ({navItems}) => {
    return (<div>
        <img className='header__logo' src='./logoConocer.png' />
        <div className='header__navBar'>
            {navItems}
        </div>
        </div>
    );
}

export default Header;
