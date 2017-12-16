import React from 'react';
import Interactive from "react-interactive";

import color from "./../../data/color";
import withTheme from 'material-ui/styles/withTheme';

export default withTheme()((props) => {
    let { style, normal,
        hover, subColor, subFont,
        boldThick, colorHover, normalFloat,
        lowFont, mainColor, spanProp, noLink,
        preText, theme, ...Other } = props;


    const styles = {
        anchor: {
            textDecoration: 'none',
        },
        anchorHover: {
            textDecoration: 'underline',
        },
        styleDefault: {
            color: '#000',
            fontSize: '14px',
            fontWeight: "normal",
            display: 'inline-block',
            verticalAlign: 'top',
            ...style
        }
    }
    if (colorHover) {
        styles.anchorHover = Object.assign({}, styles.anchorHover, styles.anchor);
        styles.anchorHover['color'] = color.mainColor;
    }

    styles.styleDefault['verticalAlign'] = (normalFloat) ? 'baseline' : styles.styleDefault['verticalAlign'];
    styles.styleDefault['fontWeight'] = (boldThick) ? 'bold' : styles.styleDefault['fontWeight'];

    styles.styleDefault['fontSize'] = (subFont) ? '13px' : styles.styleDefault['fontSize'];
    styles.styleDefault['fontSize'] = (lowFont) ? '12px' : styles.styleDefault['fontSize'];

    styles.styleDefault['color'] = (mainColor) ? theme.palette.primary['500'] : styles.styleDefault['color'];
    styles.styleDefault['color'] = (subColor) ? theme.palette.sub['500'] : styles.styleDefault['color'];

    if (noLink) {
        Other = Object.assign({}, Other, { as: 'span' });
    } else {
        Other = Object.assign({}, Other, { as: 'a', href: '#' });
    }


    return (
        <span {...{ style: { color: styles.styleDefault['color'], fontSize: styles.styleDefault['fontSize'] }, ...spanProp } }>
            {preText}<Interactive {...Other }
                normal={{ ...styles.anchor, ...normal }}
                hover={{ ...styles.anchorHover, ...hover }}
                style={styles.styleDefault} >
                {props.children}
            </Interactive >
        </span >
    );

});