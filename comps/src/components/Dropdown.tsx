import { useState, useEffect, useRef } from "react"
import {GoChevronDown} from 'react-icons/go'
import Panel from "./Panel"


function Dropdown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false)

  const divEl = useRef(null)

  useEffect(() => {
    const handler = (event) => {

      if (!divEl.current) {
        return
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handler, true)

    return () => {
      document.removeEventListener('click', handler, true) 
    }
  },[])

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen)
  }

  const handleOptionClick = (option) => {
    onChange(option)
    setIsOpen(false)
  }

  const renderOptions = options.map((option, index) => {
    return  <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)} key={index} >
        {option.label}
    </div>
  })


  return (
    <div  ref={divEl} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  )
}

export default Dropdown 