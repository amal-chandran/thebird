import React from "react";
import { Grid } from "material-ui";

import {
    UserInfo, Trends,
    TweetCreator,
    TweetLoader, Tweet,
    Follow, Filters, LinkBox,
    SearchTabs, RelatedResults
} from "../BodyComponent";

import { MaxWContain, StaticPaper } from "./../CustomComponent";
import AppBar from "material-ui/AppBar/AppBar";
import TweetsData from "./../../testdata/tweets";


export default class Body extends React.Component {
    render() {
        let { match } = this.props;
        let query = match.params.query;

        const escapedValue = query.trim();
        const regex = new RegExp('^' + escapedValue, 'i');
        let TweetCreatorIP = TweetsData.filter(tweetData => regex.test(tweetData.name));

        return (
            <div style={{ paddingTop: "46px" }}>
                <div style={{ background: "#37ACF3" }}>
                    <MaxWContain>
                        <h1 style={{
                            margin: "0px",
                            padding: "16px",
                            paddingLeft: "0px",
                            color: "#fff"
                        }}>{match.params.query}</h1>

                    </MaxWContain>
                </div>
                <div style={{ background: "#fff", boxShadow: "0 1px 3px 0 rgba(0,0,0,0.25)" }}>
                    <MaxWContain >
                        <SearchTabs></SearchTabs>
                    </MaxWContain>
                </div>
                <MaxWContain style={{ paddingTop: "10px" }}>
                    <Grid container justify="center" spacing={16}>
                        <Grid item xs="3">

                            <Filters />
                            <RelatedResults notFirst></RelatedResults>
                            <Trends notFirst />
                            <Follow notFirst></Follow>
                            <LinkBox notFirst></LinkBox>

                        </Grid>
                        <Grid item xs="6">
                            <StaticPaper>
                                <TweetLoader Tweets={TweetCreatorIP}></TweetLoader>
                            </StaticPaper>
                        </Grid>
                        <Grid item xs="3">

                        </Grid>
                    </Grid>
                </MaxWContain >
            </div>
        );
    }
}