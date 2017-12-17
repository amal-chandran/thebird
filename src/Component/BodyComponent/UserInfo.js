import React from 'react';
import { Grid, Avatar } from "material-ui";

import {
    Anchor,
    StaticPaper
} from "./../CustomComponent";

import UserData from "./../../testdata/user";
import withTheme from 'material-ui/styles/withTheme';
let UserInfo = (props) => {
    const avatarSize = '72px';
    let { theme } = props;
    let styles = {
        cover: {
            background: theme.palette.primary['500'],
            height: '95px'
        }, avatar: {
            height: avatarSize,
            width: avatarSize,
            marginTop: '-35px',
            marginLeft: '10px',
            border: "3px solid white"
        }, anchorName: {
            color: '#000',
            fontSize: '18px',
            padding: '2px',
            fontWeight: 'bold'
        }, anchorContain: {
            padding: "8px"
        }, netInfo: {
            fontSize: '12px',
            textDecoration: 'none',
            fontWeight: 'bold'
        }, netInfoContain: {
            padding: '0px 24px 7px 17px',
            height: '49px'
        }, netInfoData: {
            color: theme.palette.primary['500'],
            fontSize: '18px',
            fontWeight: 'bold'
        }
    };


    return (<StaticPaper style={{ position: "relative" }}>
        <Grid container spacing={0} justify="center">
            <Grid item xs="12">
                <div style={styles.cover}>

                </div>
            </Grid>

            <Grid item xs="12">
                <Grid container spacing={0} justify="center">
                    <Grid item xs="4">

                        <Avatar style={styles.avatar} alt="Avatar" src={UserData.image} />

                    </Grid>
                    <Grid item xs="8">
                        <div style={styles.anchorContain}>

                            <Anchor boldThick style={styles.anchorName}>{UserData.name} </Anchor><br />
                            <Anchor preText="@" subColor >{UserData.id} </Anchor>

                        </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs="12">

                <Grid container spacing={0} justify="left">
                    <Grid item xs='5'>
                        <div style={styles.netInfoContain}>

                            <Anchor boldThick subColor lowFont colorHover>Tweets </Anchor><br />

                            <div style={styles.netInfoData}>{UserData.tweets}</div>
                        </div>

                    </Grid>

                    <Grid item xs='3'>
                        <div style={Object.assign({}, styles.netInfoContain, { 'paddingLeft': '0px' })}>

                            <Anchor boldThick subColor lowFont colorHover>Following </Anchor><br />

                            <div style={styles.netInfoData}>{UserData.following}</div>

                        </div>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </StaticPaper>);
};


export default withTheme()(UserInfo);