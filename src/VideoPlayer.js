import ReactPlayer from "react-player"

export default function VideoPlayer({
    url,
    showControls,
    width=640,
    height=360,
    rootPlayerStyles,
    pictureInPictureMode=false,
    updateVideoState
}){
    const handleReady=()=>{
        console.log('ready')
        updateVideoState('ready',true)
    }

    const handlePlay=()=>{
        console.log('playing')
        updateVideoState('playing',true)
    }

    const handleDuration=(duration)=>{
        updateVideoState('duration',duration)
    }

    const handlePause=()=>{
        console.log('paused')
        updateVideoState('paused',true)
    }

    return(
         <ReactPlayer 
            url={url} 
            controls={showControls} 
            width={width} 
            height={height}
            style={rootPlayerStyles}
            pip={pictureInPictureMode}
            onReady={handleReady}
            onPlay={handlePlay}
            onDuration={handleDuration}
            onPause={handlePause}
        /> 
    )
}