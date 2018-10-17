import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class App extends Component {

constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDLZsQZpA0kuXbj1CwquYIl0RK8OFxQNL0",
    authDomain: "chat-firebase-997b7.firebaseapp.com",
    databaseURL: "https://chat-firebase-997b7.firebaseio.com",
    projectId: "chat-firebase-997b7",
    storageBucket: "chat-firebase-997b7.appspot.com",
    messagingSenderId: "124761572198"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container">
            <Header title="Simple Chat App By Firebase" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <MessageBox db={firebase} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
