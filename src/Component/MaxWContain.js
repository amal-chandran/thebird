import React from "react";

export default class MaxWidthContain extends React.Component {
    render() {
        let style = this.props.style;
        return (
            <div style={{ maxWidth: "1190px", margin: "0 auto", ...style }}>
                {this.props.children}
            </div>
        );
    }
}