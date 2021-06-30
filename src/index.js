import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './store/reducers/todo_Reducers'


const store =createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(()=>console.log(store.getState().Todos))

ReactDOM.render(
  <Provider store={store}>
    <App/>
    </Provider>
  ,
  document.getElementById('root')
);

export default store;