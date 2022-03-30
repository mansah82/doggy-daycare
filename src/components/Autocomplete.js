import { render } from "@testing-library/react";
import React, { Component, Fragment} from "react";
import './styleAC.css'

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }


onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    const filteredSuggestions = suggestions.filter(
        suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
    });
};

onClick = e => {
    this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText
    });
};



render() {
    const {
      onChange,
      onClick,
      
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;
    
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
  
                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
                return (
                  <li className={className}  key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div className="no-suggestions">
              <em>No suggestions available.</em>
            </div>
          );
        }
      } 
      return (
        <Fragment>
          <input
            type="text"
            onChange={onChange}
            value={userInput}
          />
          {suggestionsListComponent}
        </Fragment>
      );
    }
  }
  
  export default Autocomplete;