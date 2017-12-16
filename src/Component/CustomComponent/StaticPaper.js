import React from "react";
import { Paper } from "material-ui";

export default (props) => {

    let { style, notFirst, ...Other } = props;

    if (notFirst) {
        style = style || {};
        style = Object.assign({}, { marginTop: "12px" }, style);
    }

    return (
        <Paper
            {...Other}
            style={{ boxShadow: 'none', ...style }}>

            {props.children}
        </Paper >
    );
};