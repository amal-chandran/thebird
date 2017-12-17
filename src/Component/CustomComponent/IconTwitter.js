
import React from "react";
import withTheme from "material-ui/styles/withTheme";

export default withTheme()((props) => {
    let { medium, large, icon, theme, style, ...Other } = props;
    let classList = "Icon ";
    classList += (medium) ? ' Icon--medium ' : '';
    classList += (icon) ? ' Icon--' + icon + ' ' : '';
    classList += (large) ? ' Icon--large ' : '';

    style = Object.assign({}, { color: theme.palette.primary['500'] }, style)

    return (
        <span style={style} {...Other} className={classList}></span>
    );
});


