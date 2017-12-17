import React from "react";
import {
    Icon
} from "material-ui";


import CenterMe from "./CenterMe";

export default class CLabel extends React.Component {
    render() {
        let { ico, icon, val, style } = this.props;
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