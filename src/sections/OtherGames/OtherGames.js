import './OtherGames.css';

import { CardWrapper } from '../../Components/index';
import {StreamCard} from '../../Components/index';
import {MainButton} from '../../Components/index';
import {HeadingSection} from '../../Components/index';
import game01 from '../../assets/images/game-01.jpg';
import game02 from '../../assets/images/game-02.jpg';
import game03 from '../../assets/images/game-03.jpg';




const OtherGames = () => {
  return (
    <>
        <CardWrapper >
        <div class="other-games">
            <div class="row">
              <div class="col-lg-12">
                <HeadingSection title1='Other' title2=' Games'/>
              </div>

              <StreamCard image={game01} name='Dota 2' category='Sandbox' />
              <StreamCard image={game02} name='Dota 3' category='War' />
              <StreamCard image={game03} name='Fortnite' category='Strategy' />
              <StreamCard image={game01} name='Warzone' category='Shooting' />
              <StreamCard image={game02} name='Boom Beach' category='Sandbox' />
              <StreamCard image={game03} name='Pubg' category='Shooting' />  
            </div>
            <MainButton txt='Load More Games'/>
          </div>
        </CardWrapper>

    </>
  )
}

export default OtherGames