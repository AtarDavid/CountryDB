import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class Country extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {context => context.results.map(country => {
                    const { name, region, subregion, translations, flag } = country;
                    return ((name == context.chosenCountry) &&
                        < div className="countryCard" >
                            <h1>{translations[context.chosenLanguage] || name}</h1>
                            <img width="100" src={flag} />
                            <strong>{region}</strong>
                            <span>{subregion}</span>
                        </div >)
                })
                }
            </AppContext.Consumer>
        )
    }
}
