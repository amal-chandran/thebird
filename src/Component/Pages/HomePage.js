import React from "react";
import { Grid } from "material-ui";

import {
    UserInfo, Trends,
    TweetCreator,
    TweetLoader,
    Follow, LinkBox
} from "../BodyComponent";


import { MaxWContain, StaticPaper } from "./../CustomComponent";

export default class Body extends React.Component {
    render() {
        return (
            <MaxWContain HeaderOver>
                <Grid container justify="center" spacing={16}>
                    <Grid item xs="3">

                        <UserInfo />
                        <Trends notFirst />

                    </Grid>
                    <Grid item xs="6">
                        <StaticPaper>
                            <TweetCreator></TweetCreator>
                            <TweetLoader></TweetLoader>
                        </StaticPaper>
                    </Grid>
                    <Grid item xs="3">
                        <Follow></Follow>
                        <LinkBox notFirst></LinkBox>
                    </Grid>
                </Grid>
            </MaxWContain >
        );
    }
}