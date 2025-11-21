import React from "react";
import '../../style/MenuCard.css';

const MenuCard = ({ icon, title, onClick, disableVal }) => {
    return (
        <button
            className="menu-card"                                           
            onClick={onClick}
            disabled={disableVal}
        >
            <span className="menu-card__icon">
                <img src={icon} alt={title} className="menu-card__icon-img" />
            </span>
            <h3 className="menu-card__title">{title}</h3>
        </button>
    );
};

export default MenuCard;