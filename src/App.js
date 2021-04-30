import Map from './components/Map';
import {useEffect, useState} from 'react';

function App() {

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();
      //console.log(events);

      setEventData(events);
    }

    fetchEvents()
    console.log(eventData)
  }, [])

  return (
    <div>
        <Map eventData={eventData} />
    </div>
  );
}

export default App;
