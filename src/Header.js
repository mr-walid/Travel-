
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
import './index.css'




function Header(){


    return(

         <div className="header-container">
             <FontAwesomeIcon  icon={faEarthAfrica}/>
             <h3>My travel Journal</h3>
         </div>
        
    )

}

export default Header