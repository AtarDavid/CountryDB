import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AppProvider extends Component {
    state = {
        searchTerm: "name/germany",
        results: null,
        chosenCountry: "Germany",
        search: (searchTerm = "all") => {
            console.log("Searching ", searchTerm);
            fetch(`https://restcountries.eu/rest/v2/${searchTerm}`)
                .then(response => response.json())
                .then(data => this.setState({ results: data }));
        },
        handleClick: (e) => {
            this.setState({ chosenCountry: e.target.className })
        }
    }

    componentDidMount() {
        this.state.search()
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
