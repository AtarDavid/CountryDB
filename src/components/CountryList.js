import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class CountryList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <aside>
            <ul>
              {context.results.map(country => (country.name.toLowerCase().includes(context.searchTerm) && <li key={country.name} className={country.name} onClick={context.handleClick}>
                <strong className={country.name}>{country.name}</strong><br/>
                <span className={country.name}>{country.subregion}</span>
              </li>)
              )}
            </ul>
          </aside>
        }
      </AppContext.Consumer>
    )
  }
}