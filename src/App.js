import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SortingAlgorithmsMainView from "./ui/sortingAlgorithms/SortingAlgorithmsMainView";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Helpful functions
        </header>
          <SortingAlgorithmsMainView/>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

 const mapDispatchToProps = dispatch => ({
 });

export default connect(mapStateToProps, mapDispatchToProps) (App);
