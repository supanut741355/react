import './AnimalShow.css'
import { useState } from 'react'
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'



export const AnimalShow = (props) => {
  const [hearts, setHeart] = useState(0)
  
  const svgMap = {
    bird,
    dog,
    cat,
    cow,
    gator,
    heart,
    horse
  }

  const handlerHeartClick = () => {
    setHeart(hearts + 1)
  }

  const {type} = props
  return (
    <div className='animal-show'>
      <img 
      className='animal'
      alt="animal" src={svgMap[type]} 
      onClick={handlerHeartClick}
      />
      <img 
        className='heart'
        alt='heart' 
        src={heart} 
        style={{
          width: 10 + 10 * hearts +  'px'
        }}
      />
    </div>
  )
}