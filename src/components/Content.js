import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/resturant';
import Navbar from './Navbar';
import MapContent from './MapContent';
import TopContent from './TopContent';
import '../App.css';


class Content extends Component{
    componentWillMount(){
        this.props.fetchData()
    }
    render(){
        return (
            <div >
                <Navbar {...this.props}/>
                <TopContent {...this.props} />
                <MapContent {...this.props}/>
            </div>

        )
    }
}
const mapStateToprops = state =>{
    return {
        loading:state.loading,
        data:state.data,
        error:state.error
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchData:() => {
            dispatch(actions.fetchResturant())
          }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Content);