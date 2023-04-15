import './Clips.css';
import { AiFillEye, AiFillPlayCircle } from 'react-icons/ai';

const Clips = (props) => {
  return (
    
    <div class="col-lg-3 col-sm-6">
    <div class="item">
      <div class="thumb">
        <img src={props.image} alt=""/>
        <a href={props.link} target="_blank"><AiFillPlayCircle/></a>
      </div>
      <div class="down-content">
        <h4>{props.Clip}</h4>
        <span><AiFillEye/> 250</span>
      </div>
    </div>
  </div>
  )
}

export default Clips