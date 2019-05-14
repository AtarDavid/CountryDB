import React from 'react';
import AppContext from './AppContext';
import Header from './Header';
import Main from './Main';
import CountryList from './CountryList';
import "../assets/App.css"

class App extends React.Component {

  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.results &&
          <>
            <Header />
            <CountryList />
            <Main />
          </>
        }
        {/* {console.log(context.results)
          (
          )} */}
      </AppContext.Consumer>)
  }
}
export default App;
