import './LiveStreams.css';
import { LiveStreamCard } from '../../Components/index';
import {MainButton} from '../../Components/index';
import {HeadingSection} from '../../Components/index';
import stream01 from '../../assets/images/stream-01.jpg';
import stream02 from '../../assets/images/stream-02.jpg';
import stream03 from '../../assets/images/stream-03.jpg';
import stream04 from '../../assets/images/stream-04.jpg';
import stream05 from '../../assets/images/stream-05.jpg';
import stream06 from '../../assets/images/stream-06.jpg';
import stream07 from '../../assets/images/stream-07.jpg';
import stream08 from '../../assets/images/stream-08.jpg';
import avatar01 from '../../assets/images/avatar-01.jpg';
import avatar02 from '../../assets/images/avatar-02.jpg';
import avatar03 from '../../assets/images/avatar-03.jpg';
import avatar04 from '../../assets/images/avatar-04.jpg';


import React from 'react'

const LiveStreams = () => {
  return (
    <div class="live-stream">
      
      <div class="heading-section">
    <h1>Live Streams</h1>
    </div>

    <div class="row">
      
        <LiveStreamCard image={stream01} avatar={avatar01} name="LahutaMalc" status="CS-GO 36 Hours Live Stream"/>
        <LiveStreamCard image={stream02} avatar={avatar02} name="LahutaMalc" status="OverWatch 21 Hours Live Stream"/>
        <LiveStreamCard image={stream03} avatar={avatar03} name="LahutaMalc" status="Warzone 6 Hours Live Stream"/>
        <LiveStreamCard image={stream04} avatar={avatar04} name="LahutaMalc" status="Pubg Mobile 10 Hour Live Stream"/> 
        <LiveStreamCard image={stream05} avatar={avatar01} name="LahutaMalc" status="Fortnite 20 Hours Live Stream"/>
        <LiveStreamCard image={stream06} avatar={avatar02} name="LahutaMalc" status="Battlefield 36 Hours Live Stream"/>
        <LiveStreamCard image={stream07} avatar={avatar03} name="LahutaMalc" status="CS-GO 36 Hours Live Stream"/>
        <LiveStreamCard image={stream08} avatar={avatar03} name="LahutaMalc" status="CS-GO 36 Hours Live Stream"/>
      <div class="col-lg-12">
        <div class="main-button">
            <MainButton txt='Load More Streams'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LiveStreams