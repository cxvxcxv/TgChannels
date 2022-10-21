import Card from '../components/Card';
import axios from 'axios'
import {useState, useEffect} from 'react';

export default function Index() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    axios.get('api/getChannels').then((response)  => {
      setChannels(response.data); 
    }, [])
  }, [channels])
  return <div className='main'>
    {channels.map((channel) => (
      <Card  _id={channel._id} title={channel.title} all_users={channel.all_users} online_users={channel.online_users} total_messages={channel.total_messages}/>
    ))}
  </div>
}
