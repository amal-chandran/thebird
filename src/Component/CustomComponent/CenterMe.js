import React from "react";

export default class CenterMe extends React.Component {
    constructor() {
        super();
        this.style = {
            parent: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }
        };
    }
    render() {
        let { style, ...Other } = this.props;
        style = Object.assign({}, this.style.parent, style);

        return (<div {...Other} style={style}> {this.props.children}</div >);
    }
}