import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GoogleApiWrapper} from 'google-maps-react';
import * as actions from '../store/actions/resturant';
import Navbar from './Navbar';
import MapContent from './MapContent';
import TopContent from './TopContent';
import '../App.css';



class Content extends Component{
    componentDidMount(){
        this.props.fetchData()
    } 
    render(){
        return (
            !this.props.lat ?
                <div>loading...</div>
            
            :
                <div >
                    <Navbar {...this.props}/>
                    <TopContent {...this.props} />
                    <MapContent {...this.props} lat={this.props.lat} lng={this.props.lng} google={this.props.google}/>
                </div>

        )
        }
    }


const mapStateToProps = state =>{
    return {
        loading:state.loading,
        data:state.data,
        lat:+[state.data.lat],
        lng:+[state.data.lon],
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

export default connect(mapStateToProps,mapDispatchToProps)(GoogleApiWrapper({
    apiKey:'AIzaSyDu3X5XvbtwAIubnvQ0Hq625UMcu8l433k'
})(Content))