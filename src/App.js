import React from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { blue ,blueGrey} from 'material-ui/colors';
import green from "material-ui/colors/green";

import { Header } from "./Component/Layout";
import { HomePage } from "./Component/Pages";

console.log(blueGrey);
let theme = createMuiTheme({
    palette: {
        primary: blue,
        sub:blueGrey
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
                    <Header></Header>
                    <HomePage></HomePage>
                    {/* <RoundButton>Hello</RoundButton> */}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;