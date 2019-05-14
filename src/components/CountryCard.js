import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class Country extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {context => context.results.map(country => {
                    const { name, region, subregion, translation, flag } = country;
                    return ((name == context.chosenCountry) &&
                        < div className="countryCard" >
                            <h3>{name}</h3>
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
