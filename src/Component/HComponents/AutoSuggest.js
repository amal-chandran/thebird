import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import Anchor from "./../BodyComponent/Anchor";
import color from "./../../data/color";

// const suggestions = [
//     { label: 'Afghanistan' },
//     { label: 'Aland Islands' },
//     { label: 'Albania' },
//     { label: 'Algeria' },
//     { label: 'American Samoa' },
//     { label: 'Andorra' },
//     { label: 'Angola' },
//     { label: 'Anguilla' },
//     { label: 'Antarctica' },
//     { label: 'Antigua and Barbuda' },
//     { label: 'Argentina' },
//     { label: 'Armenia' },
//     { label: 'Aruba' },
//     { label: 'Australia' },
//     { label: 'Austria' },
//     { label: 'Azerbaijan' },
//     { label: 'Bahamas' },
//     { label: 'Bahrain' },
//     { label: 'Bangladesh' },
//     { label: 'Barbados' },
//     { label: 'Belarus' },
//     { label: 'Belgium' },
//     { label: 'Belize' },
//     { label: 'Benin' },
//     { label: 'Bermuda' },
//     { label: 'Bhutan' },
//     { label: 'Bolivia, Plurinational State of' },
//     { label: 'Bonaire, Sint Eustatius and Saba' },
//     { label: 'Bosnia and Herzegovina' },
//     { label: 'Botswana' },
//     { label: 'Bouvet Island' },
//     { label: 'Brazil' },
//     { label: 'British Indian Ocean Territory' },
//     { label: 'Brunei Darussalam' },
// ];

// function renderInput(inputProps) {
//     const { classes, autoFocus, value, ref, ...other } = inputProps;

//     return (
//         <TextField
//             autoFocus={autoFocus}
//             className={classes.textField}
//             value={value}
//             inputRef={ref}
//             style={{
//                 background: "none",
//                 border: "none",
//                 outline: "none",
//                 marginLeft: "8px",
//                 fontFamily: "inherit",
//                 width: "100%"
//             }}
//             InputProps={{
//                 disableUnderline: true,
//                 classes: {
//                     input: classes.input,
//                 },
//                 ...other,
//             }}
//         />
//     );
// }

// function renderSuggestion(suggestion, { query, isHighlighted }) {
//     const matches = match(suggestion.label, query);
//     const parts = parse(suggestion.label, matches);

//     return (
//         <MenuItem selected={isHighlighted} component="div">
//             <div>
//                 {parts.map((part, index) => {
//                     return part.highlight ? (
//                         <span key={String(index)} style={{ fontWeight: 300 }}>
//                             {part.text}
//                         </span>
//                     ) : (
//                             <strong key={String(index)} style={{ fontWeight: 500 }}>
//                                 {part.text}
//                             </strong>
//                         );
//                 })}
//             </div>
//         </MenuItem>
//     );
// }



// function getSuggestionValue(suggestion) {
//     return suggestion.label;
// }

// function getSuggestions(value) {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//     let count = 0;

//     return inputLength === 0
//         ? []
//         : suggestions.filter(suggestion => {
//             const keep =
//                 count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

//             if (keep) {
//                 count += 1;
//             }

//             return keep;
//         });
// }

// const styles = theme => ({
//     container: {
//         // flexGrow: 1,
//         // position: 'relative',
//         // height: 200,
//     },
//     suggestionsContainerOpen: {
//         position: 'absolute',
//         marginTop: theme.spacing.unit,
//         marginBottom: theme.spacing.unit * 3,
//         left: 0,
//         right: 0,
//     },
//     suggestion: {
//         display: 'block',
//     },
//     suggestionsList: {
//         margin: 0,
//         padding: 0,
//         listStyleType: 'none',
//     },
//     textField: {
//         width: '100%',
//     },
// });

// class IntegrationAutosuggest extends React.Component {
//     state = {
//         value: '',
//         suggestions: [],
//     };

//     handleSuggestionsFetchRequested = ({ value }) => {
//         this.setState({
//             suggestions: getSuggestions(value),
//         });
//     };

//     handleSuggestionsClearRequested = () => {
//         this.setState({
//             suggestions: [],
//         });
//     };

//     handleChange = (event, { newValue }) => {
//         this.setState({
//             value: newValue,
//         });
//     };

//     renderSuggestionsContainer = (options) => {
//         const { containerProps, children } = options;
//         console.log(children);
//         return (
//             <div {...containerProps} square>
//                 {children}
//             </div>
//         );
//         this.props.onChildren(children);
//     }

//     render() {
//         const { classes } = this.props;

//         return (
//             <Autosuggest
//                 theme={{
//                     container: classes.container,
//                     suggestionsContainerOpen: classes.suggestionsContainerOpen,
//                     suggestionsList: classes.suggestionsList,
//                     suggestion: classes.suggestion,
//                 }}
//                 renderInputComponent={renderInput}
//                 suggestions={this.state.suggestions}
//                 onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
//                 onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
//                 renderSuggestionsContainer={this.renderSuggestionsContainer}
//                 getSuggestionValue={getSuggestionValue}
//                 renderSuggestion={renderSuggestion}
//                 shouldRenderSuggestion={() => { return true; }}
//                 inputProps={{
//                     autoFocus: true,
//                     classes,
//                     placeholder: 'Search a country (start with a)',
//                     value: this.state.value,
//                     onChange: this.handleChange,
//                 }}
//             />
//         );
//     }
// }

// IntegrationAutosuggest.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(IntegrationAutosuggest);

