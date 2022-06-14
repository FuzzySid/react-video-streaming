import { useRef } from 'react';
// import Webcam from "react-webcam";


export default function WebcamComponent(){
    const videoRef = useRef(null);  

    const playVideo = () => {
        navigator.mediaDevices
          .getUserMedia({ video: { width: 480 } })
          .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
          })
          .catch(err => {
            console.error("error:", err);
          });
      };

    const stopVideo = () => {
        let video = videoRef.current;
        video.pause();
    }
    return(
        <div>
            <video ref={videoRef} />
            <div className="contols">
                <button onClick={playVideo}>Play</button>
                <button onClick={stopVideo}>Pause</button>
            </div>
            {/* <Webcam/> */}
            
        </div>
    )

}