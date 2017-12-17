import React from "react";
import { Tab, Tabs } from "material-ui";

import { CLabel } from "./../CustomComponent";

export default class HTabs extends React.Component {

    constructor() {
        super();
        this.state = {
            value: 0
        };
        this.style = {
            tab: {
                minWidth: "80px",
                height: "48px"
            }, label: {
                paddingLeft: '5px'
            }
        };

        this.TabList = [{ name: "Top" },
        {
            name: "Latest"
        },
        {
            name: "People"
        },
        {
            name: "Photos"
        },
        {
            name: "Videos"
        },
        {
            name: "News"
        },
        { name: "Broadcasts" }]


    }
    tabHandler = (e, v) => {
        this.setState({ 'value': v });
    }



    render() {

        return (
            <Tabs indicatorColor="primary"
                textColor="primary"
                scrollable scrollButtons="off"
                onChange={this.tabHandler}
                value={this.state.value}>
                {
                    this.TabList.map((val, i) => (
                        <Tab key={i} style={this.style.tab}
                            label={<CLabel style={this.style.label} val={val.name} />} />
                    ))
                }

            </Tabs>
        );
    }
}