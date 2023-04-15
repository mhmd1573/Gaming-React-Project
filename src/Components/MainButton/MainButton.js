import './MainButton.css';


const MainButton = (props) => {
  return (
    <div class="main-button">
                <a href={props.link}>{props.txt}</a>
              </div>
  )
}

export default MainButton