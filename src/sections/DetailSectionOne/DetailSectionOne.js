import './DetailSectionOne.css'

import {AiFillStar} from 'react-icons/ai'
import {CiInboxIn}  from 'react-icons/ci' 
import {BiServer}   from 'react-icons/bi'
import {FaGamepad} from 'react-icons/fa'
import detail01 from '../../assets/images/details-01.jpg'
import detail02 from '../../assets/images/details-02.jpg'
import detail03 from '../../assets/images/details-03.jpg'

const DetailSectionOne = () => {
  return (
    <div class="game-details">
            <div class="row">
              <div class="col-lg-12">
                <h2>Fortnite Details</h2>
              </div>
              <div class="col-lg-12">
                <div class="content">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="left-info">
                        <div class="left">
                          <h4>Fortnite</h4>
                          <span>Sandbox</span>
                        </div>
                        <ul>
                          <li><AiFillStar className='gold'/> 4.8</li>
                          <li><CiInboxIn className='primary'/> 2.3M</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="right-info">
                        <ul>
                          <li><AiFillStar className='gold'/> 4.8</li>
                          <li><CiInboxIn className='primary'/> 2.3M</li>
                          <li><BiServer className='primary'/> 36GB</li>
                          <li><FaGamepad className='primary'/> Action</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <img className='detail-img' src={detail01} alt="" />
                    </div>
                    <div class="col-lg-4">
                      <img className='detail-img' src={detail02} alt="" />
                    </div>
                    <div class="col-lg-4">
                      <img className='detail-img' src={detail03} alt="" />
                    </div>
                    <div class="col-lg-12 details">
                        
                      <p className='detail-text'>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout to and to get more info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                    </div>
                    <div class="col-lg-12">
                      <div class="main-border-button">
                        <a href="#">Download Fortnite Now!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default DetailSectionOne