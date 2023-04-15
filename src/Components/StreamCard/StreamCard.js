import './StreamCard.css'
import {AiFillStar} from 'react-icons/ai'
import {CiInboxIn}  from 'react-icons/ci' 


const StreamCard = (props) => {
  return (
    <>
    <div class="col-lg-6">
                <div class="item">
                  <img src={props.image} alt="" class="templatemo-item"/>
                  <h4>{props.name}</h4><span>{props.category}</span>
                  <ul>
                    <li><AiFillStar className='try'/> 4.8</li>
                    <li><CiInboxIn className='catch'/> 2.3M</li>
                  </ul>
                </div>
              </div>
    </>
  )
}

export default StreamCard