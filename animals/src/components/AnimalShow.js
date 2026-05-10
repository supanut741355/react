import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'



export const AnimalShow = (props) => {

  const svgMap = {
    bird,
    dog,
    cat,
    cow,
    gator,
    heart,
    horse
  }

  const {type} = props
  return (
    <div>
      <img alt="animal" src={svgMap[type]}/>
    </div>
  )
}