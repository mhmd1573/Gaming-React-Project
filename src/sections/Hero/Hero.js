import './Hero.css'

import {MainButton} from '../../Components/index';

const Hero = () => {
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h6 className='hero-subtitle'> Welcome To Cybrog</h6>

           

            <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>

                

            </div>
            <MainButton link="/" txt="Browse Now"/>
    </div>
  )
}

export default Hero