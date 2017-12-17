import React from "react";
import {
    AppBar, Grid
} from "material-ui";

import { CenterMe, MaxWContain } from "./../CustomComponent";
import { HeaderTabs, HeaderToolBar } from "./../HeaderComponents";

import TwitterIcon from "./../twitter.svg";

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
                                <HeaderTabs />
                            </Grid>
                            <Grid style={{ textAlign: 'center' }} sm={2} item>
                                <CenterMe>

                                    <img style={{ height: "22px" }} src={TwitterIcon} alt="Logo" />
                                </CenterMe>
                            </Grid>
                            <Grid style={{ textAlign: 'right' }} sm={5} item>
                                <HeaderToolBar style={{ height: style.height }} />
                            </Grid>
                        </Grid>
                    </MaxWContain>
                </AppBar>
            </div>
        );
    }
}

export default Header;