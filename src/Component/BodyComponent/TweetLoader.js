import React from "react";
import Tweet from './Tweet';

import TweetsData from "./../../testdata/tweets";

export default (props) => {

    let { style, ...Other } = props;

    return (
        <div style={style} {...Other}>
            {
                TweetsData.map((dat, i) => (
                    <Tweet key={i} fillData={dat} ></Tweet>
                ))
            }
        </div>
    );
};