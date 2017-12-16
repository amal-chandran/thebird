import React from "react";
import color from './../../data/color';

export default (props) => {
    let { style, space, ...Other } = props;
    return (
        <span
            {...Other}
            style={{
                position: 'relative',
                color: color.subColor,
                top: '-5px',
                padding: '0 5px',
                ...style
            }}
        >{space ? '' : '.'}</span>);
};