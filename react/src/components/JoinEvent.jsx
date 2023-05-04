
import { useState } from 'react';
import config from '../../config.json'
import { useNavigate } from 'react-router-dom';


function JoinEvent({ eventId }){


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
    e.preventDefault();

        const response = await fetch(`${config.api}/api/join-event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                phone,
                event_id: eventId, 
            }),
        });

        if (response.ok) {
            setName('');
            setPhone('');
            navigate('/')
        } else {
            console.log(response);
        }
    }


    return (
        <div className="container mt-5 px-4">
            <h1 className='mb-5'>Je m'inscris</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Téléphone</label>
                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-warning">Valider</button>
            </form>
        </div>
    )
}

export default JoinEvent;