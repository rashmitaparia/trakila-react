import React from 'react';
import '../styles/index.scss';

import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Index from './pages/index';


const store = configureStore()

export default class App extends React.Component {

  
  render() {
    return (
         <Provider store={store}>

       <Index />
       </Provider>
    )
  }
}
