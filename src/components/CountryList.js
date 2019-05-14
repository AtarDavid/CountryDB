import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class CountryList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <aside>
            <ul>
              {context.results.map(country => <li className={country.name} onClick={context.handleClick}>
                <h3 className={country.name}>{country.name}</h3>
                <span className={country.name}>{country.subregion}</span>
              </li>
              )}
            </ul>
          </aside>
        }
      </AppContext.Consumer>
    )
  }
}