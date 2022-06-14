import './App.css';
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';
import Webcam from './Webcam';

const VideoUrl='https://www.twitch.tv/videos/748915155';

function App() {
  const [page,setPage]=useState('player')
  const [videoState,setVideoState]=useState({
    ready:null,
    playing:null,
    duration:null,
    paused:null
  })
  const updateVideoState=(videoStateProp,videoStateVal)=>{
    setVideoState({
      ...videoState,
      [videoStateProp]:videoStateVal
    })
  }
  return (
    <div className="App">
      <h1>React Video Streaming</h1>
      <div className="container">
        <div className="page-buttons">
            <button onClick={()=>setPage('player')}>Player</button>
            <button onClick={()=>setPage('webcam')}>Webcam</button>
        </div>
        {
          page==='player' ? 

          <div className="player-container">
            <VideoPlayer
              url={VideoUrl}
              showControls={true}
              updateVideoState={updateVideoState}
              pictureInPictureMode={true}
            />
            <div>
              <p>Ready: {videoState?.ready?.toString()}</p> 
              <p>Playing: {videoState?.playing?.toString()}</p>
              <p>Duration: {videoState?.duration?.toString()} seconds</p>
              <p>Paused: {videoState?.paused?.toString()}</p>
            </div>
          </div>
          :
          <div className="webcam-container">
            <Webcam/>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
