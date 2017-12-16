import React from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { blue, blueGrey } from 'material-ui/colors';
import green from "material-ui/colors/green";

import { Header } from "./Component/Layout";
import { HomePage, SearchPage } from "./Component/Pages";

console.log(blueGrey);
let theme = createMuiTheme({
    palette: {
        primary: blue,
        sub: blueGrey
    },
    typography: {
        fontFamily: "sans-serif",
        button: {
            fontFamily: "'Helvetica' !important"
        }
    }, overrides: {
        MuiTab: {
            // Name of the styleSheet
            labelContainer: {
                // Name of the rule
                padding: "0 10px !important"
            },
        }, MuiTabIndicator: {
            root: {
                height: "3px"
            }
        },
        MuiTabs: {
            flexContainer: {
                overflow: "hidden"
            }
        },
        MuiSelect: {
            root: {
                width: "100%",
                position: "relative",
                border: "1px solid gainsboro",
                padding: "1px 9px",
                borderRadius: "4px"
            }, select: {
                background: "#fff"
            }
        }
    },
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <Header></Header>
                    <SearchPage></SearchPage>
                    {/* <HomePage></HomePage> */}
                    {/* <RoundButton>Hello</RoundButton> */}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;