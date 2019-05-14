import React from 'react';
import AppContext from './AppContext';
import Header from './Header';
import Main from './Main';
import CountryList from './CountryList';

class App extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.results &&
          <>
            <Header />
            <div className="content">
              <CountryList />
              <Main />
            </div>
          </>
        }
      </AppContext.Consumer>)
  }
}
export default App;
