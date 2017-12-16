import React from "react";
import MaxWContain from "./Component/MaxWContain";
import { Grid } from "material-ui";
import UserInfo from "./Component/BodyComponent/UserInfo";
import Trends from "./Component/BodyComponent/Trends";
import StaticPaper from "./Component/BodyComponent/StaticPaper";
import TweetCreator from './Component/BodyComponent/TweetCreator';
import Tweet from './Component/BodyComponent/Tweet';
import TweetLoader from './Component/BodyComponent/TweetLoader';
import Follow from "./Component/BodyComponent/Follow";
import LinkBox from "./Component/BodyComponent/LinkBox";

export default class Body extends React.Component {
    render() {
        return (
            <MaxWContain style={{ paddingTop: "58px" }}>
                <Grid container justify="center" spacing={16}>
                    <Grid item xs="3">

                        <UserInfo />
                        {/* <RoundButton>Hello</RoundButton> */}
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