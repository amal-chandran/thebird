import React from "react";
import { Grid } from "material-ui";

import {
    UserInfo, Trends,
    TweetCreator,
    TweetLoader, Tweet,
    Follow, LinkBox
} from "../BodyComponent";

import MaxWContain from "../MaxWContain";
import StaticPaper from "../BodyComponent/StaticPaper";

export default class Body extends React.Component {
    render() {
        return (
            <MaxWContain style={{ paddingTop: "58px" }}>
                <Grid container justify="center" spacing={16}>
                    <Grid item xs="3">

                        <UserInfo />
                        <Trends />

                    </Grid>
                    <Grid item xs="6">
                        <StaticPaper>
                            <TweetCreator></TweetCreator>
                            <TweetLoader></TweetLoader>
                        </StaticPaper>
                    </Grid>
                    <Grid item xs="3">
                        <Follow></Follow>
                        <LinkBox></LinkBox>
                    </Grid>
                </Grid>
            </MaxWContain >
        );
    }
}