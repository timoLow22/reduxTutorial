import React from 'react';
import {AppRegistry} from 'react-native';

//import the Provider as you will need to pass the store for some redux stuff hahahaha 
import { Provider } from 'react-redux';

//import the following  stuff frome redux too. combineReducers is just there for you to combine many reducers in the long run
import { combineReducers, createStore } from 'redux';

//then import the reducer file you created
import IncrementDecrementReducer from './src/reducers/IncrementDecrementReducer';


import App from './App';


//first combine all the reducers
const reducers = combineReducers({
    //just declare a random variable name but make sure you remember what name you gave it as you will need to use it later
    // the variable name is used to store your reducer and the combineReducer will handle the rest
    incrementDecrement: IncrementDecrementReducer
})

//Then create a store using the createStore function (duh) and keep it in a variable
store = createStore(reducers),

//finally, surround the App with your provider tags and pass the variable you used to store your store 
appRootComponent = () => (<Provider store={store}><App/></Provider>)

AppRegistry.registerComponent('reduxBoilerPlate', () => appRootComponent);
