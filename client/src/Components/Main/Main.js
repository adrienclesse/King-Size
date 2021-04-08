import React from 'react'
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";


class  Main extends React.Component {

    render() {
      return (
      
            <div className='main-container container--narrow'> 
               <div className="world">
                 <img className="world-image" src="images/Optimized-world3.jpg" alt="world map image"/>
                 </div>

              <div className='main-body'>    
                  <div className='main-divtext'>
                    <p className='main-text'>
                    <span>Discover</span><br/> our language<br/> activities with<br/> <strong> Speacty!</strong>   
                    </p>
                    <div className="main-divbutton">
                   <Link className="main-button"to='/Login'>JOIN US</Link>
                  </div>
                  </div>
              </div>
            </div>
        
         

     
    );
  }
  }

  
  
  export default Main;