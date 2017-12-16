import React from "react";
// import Header from "./Header";
// import Body from "./Body";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { blue } from 'material-ui/colors';
import green from "material-ui/colors/green";

import { RoundButton } from "./Component/CustomComponent";

let theme = createMuiTheme({
    palette: {
        primary: green
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
        },
    },
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    {/* <Header /> */}
                    {/* <Body /> */}
                    <RoundButton>Hello</RoundButton>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;