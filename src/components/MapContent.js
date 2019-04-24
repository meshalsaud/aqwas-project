import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import '../App.css';


class MapContent extends Component{
    
    render(){
        
        const {google, lat, lng} = this.props
        return(
        
                <div class="container-fluid p-0 m-0">
                <div id='map-container' role="application">
                    <div id='map' role="region" aria-label='resturant' tabIndex="0">
                        <Map
                        google={google}
                        zoom={18}
                        center={{
                                lat:lat, lng:lng
                            }}
                        initialCenter={{
                            lat:lat, lng:lng
                        }}
                        >
                        <Marker                
                        position={{lat:lat, lng:lng}}
                        />

                        </Map>
                    </div>
                    <div class="btn-group new-resturant" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn1 mr-1"><span className='icon-wrench fa-4x'></span></button>
                            <button type="button" class="btn btn2" onClick={this.props.fetchData} >اقتراح اخر</button>       
                    </div>
                </div> 
            </div> 
            
             
        )
    }
}

export default (GoogleApiWrapper({
    apiKey:("AIzaSyDu3X5XvbtwAIubnvQ0Hq625UMcu8l433k")
})(MapContent));
