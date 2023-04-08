import React from 'react'
import PropTypes from 'prop-types'
// version is going to be primary or secondary and any thins which is peratined tot he button
function Button({ children, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: true
}


Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Button