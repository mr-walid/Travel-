import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fontawesome} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'



function Body(props)

{

       
        return (
        <div className="body-container">

           <div className="card">
               <div className="img">
                   <img src= {`./image/${props.item.imageUrl}`} />
               </div>
                <div className="info">
                <div className="loc">
                    <FontAwesomeIcon icon={faLocationDot}  className="loaction"/>
                <h4>{props.item.location}</h4>
                <a href={props.item.googleMapsUrl}>View on google map</a>
                </div>
                <h2>{props.item.title}</h2>
                <span>{props.item.startDate}</span>
                <p>{props.item.description}</p>
           </div>
           </div>

        </div>
    )

    }

    

 
export default Body