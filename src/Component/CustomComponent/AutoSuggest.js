import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { withRouter } from "react-router-dom";

import { Anchor } from "./../CustomComponent";

import color from "./../../data/color";

import seachdata from "./../../testdata/searchdata";


function renderInput(inputProps) {
    const { classes, autoFocus, value } = inputProps;

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

    );
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp('^' + escapedValue, 'i');
    let filterData = seachdata.filter(language => regex.test(language.name));
    // filterData = filterData.length == 0 ? [seachdata[seachdata.length - 1]] : filterData;
    return filterData.slice(0, 5);

}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function shouldRenderSuggestions() {
    return true;
}

function renderSuggestion(suggestion, { query, isHighlighted }) {

    return (
        <MenuItem style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            height: "48px"
        }} selected={isHighlighted} component="div">
            <div>
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
            isEmptyInput: true, selected: false
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onFocus = () => {
        document.getElementById('searchSuggest').style.display = "block";
    };

    onBlur = () => {
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
                        :
                        <div style={{ padding: "5px 0px" }}>
                            {children}
                        </div>
                    }
                </div>
            </div >
        );
        // this.props.onChildren(children);
    }

    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        document.getElementById('searchSuggest').style.display = "none";
        this.input.blur();
        let query = "/search/" + suggestionValue;
        if (this.props.location.pathname != query && suggestionValue.trim("") != "")
            this.props.history.push(query);
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
            <div>
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
            </div>
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
export default withStyles(styles)(withRouter(App));

