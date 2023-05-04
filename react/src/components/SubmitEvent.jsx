import { useState } from 'react';
import config from '../../config.json';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { EventContext } from '../EventContext';


function SubmitEvent() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { refetchEvents } = useContext(EventContext);


  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`${config.api}/api/submit-event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        date,
        description,
      }),
    });

    if (response.ok) {
      setName('');
      setDate('');
      setDescription('');
      navigate('/')
      refetchEvents(); // Fetch the events again after successful form submission

    } else {
        console.log(response);
    }
  }

  return (
    <div className="container mt-5 px-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom de l'évènement
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitEvent;
