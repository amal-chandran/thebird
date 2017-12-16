import React from "react";
import {
    AppBar,
    // Button,
    // Toolbar,
    Grid,
    // Tab,
    // Tabs,
    // Icon,
    // FormControl,
    // Input,
    // InputAdornment,
    // Avatar
} from "material-ui";

import TwitterIcon from "./Component/twitter.svg";
// import { withStyles } from 'material-ui/styles';
import HTabs from "./Component/HComponents/HTabs";
import HToolBar from "./Component/HComponents/HToolBar";
import CenterMe from "./Component/CenterMe";
import MaxWContain from "./Component/MaxWContain";

class Header extends React.Component {

    render() {
        let style = {
            height: '46px'
        };

        return (
            <div className="Header">
                <AppBar style={{
                    backgroundColor: "white",
                    borderBottom: "1px solid rgba(0,0,0,0.25)",
                    boxShadow: 'none',
                    height: style.height
                }}>
                    <MaxWContain style={{ minWidth: "1190px" }}>
                        <Grid style={{ height: style.height }} justify="space-between" spacing="0" container>
                            <Grid sm={5} item>
                                <HTabs />
                            </Grid>
                            <Grid style={{ textAlign: 'center' }} sm={2} item>
                                <CenterMe>
                                    <img style={{ height: "22px" }} src={TwitterIcon} alt="Logo" />
                                </CenterMe>
                            </Grid>
                            <Grid style={{ textAlign: 'right' }} sm={5} item>
                                <HToolBar style={{ height: style.height }} />
                            </Grid>
                        </Grid>
                    </MaxWContain>
                </AppBar>
            </div>
        );
    }
}

export default Header;