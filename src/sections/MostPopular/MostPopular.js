import './MostPopular.css'
import {AiFillStar} from 'react-icons/ai'
import {CiInboxIn}  from 'react-icons/ci' 
import {Card,CardWrapper} from '../../Components/index'
import {MainButton} from '../../Components/index'
import {HeadingSection} from '../../Components/index'
import popular01 from '../../assets/images/popular-01.jpg'
import popular02 from '../../assets/images/popular-02.jpg'
import popular03 from '../../assets/images/popular-03.jpg'
import popular04 from '../../assets/images/popular-04.jpg'
import popular05 from '../../assets/images/popular-05.jpg'
import popular06 from '../../assets/images/popular-06.jpg'
import popular07 from '../../assets/images/popular-07.jpg'
import popular08 from '../../assets/images/popular-08.jpg'




const MostPopular = () => {
  return (
      
      <CardWrapper>
        <HeadingSection  title1='Most' title2=' Popular'/>

               
                <div className='card-itemss'>
              
                <Card  title="Fortnite"   rate="4.8"    category="Sandbox"   rate2="2.3M"   image={popular01}     />
                <Card  title="Pubg"       rate="4.8"     category="Battle S"  rate2="2.3M"  image={popular02}                         />
                <Card  title="Dota2"      rate="4.8"      category="Steam-X"   rate2="2.3M"  image={popular03}       />
                <Card  title="CS-Go"      rate="4.8"      category="Legendary"  rate2="2.3M"  image={popular04}     />
                <Card  title="Vikings"    rate="4.8"        category="Legendary"  rate2="2.3M" image={popular05}    />
                <Card  title="Eagles Fly" rate="4.8"       category="Matrix " rate2="2.3M"      image={popular06} />
                <Card  title="Warface"    rate="4.8"        category="Max 3D"   rate2="2.3M"    image={popular07}/>
                <Card  title="Warcraft"   rate="4.8"         category="Legend"  rate2="2.3M"   image={popular08} />

                </div>
               


                <div className="btn-design">
                <MainButton link="/"  txt="Discover Popular" />
            </div>
               
        </CardWrapper>
  )
}

export default MostPopular