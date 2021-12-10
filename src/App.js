import React, { Component, useState } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import mapStateToProps from 'react-redux';
import { fetchSmurfs } from './actions'

const App = (props)=> {

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapState = (state) => {
  return state
}

export default connect(mapState,{ fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.