// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
    sayHello() {
        alert('Hello Elisa!');
    }

    render() {
        return (
            <button onClick={this.sayHello}>
                Click me!
            </button>
        );
    }
}

export default App;