const languages = [
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'C#',
        year: 2000
    },
    {
        name: 'C++',
        year: 1983
    },
    {
        name: 'Clojure',
        year: 2007
    },
    {
        name: 'Elm',
        year: 2012
    },
    {
        name: 'Go',
        year: 2009
    },
    {
        name: 'Haskell',
        year: 1990
    },
    {
        name: 'Java',
        year: 1995
    },
    {
        name: 'Javascript',
        year: 1995
    },
    {
        name: 'Perl',
        year: 1987
    },
    {
        name: 'PHP',
        year: 1995
    },
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'Ruby',
        year: 1995
    },
    {
        name: 'Scala',
        year: 2003
    }, {
        name: 'No-match',
        year: 2003
    }
];


function renderInput(inputProps) {
    const { classes, autoFocus, value, ref, ...other } = inputProps;

    return (
        <input
            autoFocus={autoFocus}
            className={classes.textField}
            value={value}

            type="text" style={{
                background: "none",
                border: "none",
                outline: "none",
                marginLeft: "8px",
                fontFamily: "inherit",
                width: "100%"
            }} />

        // <TextField
        //     autoFocus={autoFocus}
        //     className={classes.textField}
        //     value={value}
        //     inputRef={ref}

        //     InputProps={{
        //         disableUnderline: true,
        //         classes: {
        //             input: classes.input,
        //         },
        //         ...other,
        //     }}
        // />
    );
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp('^' + escapedValue, 'i');
    let filterData = languages.filter(language => regex.test(language.name));
    // filterData = filterData.length == 0 ? [languages[languages.length - 1]] : filterData;
    return filterData.slice(0, 5);

}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function shouldRenderSuggestions() {
    return true;
}



// function getSuggestionValue(suggestion) {
//     return suggestion.label;
// }

// function getSuggestions(value) {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//     let count = 0;

//     return inputLength === 0
//         ? []
//         : suggestions.filter(suggestion => {
//             const keep =
//                 count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

//             if (keep) {
//                 count += 1;
//             }

//             return keep;
//         });
// }

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            height: "48px"
        }} selected={isHighlighted} component="div">
            <div>
                {/* {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 300 }}>
                            {part.text}
                        </span>
                    ) : (
                            <strong key={String(index)} style={{ fontWeight: 500 }}>
                                {part.text}
                            </strong>
                        );
                })} */}
                <Anchor noLink subFont mainColor normalFloat>

                    {suggestion.name}
                </Anchor>
            </div>
        </MenuItem>
    );
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            noSuggestions: true,
            isEmptyInput: true
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onFocus = () => {
        console.log("Focused");
        document.getElementById('searchSuggest').style.display = "block";
    };

    onBlur = () => {
        console.log("Blured");

        document.getElementById('searchSuggest').style.display = "none";

    }
    onSuggestionsFetchRequested = ({ value }) => {
        let suggestions = getSuggestions(value);
        const noSuggestions = suggestions.length === 0;
        let isEmptyInput = value.trim() === '';

        this.setState({
            suggestions, noSuggestions, isEmptyInput
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    renderSuggestionsContainer = (options) => {
        const { containerProps, children } = options;
        return (
            <div  {...containerProps}  >

                <div style={{ width: "200px" }} id="searchSuggest" className="dropdown-menu">

                    <div className="dropdown-caret">
                        <div className="caret-outer"></div>
                        <div className="caret-inner"></div>
                    </div>
                    {!this.state.noSuggestions && this.state.isEmptyInput ?
                        <div style={{ padding: "16px" }}>

                            <div style={{ position: "relative", textAlign: "left" }}>

                                <span style={{
                                    margin: "0px",
                                    color: color.subColor,
                                    fontSize: "14px", fontWeight: "bold"
                                }}>
                                    Recent searches
                                </span>

                                <span style={{ position: "absolute", right: 0 }}>

                                    <Anchor subFont mainColor normalFloat>Clear</Anchor>&nbsp;
                                </span>
                            </div>
                        </div>
                        : ""}

                    {this.state.noSuggestions ?
                        <div style={{ padding: "12px", fontSize: "13px", fontWeight: "bold" }}>
                            Nothing is found
                    </div>
                        : ''}
                    <div style={{ padding: "5px 0px" }}>

                        {children}
                    </div>
                </div>
            </div >
        );
        // this.props.onChildren(children);
    }

    onSuggestionSelected = () => {
        // this.setState({
        //     value: ''
        // });
        document.getElementById('searchSuggest').style.display = "none";
        this.input.blur();
        console.log("Selected");
    };
    storeInputReference = autosuggest => {
        if (autosuggest !== null) {
            this.input = autosuggest.input;
        }
    };

    render() {
        const { value, suggestions } = this.state;

        // Check This Out
        const inputProps = {
            placeholder: "Search Twitter",
            value,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                shouldRenderSuggestions={shouldRenderSuggestions}
                renderSuggestion={renderSuggestion}
                renderInput={renderInput}
                onSuggestionSelected={this.onSuggestionSelected}
                renderSuggestionsContainer={this.renderSuggestionsContainer}
                ref={this.storeInputReference}
                focusInputOnSuggestionClick={false}
                inputProps={inputProps} />
        );
    }
}


const styles = theme => ({
    container: {
        // flexGrow: 1,
        // position: 'relative',
        // height: 200,
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 3,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    textField: {
        width: '100%',
    },
});

// export default App;
export default withStyles(styles)(App);

