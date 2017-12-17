import React from "react";
import { Grid, Avatar } from "material-ui";

import {
    StaticPaper, Anchor,
    DotSpacer, CenterMe,
    IconTwitter
} from "./../CustomComponent";

import reactStringReplace from 'react-string-replace';

export default (props) => {
    let { style, fillData } = props;
    let styles = {
        avatarWidth: '42px',
        avatar: { margin: "10px", marginTop: '4px', height: this.avatarWidth, width: this.avatarWidth },
    };
    fillData = fillData || {};
    // console.log(fillData);
    let image = fillData.hasOwnProperty('image') ? fillData['image'] : './img/Women.jpg';

    fillData.content = reactStringReplace(fillData.content, /(https?:\/\/\S+)/g, (match, i) => (
        <Anchor key={match + i} mainColor normalFloat> {(match.length > 50) ? match.substring(0, 50) + '...' : match}</Anchor>
    ));

    fillData.content = reactStringReplace(fillData.content, /@(\w+)/g, (match, i) => (
        <Anchor key={match + i} mainColor normalFloat> @{match}</Anchor>
    ));

    fillData.content = reactStringReplace(fillData.content, /#(\w+)/g, (match, i) => (
        <Anchor key={match + i} mainColor normalFloat> #{match}</Anchor>
    ));

    return (
        <StaticPaper style={{ marginTop: "8px", borderBottom: '1px solid #BFBFBF', ...style }}>

            <Grid container justify='center'>
                <Grid item xs='1'>
                    <Avatar style={styles.avatar} alt="Avatar" src={image} />
                </Grid>
                <Grid item xs='11'>
                    <TextBoxContain fillData={fillData}></TextBoxContain>
                </Grid>

            </Grid>
        </StaticPaper >
    );
};

let ButtonList = [{ Icon: 'reply', Color: '#1da1f2' },
{ Icon: 'retweet', Color: '#2AC46F' },
{ Icon: 'heart ', Color: '#E0245E' },
{ Icon: 'dm', Color: '#1da1f2' }];

const TextBoxContain = (props) => (
    <div style={{ marginTop: '5px', marginLeft: '10px' }}>
        <div style={{ paddingBottom: '7px' }}>

            <Anchor boldThick subFont normalFloat>{props.fillData.name}</Anchor>&nbsp;
            <Anchor lowFont subColor normalFloat> @{props.fillData.id}</Anchor>
            <DotSpacer></DotSpacer>
            <Anchor lowFont subColor normalFloat> {Math.floor(Math.random() * 30) + 1}m</Anchor>

        </div>
        <div>
            {props.fillData.content}
            {props.fillData.images.map((val, i) => (
                <ImgContain key={i} image={val}></ImgContain>
            ))}
        </div>
        <div style={{ paddingTop: "12px", paddingBottom: '12px' }}>
            {ButtonList.map((val, i) => (
                <Anchor boldThick subColor colorHover key={i}
                    style={{ paddingRight: '20px' }} hover={{ 'color': val.Color }}>

                    <CenterMe>
                        <IconTwitter style={{ color: "inhert" }} medium='true' icon={val.Icon}></IconTwitter>
                        <span style={{ padding: '0 4px' }}>{Math.floor(Math.random() * 30) + 1}</span>
                    </CenterMe>
                </Anchor>
            ))}

        </div>
    </div>
);

const ImgContain = (props) => (
    <span style={{
        boxSizing: "border-box",
        display: "inline-block",
        padding: "13px",
        paddingLeft: "0"
    }}>
        <img style={{
            width: "100%",
            border: "1px solid gray",
            borderRadius: "9px",
            boxSizing: "border-box"
        }} alt="Loading ..."
            src={props.image} alt="Post Image" />
    </span>
);