import React from "react";
import Tweet from './Tweet';

import TweetsData from "./../../testdata/tweets";

export default (props) => {

    let { style, Tweets, ...Other } = props;

    Tweets = Tweets ? Tweets : TweetsData;
    return (
        <div style={style} {...Other}>
            {
                Tweets.map((dat, i) => (
                    <Tweet key={i} fillData={dat} ></Tweet>
                ))
            }
        </div>
    );
};