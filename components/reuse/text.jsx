import React from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from 'functions'

export default function Text(props) {
    const { children, className, size, bold, weight, color } = props

    return (
        <span className={ClassNames(className,
            size ? `text-${size}` : 'text-sm',
            weight ? `font-${weight}` : bold ? `font-semibold` : 'font-medium',
            // 'block',
            // color ? `text-${color}` : 'text-gray-700' , 
        )}
        >
            {children}
        </span>
    )
}

Text.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    bold: PropTypes.bool,
    weight: PropTypes.bool,
    color: PropTypes.string,
}

Text.defaultProps = {
    className: '',
    size: null,
    bold: null,
    weight: null,
    color: '',
}
