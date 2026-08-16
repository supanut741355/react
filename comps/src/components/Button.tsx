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
  
  const className = classNames('px-5', 'py-3',  {
    'bg-blue-500 border border-blue-600 text-white': primary,
    'bg-black text-white': secondary,
    'bg-yellow-500': warn,
    'bg-green-500': success,
    'bg-red-500': danger,
    'rounded-xl ':rounded,
    'outline-1': outline
  })

  return (
    <div>
      <button className={className}>{children}</button>
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
