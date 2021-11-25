import React, { useContext, useState } from 'react'
import { ClassNames } from 'functions'
import { Context } from 'provider'
import PropTypes from 'prop-types'
import { Icon } from '.'

export default function Input(props) {
    const { is_password, type, error, required, borderClass, placeholder, readOnly, container_class, icon, label, svg_icon, is_textarea } = props
    const { colors } = useContext(Context)
    const [secure, setSecure] = useState(is_password)

    const PressIn = () => {
        setSecure(false)
    }

    const PressOut = () => {
        setSecure(true)
    }

    if (is_password) {
        type = secure ? 'password' : 'text'
    }

    return (
        <div
            className={ClassNames(
                `w-full my-2`,
                readOnly ? 'opacity-70' : '',
                container_class || ''
            )}
            style={container_class || {}}
        >
            {container_class &&
                <label htmlFor={'email'} className={'block text-sm text-gray-400'}>{label}</label>
            }
            <div className={'relative rounded'}>
                {icon &&
                    <div className={'absolute inset-y-0 left-0 pl-1.5 flex items-center pointer-events-none'}>
                        {/* <FontAwesomeIcon size={'1x'} icon={icon} color={'#C0C6CD'}/> */}
                        <Icon name={icon} className={'text-gray-400'} size={18} />
                    </div>
                }

                {svg_icon &&
                    <div className={'absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'}>
                        <svg className='h-5 w-5 ' style={{ color: '#67686B' }} xmlns='http://www.w3.org/2000/svg' fill='none'
                            viewBox='0 0 24 24' stroke='currentColor'>
                            {svg_icon}
                        </svg>
                    </div>
                }

                {is_textarea &&
                    <div className='mt-1'>
                        <textarea
                            name={'comment'}
                            rows={'4'}
                            className={`shadow-sm focus:ring-${colors.blue}-500 focus:border-gray-200  mt-1 block w-full sm:text-smborder-gray-300 rounded-md`}
                            placeholder={''}
                            {...props}
                        >
                        </textarea>
                    </div>
                }

                {!is_textarea &&
                    <input
                        placeholder={placeholder}
                        {...props}
                        type={type}
                        className={ClassNames(
                            `h-10 block w-full rounded-md sm:text-sm`,
                            (icon || svg_icon) ? 'pl-10' : '',
                            is_password ? 'pr-10' : '',
                            error ? 'border-red-300' : borderClass || 'border border-gray-300 focus:ring-0 focus:border-gray-200', // border-gray-300 ring-${colors.blue}-500
                            error ? 'focus:ring-red-500 focus:border-red-200' : `focus:ring-0 focus:border-gray-200`,
                            className || ''
                        )}
                    />
                }

                {required &&
                    <span className={'text-base font-semibold absolute right-3 top-3 text-red-500'}>*</span>
                }

                {is_password &&
                    <button
                        className={'absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer'}
                        type={'button'}
                        onMouseDown={PressIn}
                        onMouseUp={PressOut}
                        style={{ border: 0, background: 'transparent' }}>
                        {/* <FontAwesomeIcon size={'1x'} icon={secure ? faEye : faEyeSlash} color={'#C0C6CD'}/> */}
                        <Icon name={secure ? 'eye' : 'eye-off'} className='text-gray-300' />
                    </button>
                }
            </div>

            {error &&
                <p className={'mt-2 text-sm m-0 p-0 text-red-600'} id={'email-error'}>{error}</p>
            }
        </div>
    )
}

Input.propTypes = {
    input_props: PropTypes.object,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    icon: PropTypes.string,
    is_password: PropTypes.bool,
    size: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    iconsize: PropTypes.string,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    inputstyle: PropTypes.object,
    container_style: PropTypes.object,
    type: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string,
}

Input.defaultProps = {
    input_props: {},
    onChange: () => {
    },
    // is_password: false,
    required: false,
    style: {},
    inputstyle: {},
    container_style: {},
    size: null,
    value: '',
    iconsize: null,
    readOnly: false,
    // secure: false,
    type: 'text',
    placeholder: '',
    name: 'text',
    error: '',
}
