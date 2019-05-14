import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AppProvider extends Component {
    state = {
        searchTerm: "",
        results: null,
        chosenCountry: "Germany",
        chosenLanguage: "en",
        search: () => {
            fetch(`https://restcountries.eu/rest/v2/all`)
                .then(response => response.json())
                .then(data => this.setState({ results: data }));
        },
        handleClick: (e) => {
            this.setState({ chosenCountry: e.target.className })
        },
        filterResults: (searchInput) => {
            console.log(searchInput.current.value);
            this.setState({ searchTerm: searchInput.current.value.toLowerCase() })
        },
        choseLanguage: (selected) => {
            console.log(selected.current.value);
            this.setState({ chosenLanguage: selected.current.value })
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
