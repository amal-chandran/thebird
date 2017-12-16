
import React from "react";

export default (props) => {
    let { medium, large, icon, ...Other } = props;
    let classList = "Icon ";
    classList += (medium) ? ' Icon--medium ' : '';
    classList += (large) ? ' Icon--large ' : '';
    classList += (icon) ? ' Icon--' + icon + ' ' : '';

    return (
        <span {...Other} className={classList}></span>
    );
};


