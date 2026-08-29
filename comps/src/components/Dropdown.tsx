import { useState } from "react"
import {GoChevronDown} from 'react-icons/go'

function Dropdown({options, value, onChange}) {
  const [isOpen, setIsOpen] = useState(false)

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
    <div className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointer border border-white rounded p-3 shadow bg-white w-full" onClick={handleClick}>
        {value?.label || 'select...'}
        <GoChevronDown className="text-lg" />
      </div>
      <div>{isOpen && <div className="absolute top-full border rounded p-3 shadow  border-white bg-white w-full">{renderOptions}</div>}</div>
    </div>
  )
}

export default Dropdown 