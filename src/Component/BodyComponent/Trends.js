import React from 'react';
import { Grid, Paper, Avatar, Typography } from "material-ui";

import {
    StaticPaper, Anchor,
    DotSpacer
} from "./../CustomComponent";

import TrendsData from "./../../testdata/trends";


let styles = {
    staticpaper: { marginTop: "12px" },
    h1: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    containter: {
        padding: "12px"
    }
}

export default (props) => (
    <StaticPaper style={styles.staticpaper}>
        <div style={styles.containter}>
            <div>
                <span style={styles.h1}>Trends for you</span>
                <DotSpacer></DotSpacer>
                <Anchor lowFont mainColor normalFloat>Change</Anchor>
            </div>

            {TrendsData.map((data, i) => (
                <div key={i} style={{ paddingTop: '8px' }}>

                    <Anchor boldThick mainColor normalFloat> {data.trendLink}</Anchor>

                    <div style={{ color: '#657786', fontSize: '12px' }}>{data.trendTweets}</div>
                </div>
            ))}

        </div>
    </StaticPaper >
);