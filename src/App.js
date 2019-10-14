import React, { Component } from 'react';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';
import SortingAlgorithmsMainView from "./ui/sortingAlgorithms/SortingAlgorithmsMainView";

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  };


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
  simpleAction: () => dispatch(simpleAction()),
 });

export default connect(mapStateToProps, mapDispatchToProps) (App);
