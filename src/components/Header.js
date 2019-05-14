import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class Header extends Component {
    filterCountry = React.createRef();

    render() {
        return (

            <AppContext.Consumer>
                {context =>
                    <header className="header">
                        <label htmlFor="search">Search country:</label>
                        <input name="search" type="text" placeholder={`for example ${context.chosenCountry}`} onChange={() => context.filterResults(this.filterCountry)} ref={this.filterCountry} />
                    </header>
                }
            </AppContext.Consumer>
        )
    }
}
