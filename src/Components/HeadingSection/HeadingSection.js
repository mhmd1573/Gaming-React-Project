import './HeadingSection.css';



const HeadingSection = (props) => {
  return (
    <div class="heading-section">
    <h4><span className='txt-one'>{props.title1}</span>{props.title2}</h4>
    </div>
  )
}

export default HeadingSection