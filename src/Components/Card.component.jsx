import React from 'react';
import './../Styles/homepage.styles.scss';

export const Card = ({category,availability}) => {
    return (
        <div className="menu-list">
            <div className="content">
                <h2>{category}</h2>
                <span>{availability}</span>
            </div>
        </div>
    )
}