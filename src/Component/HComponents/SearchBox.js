import React from "react";
import CenterMe from "../CenterMe";
import { Icon } from "material-ui";
import IconTwitter from "./IconTwitter";
import Tooltip from "rc-tooltip";
// import 'rc-tooltip/assets/bootstrap_white.css';
import Anchor from "./../BodyComponent/Anchor";
import AutoSuggest from "./AutoSuggest";
const styles = {
  input: {
    background: "none",
    border: "none",
    outline: "none",
    marginLeft: "8px",
    fontFamily: "inherit",
    width: "100%"
  },
  container: {
    background: "#f5f8fa",
    border: "1px solid #e6ecf0",
    borderRadius: "21px",
    padding: "5px",
    color: "#000"
  },
  icon: { color: "#000", padding: "3px", marginTop: "-4px" },
  tooltip: {
    display: "inline-block",
    lineHeight: "40px",
    height: "40px",
    width: "200px",
    textAlign: "center",
    background: "#000",
    marginRight: "1em",
    marginBottom: "1em",
    borderRadius: "6px"
  }, tooltipHead: {
    position: "relative",
  }, h3tooltip: {
    margin: "0px",
    display: "inline-block",
  }, cleartooltip: {
    position: 'absolute',
    right: "0px"
  }

};
class SearchBox extends React.Component {

  constructor() {
    super();
    this.state = { children: [] };
  }

  inputToggle = e => {
    let Contain = document.getElementById("searchContainer");
    console.log(Contain.classList.contains("searchContainFocus"));
    if (Contain.classList.contains("searchContainFocus")) {
      Contain.classList.remove("searchContainFocus");
    } else {
      Contain.classList.add("searchContainFocus");
    }
  };
  render() {
    let { style, ...Other } = this.props;

    style = Object.assign(
      {
        width: "221px"
      },
      style
    );

    return (

      <div {...Other} style={style}>
        {/* <input
          placeholder="Search Twitter"
          onFocus={this.inputToggle}
          onBlur={this.inputToggle}
          style={styles.input}
          type="text"
        /> */}
        <CenterMe style={styles.container} id="searchContainer">


          <AutoSuggest onChildren={(children) => { this.setState({ children }); }}> </AutoSuggest>

          {/* <Tooltip overlay={<span>
            <h2>  Hello</h2>
          </span>} visible={true}>
            <h1></h1>
          </Tooltip> */}

          <IconTwitter icon="search" style={styles.icon} medium />
        </CenterMe>
      </div >
    );
  }
};

export default SearchBox;
