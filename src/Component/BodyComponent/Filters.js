import React from 'react';

import {
    StaticPaper, Anchor,
    DotSpacer
} from "../CustomComponent";
import Select from 'material-ui/Select/Select';
import Input from 'material-ui/Input/Input';
import MenuItem from 'material-ui/Menu/MenuItem';
import Animate from "react-animate-height";

let styles = {
    h1: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    containter: {
        padding: "12px"
    }
}

export default class Filters extends React.Component {
    constructor() {
        super();
        this.state = {
            heightData: "0"
        }
    }
    render() {
        return (
            <StaticPaper {...this.props}>
                <div style={styles.containter}>
                    <div>
                        <span style={styles.h1}>Search filters</span>
                        <DotSpacer></DotSpacer>
                        <Anchor onClick={(e) => {
                            e.target.innerHTML = e.target.innerHTML.trim(" ") == "Show" ? "Hide" : "Show";

                            this.setState({ heightData: this.state.heightData == '0' ? "auto" : '0' });

                        }} lowFont mainColor normalFloat>Show</Anchor>
                    </div>

                    <Animate
                        duration={500}
                        height={this.state.heightData}>


                        <div>
                            <NativeSelect Data={[
                                {
                                    key: 1,
                                    name: "From anyone"
                                }, {
                                    key: 2,
                                    name: "People you follow"
                                }
                            ]}></NativeSelect>
                            <NativeSelect
                                Data={[
                                    {
                                        key: 1,
                                        name: "Anywhere"
                                    }, {
                                        key: 2,
                                        name: "Near you"
                                    }
                                ]}
                            ></NativeSelect>
                            <NativeSelect
                                Data={[
                                    {
                                        key: 1,
                                        name: "All Languages"
                                    }, {
                                        key: 2,
                                        name: "English"
                                    }, {
                                        key: 3,
                                        name: "Malayalam"
                                    }
                                ]}
                            ></NativeSelect>
                            <Anchor style={{ margin: 15, marginLeft: 0 }} mainColor boldThick>Advanced search</Anchor>
                        </div>
                    </Animate>


                </div>
            </StaticPaper >
        );
    }
}

class NativeSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            age: 10
        }
    }

    render() {
        return (
            <Select
                native
                style={{ marginTop: 12, fontSize: 14 }}
                value={this.state.age}
                onChange={(e) => { this.setState({ age: e.target.value }) }}
                input={<Input disableUnderline={true} fullWidth id="age-native-simple" />}
            >
                {this.props.Data.map((val, i) => (
                    <option key={i} value={val.key}>{val.name}</option>
                ))}
            </Select>
        );
    }
}