import './GamingLibraryCard.css';



export const GamingLibraryCard = (props) => {
  return (
    
<div class="item">
                <ul>
                  <li><img src={props.image} alt="" class="templatemo-item"/></li>
                  <li><h4>{props.category}</h4><span>{props.name}</span></li>
                  <li><h4>Date Added</h4><span>{props.date}</span></li>
                  <li><h4>Hours Played</h4><span>{props.time}</span></li>
                  <li><h4>Currently</h4><span>{props.status}</span></li>
                  <li>
                    <div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div>
                  </li>
                </ul>
              </div>



  )
}




export default GamingLibraryCard
