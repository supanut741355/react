import PropTypes from 'prop-types'
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
  

  return (
    <div>
      <button className="px-5 py-1.5 bg-blue-500 border border-blue-600 text-white">{children}</button>
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
