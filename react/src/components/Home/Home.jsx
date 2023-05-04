import { useContext } from "react";
import { EventContext } from '../../EventContext'
import Event from "../Event/Event";
import { Link } from "react-router-dom"
import './Home.css'

function Home(){

    const { events } = useContext(EventContext)
    
    return(
        <div>
            <div className="hero d-flex flex-column align-items-center justify-content-center">
                <h1 className="pb-3 text-center text-white">Café associatif avec évènements participatifs</h1> 
                <Link to="/ajouter" className="btn btn-lg btn-warning">Proposer un évènement</Link>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h2 className="my-5">TOUS LES EVENEMENTS</h2>
                <div className="event-list px-4">
                    {events.map(event => {
                    return <Event key={event.id} event={event} />;    
                    })}
                </div>
            </div>          
        </div>
    )
}
  
  
export default Home;
  
  
  