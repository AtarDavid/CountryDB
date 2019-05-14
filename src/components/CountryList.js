import React, { Component } from 'react';
import AppContext from "./AppContext";
import Country from "./Country"

export default class CountryList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <aside>
            {context.results.map(country => <li id={country.name}>
              <h3>{country.name}</h3>
              <span>{country.subregion}</span>
            </li>
            )}
          </aside>
        }
      </AppContext.Consumer>
    )
  }
}