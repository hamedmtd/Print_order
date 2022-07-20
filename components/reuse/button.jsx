import React, { useContext } from 'react'
import { ClassNames } from 'functions'
import PropTypes from 'prop-types'
import { Context } from 'provider'
import { Spinner, Icon } from '.'

export default function Button(props) {
    const { icon, className, title, color, style, loading, type, disable, onClick, disableClick } = props
    const { colors } = useContext(Context)

    const handleClick = () => {
        if (disable && disableClick) {
            disableClick()
        }
        if (!disable && !loading) {
            onClick()
        }
    }

    return (
        <button
            style={{ ...style }}
            onClick={handleClick}
            type={type}
            className={ClassNames(
                className,
                disable && 'bg-gray-400',
                'flex items-center justify-center'
            )}
        >
            {loading ? <Spinner color={'white'} />
                :
                <>
                    {icon && <Icon color={color} name={`icon-${icon}`} />}
                    {title && title}
                </>
            }
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    className: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    loading: PropTypes.bool,
    type: PropTypes.string,
    disable: PropTypes.bool,
    onClick: PropTypes.func,
    disableClick: PropTypes.func,
}

Button.defaultProps = {
    icon: '',
    className: '',
    title: '',
    color: 'white',
    style: {},
    loading: false,
    type: 'button',
    disable: false,
    onClick: () => null,
    disableClick: () => null,
}
