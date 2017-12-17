import React from "react";
import {
    Divider
} from "material-ui";


import {
    StaticPaper, Anchor,
    DotSpacer, CenterMe,
    IconTwitter
} from "./../CustomComponent";

import LinkData from "./../../testdata/links";

export default (props) => {
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
            color: '#657786',
            fontSize: '13px',
        }, ListItem: {
            paddingLeft: '0px'
        }, List: {
            paddingTop: '0px'
        }
    };
    return (
        <StaticPaper {...props}>
            <div style={styles.containter}>
                <span> © 2017 Twitter  </span>

                {LinkData.map((val, i) => (
                    <span key={i}>
                        <DotSpacer space></DotSpacer>
                        <Anchor subColor subFont >{val.name}</Anchor>
                    </span>
                ))}

            </div>
            <Divider />
            <div style={{ padding: '12px' }}>
                <CenterMe style={{ color: '#2196f3', justifyContent: 'none' }}>
                    <IconTwitter medium icon='promotedStroked'></IconTwitter>
                    <DotSpacer space></DotSpacer>

                    <Anchor mainColor subFont >Advertise with Twitter</Anchor>
                </CenterMe>
            </div>
        </StaticPaper >
    );
}