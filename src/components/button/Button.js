import React from 'react';

const Button = ({
        onClick,
        onTouchCancel,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        text,
        className
    }) =>
    (
        <button
        onTouchCancel={onTouchCancel}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onClick={onClick}
        className={className}
    >
   <p className='buttonText'>  {text}</p>
   </button>
    )

export default Button
