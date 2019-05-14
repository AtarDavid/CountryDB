import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class CountryList extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          <aside>
            <ul>
              {context.results.map(country => <li id={country.name}>
                <h3>{country.name}</h3>
                <span>{country.subregion}</span>
              </li>
              )}
            </ul>
          </aside>
        }
      </AppContext.Consumer>
    )
  }
}