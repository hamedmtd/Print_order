import React from 'react'
import { ClassNames } from 'functions'

export default function SvgIcon(props) {
    const { type = 'search', color = 'gray', width = 'w-10', height = 'h-10', } = props

    return (
        <div className={ClassNames(width, height, 'flex items-center justify-center p-2')}>
            {type === 'search' &&
                <svg viewBox={'0 0 24 24'} fill={color} className={'cursor-pointer'}>
                    <path d='M21,22c-0.3,0-0.5-0.1-0.7-0.3l-5.4-5.4C13.5,17.4,11.8,18,10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 c0,1.8-0.6,3.5-1.7,4.9l5.4,5.4c0.4,0.4,0.4,1,0,1.4C21.5,21.9,21.3,22,21,22z M10,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6 S13.3,4,10,4z' />
                </svg>
            }
            {type === 'dots_v' &&
                <svg viewBox={'0 0 20 20'} fill={color}>
                    <path d={'M10,6C8.9,6,8,5.1,8,4s0.9-2,2-2c1.1,0,2,0.9,2,2S11.1,6,10,6z'} />
                    <path d={'M10,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C12,11.1,11.1,12,10,12z'} />
                    <path d={'M10,18c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S11.1,18,10,18z'} />
                </svg>
            }
            {type === 'user' &&
                <svg viewBox={'0 0 20 20'} fill={color}>
                    <path d='M10,9c1.7,0,3-1.3,3-3s-1.3-3-3-3C8.3,3,7,4.3,7,6S8.3,9,10,9z M3,18c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7H3z' />
                </svg>
            }
        </div>
    )
}
