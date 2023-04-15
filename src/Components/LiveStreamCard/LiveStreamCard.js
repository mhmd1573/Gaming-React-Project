import './LiveStreamCard.css';



const LiveStreamCard = (props) => {
  return (
    <div class="col-lg-3 col-sm-6">
        <div class="item">
          <div class="thumb">
            <img src={props.image} alt=""/>
            <div class="hover-effect">
              <div class="content">
                <div class="live">
                  <a href="#">Live</a>
                </div>
                <ul>
                  <li><a href="#"><i class="fa fa-eye"></i> 1.2K</a></li>
                  <li><a href="#"><i class="fa fa-gamepad"></i> CS-GO</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="down-content">
            <div class="avatar">
              <img src={props.avatar} alt="" className='fixError' />
            </div>
            <span><i class="fa fa-check"></i> {props.name}</span>
            <h4>{props.status}</h4>
          </div> 
        </div>
      </div>
  )
}

export default LiveStreamCard