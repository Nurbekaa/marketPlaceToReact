import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useState } from 'react';

function Card({items}) {

const {id, title, description, price, brand, images} = items;

const [showMore, setShowMore] = useState(false);

function handleMoreClick() {
    setShowMore(!showMore);
  }

  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < images.length-1){
      setIndex(index + 1);
    }
}

function handlePreviousClick() {
  if (index > 0) {
    setIndex(index - 1);
  }
}

    return (
        <div className="card_container" id={id}>
            <div className="img_slider">
                <button className='slider_btn' onClick={handleClick}>< KeyboardArrowLeftIcon fontSize='20px'/></button>
                <div className='img_container'><img className='img' alt="BBB" src={images[index]}></img></div>
                <button className='slider_btn' onClick={handlePreviousClick} disabled={index === 0}>< KeyboardArrowRightIcon fontSize='20px'/></button>
            </div>
            <div className='card_text'>
                <h4>{title}</h4>
                <h5>{price}</h5>
                <p>{brand}</p>

                <button className='btn_showmore' onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'More...'}
                </button>
                {showMore && <p>{description}</p>}
            </div>
        </div>
    )
};

export default Card;


