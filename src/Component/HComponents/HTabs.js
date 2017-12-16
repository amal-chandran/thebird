import React from "react";
import { Tab, Tabs } from "material-ui";
import CLabel from "../CLabel";
import IconTwitter from "./IconTwitter";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import Button from "material-ui/Button/Button";

export default class HTabs extends React.Component {

    constructor() {
        super();
        this.state = {
            value: 0
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
                name: "Home"
            },
            {
                icon: "lightning",
                name: "Moments"
            },
            {
                icon: "notifications",
                name: "Notification"
            },
            {
                icon: "dm",
                name: "Message"
            },
        ];
    }
    tabHandler = (e, v) => {
        this.setState({ 'value': v });
    }



    render() {

        return (
            // <MuiThemeProvider theme={theme}>
            //     {/* <Button>Hello</Button> */}
            <Tabs indicatorColor="primary"
                textColor="primary"
                scrollable scrollButtons="off"
                onChange={this.tabHandler}
                value={this.state.value}>
                {
                    this.TabList.map((val, i) => (
                        <Tab key={i} style={this.style.tab}
                            label={<CLabel style={this.style.label}
                                val={val.name}
                                icon={<IconTwitter large='true' icon={val.icon}></IconTwitter>} />} />
                    ))
                }

            </Tabs>
            // </MuiThemeProvider>
        );
    }
}