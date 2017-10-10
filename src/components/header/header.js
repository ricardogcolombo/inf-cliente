import React from 'react';

import Dropdown from 'react-dropdown'
const Header = ({navItems,onClick,languages,onSelect,defaultOption}) => {
    return (<div>
        <img onClick={onClick} className='header__logo' src='./logoConocer.png' />
        <div className='header__navBar'>
        <Dropdown className="dropdownLanguage"  value={defaultOption} onChange={onSelect}options={languages} />
            {navItems}
        </div>
        </div>
    );
}

export default Header;
