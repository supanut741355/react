import Button from "../components/Button"
import { AiFillAliwangwang, AiFillAlert } from "react-icons/ai";
function ButtonPage() {

  const handleClick = () => {
    console.log('yoyo')
  } 

  const handleMouseOver = () => {
    console.log('hihi')
  }

  return (
    <>
      <Button primary secondary onClick={handleClick} onMouseOver={handleMouseOver}>
        <AiFillAliwangwang />
        Primary
      </Button>
      <Button secondary rounded onClick={handleClick}>Secondary</Button>
      <Button success rounded outline>Success</Button>
      <Button warn>
        <AiFillAlert />
        Warn
      </Button>
      <Button danger outline>Danger</Button>
    </>
  )
}

export default ButtonPage
