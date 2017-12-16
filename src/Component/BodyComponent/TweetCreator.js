import React from "react";

import {
    Avatar, IconButton, Icon,
    CircularProgress, TextField
} from "material-ui";

import {
    StaticPaper,
    IconTwitter,
    RoundButton
} from "./../CustomComponent";

import Interactive from 'react-interactive';
import UserData from "./../../testdata/user";

export default class TweetCreator extends React.Component {
    constructor() {
        super();
        this.state = {
            Focused: false,
            charLen: 0,
            rows: 1
        };
    }
    inputFocus = () => {

    }
    render() {

        let styles = {
            container: {
                background: "#E8F5FD",
                padding: '12px',
                border: '1px solid #e6ecf0'
            },
            avatar: { marginRight: "10px", marginTop: '4px', height: '32px', width: '32px' },
            avatarSpan: {
                display: 'inline-block',
                verticalAlign: 'top'
            },
            textareaSpan: {
                // padding: '12px'
                display: 'inline-block',
                width: "92%",
                position: 'relative'
            }, textarea: {
                border: '1px solid #A4D9F9',
                borderRadius: '10px',
                width: "100%",
                resize: 'none',
                outline: 'none',
                padding: '3px 36px 3px 12px',
                minHeight: "41px",
                boxSizing: 'border-box',
                background: '#fff'
            }, textareaActive: {
                border: '2px solid #A4D9F9',
                minHeight: "105px"
            }
        }
        return (
            <div style={styles.container}>
                <span style={styles.avatarSpan}>
                    <Avatar style={styles.avatar} alt="Avatar" src={UserData.image} />
                </span>
                <span style={styles.textareaSpan}>
                    <div style={
                        this.state.Focused ? { ...styles.textarea, ...styles.textareaActive } : styles.textarea
                    }>
                        {this.state.Focused ? '' :
                            <span style={{
                                position: 'absolute',
                                top: '12px',
                                color: '#1DA1F2'
                            }}>What's happening ?</span>}
                        <TextField
                            fullWidth
                            placeholder={this.state.Focused ? "What's happening ?" : ''}
                            onFocus={() => { this.setState({ Focused: true, rows: 3 }); }}
                            onBlur={() => {
                                let Focused = this.state.charLen == 0 ? false : true;

                                this.setState({ Focused, rows: 1 });
                            }}
                            onChange={(e) => { this.setState({ charLen: e.target.value.length }); }}
                            multiline
                            rows={this.state.Focused ? '4' : '1'}
                            InputProps={{
                                disableUnderline: true
                            }} />
                    </div>

                    <IconButton onKeyDown style={{
                        height: '36px',
                        width: '36px',
                        position: 'absolute',
                        right: '2px',
                        top: '0px'
                    }} color="primary">

                        <IconTwitter icon={this.state.Focused ? 'smiley' : 'media'}></IconTwitter>

                        {/* <Icon>{this.state.Focused ? 'mood' : 'image'}</Icon> */}
                    </IconButton>


                    {this.state.Focused == true ? <div>

                        <CircularProgress
                            mode="determinate"
                            color={this.state.charLen > 0 ? "accent" : "primary"}
                            size={20}
                            value={this.state.charLen == 0 ? 280 : this.state.charLen}
                            thickness="5"
                            min={0}
                            max={280}
                            style={{
                                position: 'absolute',
                                top: '46px',
                                right: '9px'
                            }}
                        />
                        <ControllPanel enable={this.state.charLen > 0}></ControllPanel>
                    </div> : ''}

                </span>
            </div >
        );
    }
}

let ControllPanel = (props) => {
    let styles = {
        BottomButtons: {
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: 'right'
        }, ButtonContain: {
            position: 'relative'
        }
    };
    //console.log(props);
    return (
        <div style={styles.ButtonContain}>
            <span style={styles.BottomButtons}>
                {['media', 'gif', 'pollBar', 'geo'].map((dat, i) => (
                    <span key={i}>
                        <Interactive
                            as='span'
                            style={{ display: 'inline-block', padding: '2px' }}
                            hover={{ border: '2px solid #A4D9F9', padding: '0px' }}
                        >
                            <IconButton style={{ height: '36px', width: '36px' }} color="primary">
                                {/* <Icon>{dat}</Icon> */}
                                <IconTwitter icon={dat}></IconTwitter>
                            </IconButton>
                        </Interactive>
                    </span>
                ))}
            </span>
            <span style={{ position: 'absolute', right: '0px', ...styles.BottomButtons }}>
                <span style={styles.BottomButtons}>
                    <span style={{ display: 'inline-block', padding: '2px' }}>
                        <IconButton disabled={(props.enable ? false : true)} style={{ height: '36px', width: '36px' }} color="primary">
                            <Icon>add_circle_outline</Icon>
                        </IconButton>
                    </span>
                </span>
                <span style={styles.BottomButtons}>
                    <RoundButton disabled={(props.enable ? false : true)}>Tweet</RoundButton>
                </span>
            </span>
        </div>
    );
};