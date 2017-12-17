import React from "react";
import {
    Avatar,
    Toolbar
} from "material-ui";

import UserData from "../../testdata/user";
import { SearchBox, RoundButton } from "./../CustomComponent";


export default (props) => {

    let { style, ...allProp } = props;

    let styles = {
        container: {
            display: 'inline-block',
            ...style
        },
        toolbar: { minHeight: '1px', height: style.height },
        avatar: { margin: "10px", height: '32px', width: '32px' }
    };


    return (<div {...allProp} style={styles.container}>
        <Toolbar style={styles.toolbar}>

            <SearchBox />

            <Avatar style={styles.avatar} alt="Avatar" src={UserData.image} />


            <RoundButton>Tweet</RoundButton>

        </Toolbar>
    </div>

    );
}