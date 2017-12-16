import React from "react";
import TweetsData from "./../../testdata/tweets";
import Tweet from './Tweet';

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