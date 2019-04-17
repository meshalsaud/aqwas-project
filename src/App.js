import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import * as actions from './store/actions/resturant';

class App extends Component {
  componentDidMount(){
    this.props.fetchData()

  }
 
  render() {
  
    return (
      <div className="App" >
        <div>
 
         <h1>
           {this.props.name}
         </h1>
         <h2>
           {this.props.age}
         </h2>
           <h2>
             {this.props.loading}
           </h2>
         
    </div>
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
