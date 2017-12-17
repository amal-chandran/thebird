import React from "react";
import { Tab, Tabs } from "material-ui";

import { IconTwitter, CLabel } from "./../CustomComponent";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import Button from "material-ui/Button/Button";
import { Redirect, withRouter } from "react-router-dom";

export default withRouter(class HTabs extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '/home'
        };
        this.style = {
            tab: {
                minWidth: "80px",
                height: "46px"
            }, label: {
                paddingLeft: '5px'
            }
        };
        this.TabList = [
            {
                icon: "homeFilled",
                name: "Home",
                path: "/home"
            },
            {
                icon: "lightning",
                name: "Moments",
                path: "/moments"
            },
            {
                icon: "notifications",
                name: "Notification",
                path: "/notifications"

            },
            {
                icon: "dm",
                name: "Message",
                path: "/message"

            },
        ];
    }

    tabHandler = (e, v) => {
        let { props, state } = this, match = props.match;
        // console.log(v, this.props.location.pathname)
        if (this.props.location.pathname != v)
            this.props.history.push(v);

        this.setState({ value: v });
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.value = nextProps.location.pathname;
        //console.log(nextProps, nextState);
        // console.log(this.TabList.filter((obj) => { return obj.path == this.state.value }).length);
    }
    render() {

        return (
            // <MuiThemeProvider theme={theme}>
            //     {/* <Button>Hello</Button> */}
            <Tabs indicatorColor="primary"
                textColor="primary"
                scrollable scrollButtons="off"
                onChange={this.tabHandler}
                value={this.TabList.filter((obj) => { return obj.path == this.state.value }).length == 0 ? '/home' : this.state.value}
            >
                {
                    this.TabList.map((val, i) => (
                        <Tab key={i} style={this.style.tab}
                            value={val.path}
                            label={<CLabel style={this.style.label}
                                val={val.name}
                                icon={<IconTwitter large='true' icon={val.icon}></IconTwitter>} />} />
                    ))
                }

            </Tabs>
            // </MuiThemeProvider>
        );
    }
});