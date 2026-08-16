import PropTypes from 'prop-types'
import classNames  from 'classnames'
function Button({
  children,
  primary,
  secondary,
  success,
  warn,
  danger,
  rounded,
  outline
}) {
  
  const finalClassName = classNames('px-5', 'py-3', 'border', 'text-white',  {
    'bg-blue-500': primary,
    'bg-black': secondary,
    'bg-yellow-500': warn,
    'bg-green-500': success,
    'bg-red-500': danger,
  })

  return (
    <div>
      <button className={finalClassName}>{children}</button>
    </div>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warn, danger}) => {
    const count = 
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warn) +
      Number(!!success) +
      Number(!!danger) 

    if(count > 1) {
      return new Error('only one')
    }
  }
}

export default Button
