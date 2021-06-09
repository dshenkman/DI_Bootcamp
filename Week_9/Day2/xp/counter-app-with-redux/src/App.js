import React from 'react';
import Counter from './components/Counter'

import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {reducer} from './reducers/index';
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
