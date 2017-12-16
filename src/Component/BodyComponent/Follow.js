import React from "react";
import { List, ListItem, Avatar, ListItemText, Divider, Icon } from "material-ui";
import StaticPaper from "./StaticPaper";
import Anchor from './Anchor';
import RoundButton from "../HComponents/RoundButton";
import CenterMe from "../CenterMe";
import IconTwitter from "./../HComponents/IconTwitter";
import DotSpacer from "./DotSpacer";
import FollowData from "./../../testdata/follow";

let avatarSize = '50px';

let styles = {
    avatar: {
        height: avatarSize,
        width: avatarSize,
    }, h1: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    containter: {
        padding: "12px",
        paddingBottom: '0px'

    }, ListItem: {
        paddingLeft: '0px'
    }, List: {
        paddingTop: '0px'
    },
    ListItemDiv: {
        overflow: 'hidden',
        height: '23px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '190px'
    },
    verified: {
        fontSize: '13px',
        verticalAlign: 'middle',
        paddingRight: '5px'
    }
};

export default (props) => (
    <StaticPaper>
        <div style={styles.containter}>

            <div>
                <span style={styles.h1}>Who to follow</span>
                <DotSpacer></DotSpacer>
                <Anchor lowFont mainColor normalFloat>Refresh</Anchor>
                <DotSpacer></DotSpacer>
                <Anchor lowFont mainColor normalFloat>View all</Anchor>
            </div>

            <FollowList></FollowList>

        </div>
        <Divider />
        <div style={{ padding: '12px' }}>
            <CenterMe style={{ color: '#2196f3', justifyContent: 'none' }}>

                <IconTwitter medium icon='people'></IconTwitter>
                <DotSpacer space></DotSpacer>
                <Anchor mainColor subFont> Find people you know</Anchor>

            </CenterMe>
        </div>
    </StaticPaper >

);

const FollowList = (props) => (
    <List style={styles.List}>
        {
            FollowData.map((val, i, array) => (
                <div key={i}>

                    <FollowListItem {...val}></FollowListItem>

                    {array.length != i + 1 ? <Divider /> : ''}

                </div>
            ))
        }

    </List>
);

const FollowListItem = (props) => (
    <ListItem style={styles.ListItem} >
        <Avatar style={styles.avatar} alt="Avatar" src={props.url} />
        <ListItemText primary={
            <div style={styles.ListItemDiv}>

                <Anchor boldThick> {props.name}</Anchor>
                <span>
                    {props.verified ? <IconTwitter style={styles.verified} icon='verified'></IconTwitter> : ''}
                </span>
                <Anchor subColor subFont> @{props.id}</Anchor>

            </div>
        } secondary={
            <RoundButton datVal={'Follow'} borderOnly='true'></RoundButton>
        } />
    </ListItem>
);