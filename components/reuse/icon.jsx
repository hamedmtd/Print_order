import React from 'react'
import PropTypes from 'prop-types'

export default function Icon(props) {
    return (
        <i title={props.title || ''}
            style={{ fontSize: props.size || 24 }}
            className={`${props?.class || ''} ${props?.className || ''} demo-icon icon-${props.name}`}
        />
    )
}

Icon.propTypes = {
    name: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    size: PropTypes.any,
    color: PropTypes.string,
    margin: PropTypes.string,
    style: PropTypes.object,
}

Icon.defaultProps = {
    name: '',
    size: null,
    color: 'white',
    margin: '0 10px',
    style: {},
}

