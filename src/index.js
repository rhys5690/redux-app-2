import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAK9Bt-kwADsBF4mYulx4ctDiD2mj_x2Qg';

//Create a new component and this component should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

//Take this component's HTML and render it in the DOM (on the page)
ReactDOM.render(<App/>, document.querySelector('.container'));
