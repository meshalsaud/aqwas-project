import React, {Component} from 'react';
import scriptLoader from 'react-async-script-loader';
import '../App.css';

class MapContent extends Component{

    componentWillReceiveProps({isScriptLoadSucceed}){
        if(isScriptLoadSucceed){
          var map=new window.google.maps.Map(document.getElementById('map'),{
            zoom:10,
            center:new window.google.maps.LatLng(40.7127753,-74.0059728),
        
          });
          this.setState({map:map})
        }
        else{
          console.log('Failed to load Google Maps ')
          this.setState({requestWasSuccessful:false})
        }
      }
   
    render(){
        return(
            <div class="container-fluid p-0 m-0">
            

            <div id='map-container' role="application">
              <div id='map' role="region" aria-label='resturant' tabIndex="0"> </div>
              <div class="btn-group new-resturant" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn1 mr-1"><span className='icon-wrench fa-4x'></span></button>
                        <button type="button" class="btn btn2">اقترح</button>
                        
                </div>
            </div>
            
            
            
        </div>
        )
    }
}
export default scriptLoader(
    [`https://maps.googleapis.com/maps/api/js?key=AIzaSyDu3X5XvbtwAIubnvQ0Hq625UMcu8l433k&language=en&libraries=places`]
)
(MapContent);