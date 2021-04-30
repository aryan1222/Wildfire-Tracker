import Map from './components/Map';
import {useEffect, useState} from 'react';
import Loader from './components/Loader';
import axios from 'axios';

function App() {

  const [eventData, setEventData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
        .then(res => {
          setEventData(res.data.events);
        })
        .catch(err => {
          console.log(err);
        })
    
      setLoading(false);
    }

    fetchEvents();
    console.log(eventData)
  }, [])

  return (
    <div>
        {isLoading ? <Loader/> : <Map eventData={eventData}/>}
    </div>
  );
}

export default App;
