import React from "react";

export default class MaxWidthContain extends React.Component {
    render() {
        let { style, HeaderOver } = this.props;

        if (HeaderOver) {
            style = Object.assign({}, style, { paddingTop: "58px" });
        }

        return (
            <div style={{ maxWidth: "1190px", margin: "0 auto", ...style }}>
                {this.props.children}
            </div>
        );
    }
}