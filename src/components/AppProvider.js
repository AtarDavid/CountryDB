import React, { Component } from 'react';
import AppContext from './AppContext';

export default class AppProvider extends Component {
    state = {
        searchTerm: "",
        results: null,
        chosenCountry: "Germany",
        chosenLanguage: "en",
        flag: "https://restcountries.eu/data/gbr.svg",
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
            this.setState({ chosenLanguage: selected.current.value });

            const country = this.state.results.filter(country => (country.alpha2Code.toLowerCase() == selected.current.value) || (country.alpha2Code == selected.current.selectedOptions[0].id)
            )

            this.setState({ flag: country[0].flag });
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
