# world-covid-statistics (Stencil Component)

# NOTE

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save world-covid-statistics
    $ yarn add world-covid-statistics
    
Once Installed please add the below custom elements in your react-app or angular-app

1. index.js

import { defineCustomElements } from "world-covid-statistics/loader"
defineCustomElements(window);

2. In your App Conmponent or Custom Component , Please add the below custom element
            
<covid-statistics parameter='["continent","country","population","cases","deaths","tests"]'></covid-statistics>


## Examples

Here is a simple example of world-covid-statistics being used in an react app:


```jsx index.js
import reportWebVitals from './reportWebVitals';
import { defineCustomElements } from "world-covid-statistics/loader"
const store = createStore(rootreducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Router /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
defineCustomElements(window);

App.js

function App() {
  
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <covid-statistics parameter='["continent","country","population","cases","deaths","tests"]'></covid-statistics>
    </div>
  );
}

ReactDOM.render(<App />, appElement);

You can find more examples in the `examples` directory, which you can run in a
local development server using `npm start` or `yarn run start`.

## Explanantion
<covid-statistics parameter='["continent","country","population","cases","deaths","tests"]'></covid-statistics> ## This component will show the statistics of COVID results per count as of today's date.

