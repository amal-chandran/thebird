import React from "react";
import Header from "./Header";
import Body from "./Body";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import { blue } from 'material-ui/colors';

let theme = createMuiTheme({
    palette: {
        primary: blue
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
                    <Header />
                    <Body />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;