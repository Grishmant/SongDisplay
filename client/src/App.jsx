import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import axios from 'axios'
import { PORT, bufferToImage } from '../../server/config.js';
import DisplayElement from './components/DisplayElement.jsx';

function App() {
  const [songList, setSongList] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:${PORT}`).then(value => setSongList(value.data)).catch(err => console.log(err.message));

  }, [songList])

  return (
    <div>
    <header>SongDisplay</header>
    {songList.map(song => (
      <DisplayElement key={song._id} title={song.title} artist={song.artist} album={song.album} artwork="https://upload.wikimedia.org/wikipedia/en/d/d7/In_Search_of_Sunrise_1.jpeg" />))}
    </div>
  )
}

export default App