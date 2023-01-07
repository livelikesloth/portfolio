import ReactAudioPlayer from "react-audio-player";
import Sound_1 from './static/audio/4.mp3'
function Audio() {
  
  return (
    <div> 
      <ReactAudioPlayer src={Sound_1} autoPlay  id="audio" volume={0.4} loop />
    </div>
  ); 
}
export default Audio;
