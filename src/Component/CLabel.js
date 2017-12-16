import React from "react";
import {
    // AppBar,
    // Button,
    // Toolbar,
    // Grid,
    // Tab,
    // Tabs,
    Icon,
    // FormControl,
    // Input,
    // InputAdornment,
    // Avatar
} from "material-ui";


import CenterMe from "./CenterMe";

export default class CLabel extends React.Component {
    render() {
        let { ico, icon, val, style, ...Other } = this.props;
        return (
            <CenterMe>
                {ico ? <Icon>{ico}</Icon> : ""}
                {icon ? icon : ""}

                <span style={{
                    textTransform: "none",
                    fontWeight: "bold",
                    ...style
                }}> {val}</span>

            </CenterMe>);
    }
}