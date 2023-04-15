import './GamingLibrary.css';

import {CardWrapper, MainButton} from '../../Components/index';
import {GamingLibraryCard} from '../../Components/index';


import game01 from '../../assets/images/game-01.jpg';
import game02 from '../../assets/images/game-02.jpg';
import game03 from '../../assets/images/game-03.jpg';


const GamingLibrary = () => {
  return (
   
    <CardWrapper>
    
    <div class="gaming-library">
            <div class="col-lg-12">
              <div class="heading-section">
              <h4><span className='txt-one'>Your Gaming </span>Library</h4>
              </div>

              <GamingLibraryCard category="Dota2" image={game01} name='Sandbox' date='22/06/2036' time='740 H 52 Mins' status='Downloaded'/>
              
              <GamingLibraryCard category="Warzone" image={game02} name='Sandbox' date='22/06/2036' time='740 H 52 Mins' status='Downloaded'/>

              <GamingLibraryCard  category="Fortnite"image={game03} name='Sandbox' date='22/06/2036' time='740 H 52 Mins' status='Downloaded'/>


            </div>
            <div class="col-lg-12">
                <MainButton txt="View Your Library"/>
            </div>
          </div>
       
        
</CardWrapper>




  )
}

export default GamingLibrary