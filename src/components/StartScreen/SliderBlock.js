import './SliderBlock.scss';

const SliderBlock = (props) =>{
    return(
            <div>
                <img src={props.src} alt = ''/>
                <div className = 'slider-block__text1'>{props.text1}</div>
                <p className = 'slider-block__text2'>{props.text2}</p>  
                <button className = {`slider-block__button ${props.buttonColor}`}>Подробнее</button> 
            </div>   
        )
}

export default SliderBlock