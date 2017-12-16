import React from "react";
import { Button } from "material-ui";
import CLabel from '../CLabel';

export default (props) => {
    let { style, datVal, borderOnly, ...Other } = props;

    if (borderOnly) {
        style = style || {};

        style = Object.assign({}, {
            background: 'none',
            border: '1px solid #2196f3',
            color: '#2196f3',
            height: '27px',
        }, style);
    }
    return (
        <Button
            {...Other}
            style={{
                boxShadow: 'none',
                borderRadius: "45px",
                minHeight: '28px',
                height: '32px',
                padding: '0px',
                ...style
            }} raised color="primary">

            <CLabel val={datVal} />
            {props.children}
        </Button>
    );
};

