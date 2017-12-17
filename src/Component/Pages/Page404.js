import React from "react";
import withTheme from "material-ui/styles/withTheme";
import { MaxWContain } from "../CustomComponent/index";

export default withTheme()(
    class Page404 extends React.Component {
        componentWillReceiveProps(props) {
            // document.body.style.backgroundColor = this.props.theme.palette.primary['500'];
            console.log(props);
        }

        render() {

            let { theme } = this.props;
            return (
                <div style={{
                    background: theme.palette.primary['500'],
                    textAlign: "center",
                    height: document.body.offsetHeight
                }}>
                    <MaxWContain HeaderOver>
                        <div>
                            <p style={{
                                color: "#fff",
                                textShadow: "0 1px 2px rgba(0,0,0,.2)",
                                fontWeight: 200,
                                fontSize: "40px",
                                margin: "0px",
                                marginTop: "15px"
                            }}>
                                Sorry, that page doesn’t exist!
                            </p>
                            <h3 style={{
                                margin: "10px 0 20px",
                                fontSize: "18px",
                                fontWeight: "300",
                                lineHeight: "25px",
                                color: "#e0eff6"
                            }}>
                                You can&nbsp;
                                <span style={{ fontWeight: "bold", color: "#fff" }}>
                                    search Twitter
                                </span>&nbsp;
                                using the search box below or&nbsp;
                                 <span style={{ fontWeight: "bold", color: "#fff" }}>
                                    &nbsp;return to the homepage
                                </span>.
                            </h3>

                        </div>
                    </MaxWContain>
                </div >
            );
        }
    });