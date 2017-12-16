import React from 'react';
import Interactive from "react-interactive";

export default (props) => {
    let { style, normal, hover, ...Other } = props;
    const styles = {
        anchor: {
            textDecoration: 'none',
        }, anchorHover: {
            textDecoration: 'underline',
        }
    }
    return (
        <Interactive {...Other}
            normal={{ ...styles.anchor, ...normal }}
            hover={{ ...styles.anchorHover, ...hover }}
            style={{
                color: '#1DA1F2',
                ...style
            }}>
            {props.children}
        </Interactive>
    );

};