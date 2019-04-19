import React, { Component } from 'react';
import {connect} from 'react-redux';
import BaseRouter from './components/Routes';
import * as actions from './store/actions/resturant';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchData()

  }
 
  render() {
  
    return (
      <div {...this.props} >
        <BaseRouter />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    loading:state.loading,
    name:state.data.name,
    age:state.data.age,
    error:state.error
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchData:() => {
      dispatch(actions.fetchResturant())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
