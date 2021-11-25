import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { UseOutsideAlerter, Icon } from 'reuse'
import { isMobile } from 'react-device-detect'
import { ClassNames } from 'functions'

const dropdown = ({ title = '', icon, header = null, btn_className = '', children = <></>, onChange = () => { }, width }, ref) => {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef()

    useImperativeHandle(ref, () => ({
        close: () => {
            setOpen(false)
        },
        open: () => {
            setOpen(true)
        },
        toggle: () => {
            setOpen(!open)
        }
    }))

    const onToggle = () => {
        setOpen(false)
    }

    useEffect(() => {
        onChange(open)
    }, [open])

    UseOutsideAlerter(wrapperRef, onToggle)

    return (
        <div className={'relative'}>
            <button onClick={() => {
                setOpen(!open)
            }}
                className={ClassNames(btn_className, !header && 'rounded-full', 'flex items-center')}>
                {header ? header() :
                    <>
                        {title}
                        {icon && <Icon name={icon} className={'text-gray-500'} size={18} />}
                    </>
                }
            </button>
            {!isMobile ?
                <div className={ClassNames(!open && 'hidden', width, 'sm:rounded-md origin-top-right absolute right-0 shadow-lg ring-opacity-5 focus:outline-none mt-2.5')}>
                    <div className={'fixed z-0 top-0 bottom-0 left-0 right-0'} style={{ opacity: 0 }} />
                    <div ref={wrapperRef} className={'relative z-10'}>
                        {children}
                    </div>
                </div>
                :
                <div className={ClassNames(!open && 'hidden', 'fixed bottom-0 z-20 left-0 right-0 shadow-lg ring-opacity-5 focus:outline-none')}>
                    <div className={'bg-black fixed z-0 top-0 bottom-0 left-0 right-0'} style={{ opacity: 0.2 }} />
                    <div ref={wrapperRef} className={'relative z-20'}>
                        <div style={{ maxHeight: 'calc(100vh - 20px)', overflow: 'auto' }} className={'divide-y divide-gray-100'}>
                            {/* <div className={'flex h-12 w-full justify-end items-center bg-gray-50'}>
									<button onClick={onToggle}>
										<Icon name='x' className={'pr-1 text-gray-400'} size={24} />
									</button>
								</div> */}
                            {children}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default forwardRef(dropdown)
