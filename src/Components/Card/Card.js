import './Card.css'


import {AiFillStar} from 'react-icons/ai'
import {CiInboxIn}  from 'react-icons/ci' 

const Card = (props) => {
  return (

    <div className='card'>
    <div className='card-img'>
        <img src={props.image} alt="" />
    </div>
    <div className='flex'>
        <h6>{props.title}</h6>
        <div className='flex2'>
        <p><AiFillStar/> <span>{props.rate}</span></p>
        </div>
    </div>
    <div className='flex'>
        <h6>{props.category}</h6>
        <div className='flex2'>
        <p><CiInboxIn/> <span>{props.rate2}</span></p>
        </div>
    </div>
    </div>
  
  )
}

export default Card