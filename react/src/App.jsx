import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import JoinEvent from './components/JoinEvent.jsx'
import SubmitEvent from './components/SubmitEvent.jsx'


function JoinEventWrapper() {
  const { id } = useParams();
  return <JoinEvent eventId={id} />;
}

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/participer/:id" element={<JoinEventWrapper />}></Route>
        <Route path="/ajouter" element={<SubmitEvent />}></Route>
      </Routes>
    </>
  );
}

export default App
