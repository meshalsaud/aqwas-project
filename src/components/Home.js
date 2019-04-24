import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/resturant';
import {Link} from 'react-router-dom';
import '../App.css';

class Home extends Component{
    
    render(){
        return (
            <div className="content-cover justify-content-center container-fluid text-center d-flex p-3 mx-auto flex-column">
                <main role='main' className='container center p-3 m-5'>
                    <div class="icon-food big-icon fa-2x mb-5">
                    </div>
                    <h1 className='lead'>
                        وين ناكل؟
                    </h1>
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn1 mr-1"><span className='icon-wrench fa-4x'></span></button>
                        <Link to="/resturant">
                        <button type="button" class="btn" >اقترح</button>
                        </Link>

            
                    </div>
                    
                </main>   
            </div>
          
            
        )
    }
}
  const mapDispatchToProps = dispatch =>{
    return{
      fetchData:() => {
        dispatch(actions.fetchResturant())
      }
    }
  }
  
export default connect(null, mapDispatchToProps)(Home);