import React, { Component } from 'react';
import AppContext from "./AppContext";

export default class Header extends Component {
    filterCountry = React.createRef();
    languagePreference = React.createRef();

    render() {
        return (

            <AppContext.Consumer>
                {context =>
                    <header className="header">
                        <div className="search">
                            <label htmlFor="search">Search country:</label>
                            <input name="search" type="text" placeholder={`for example ${context.chosenCountry}`} onChange={() => context.filterResults(this.filterCountry)} ref={this.filterCountry} />
                        </div>
                        <div className="language">
                            <select ref={this.languagePreference} onChange={() => context.choseLanguage(this.languagePreference)}>
                                <option value="en" selected>EN</option>
                                <option value="de">DE</option>
                                <option value="es">ES</option>
                                <option value="fr">FR</option>
                                <option value="ja">JA</option>
                                <option value="it">IT</option>
                                <option value="br">BR</option>
                                <option value="pt">PT</option>
                                <option value="nl">NL</option>
                                <option value="hr">HR</option>
                                <option value="fa">FA</option>

                            </select>
                        </div>
                    </header>
                }
            </AppContext.Consumer>
        )
    }
}
