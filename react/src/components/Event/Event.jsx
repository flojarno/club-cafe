import { Link } from "react-router-dom"
import moment from 'moment';
import './Event.css'

function Event({ event }) {
    const formattedDate = moment(event.date).format('DD-MM-YYYY');
  
    return (
      <div className="grid-container border-bottom mt-4">
        <div className="item1">{formattedDate}</div>
        <h3 className="item2">{event.name}</h3>
        <Link to={{ pathname: `/participer/${event.id}`}} className="btn btn-warning btn-sm item3">Je participe</Link>
        <p className="item4">{event.description}</p>
      </div>
    );
  }
  
  
export default Event;


  