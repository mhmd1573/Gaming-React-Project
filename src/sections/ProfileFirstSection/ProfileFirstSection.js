import './ProfileFirstSection.css';
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiFillEye}  from 'react-icons/ai'
import NavItem , {NavItemDropdown} from '../../Components/NavItem/NavItem'
import { HeadingSection } from '../../Components';
import { Clips } from '../../Components';
import profile from '../../assets/images/profile.jpg'
import clip01 from '../../assets/images/clip-01.jpg'
import clip02 from '../../assets/images/clip-02.jpg'
import clip03 from '../../assets/images/clip-03.jpg'
import clip04 from '../../assets/images/clip-04.jpg'
const ProfileFirstSection = () => {
  return (
    <div class="row">
    <div class="col-lg-12">
      <div class="main-profile ">
        <div class="row">
          <div class="col-lg-4">
            <img src={profile} alt="" />
          </div>
          <div class="col-lg-4 align-self-center">
            <div class="main-info header-text">
              <span>Offline</span>
              <h4>Alan Smithee</h4>
              <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
              <div class="main-border-button">
                <a href="#">Start Live Stream</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 align-self-center">
            <ul>
              <NavItem>Games Downloaded <span>3</span> </NavItem>
              <NavItem>Friends Online <span>16</span></NavItem>
              <NavItem>Live Streams <span>None</span></NavItem>
              <NavItem>Clips <span>29</span></NavItem>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="clips">
              <div class="row">


                <div class="col-lg-12">
                  <div class="heading-section">
                    <HeadingSection title1="Popular" title2=" Clips"/>
                  </div>
 </div>

                <Clips image={clip01} link="https://www.youtube.com/watch?v=r1b03uKWk_M" Clip="First Clip"/>    
                <Clips image={clip02} link="https://www.youtube.com/watch?v=r1b03uKWk_M" Clip="Second Clip"/>
                <Clips image={clip03} link="https://www.youtube.com/watch?v=r1b03uKWk_M" Clip="Third Clip"/>
                <Clips image={clip04} link="https://www.youtube.com/watch?v=r1b03uKWk_M" Clip="Fourth Clip"/>
                
                <div class="col-lg-12">
                  <div class="main-button">
                    <a href="#">Load More Clips</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileFirstSection