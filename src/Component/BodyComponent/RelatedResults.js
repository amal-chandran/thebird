import React from 'react';

import {
    StaticPaper, Anchor
} from "./../CustomComponent";

import TrendsData from "./../../testdata/trends";


let styles = {
    // staticpaper: { marginTop: "12px" },
    h1: {
        fontSize: '18px',
        fontWeight: 'bold'
    },
    containter: {
        padding: "12px"
    }
}

export default (props) => (
    <StaticPaper {...props}>
        <div style={styles.containter}>
            <div>
                <span style={styles.h1}>Related searches</span>
            </div>

            {TrendsData.map((data, i) => (
                <div key={i} style={{ paddingTop: '8px' }}>
                    <Anchor boldThick mainColor normalFloat> {data.trendLink}</Anchor>
                </div>
            ))}

        </div>
    </StaticPaper >
);