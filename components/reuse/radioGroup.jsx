import React, { Fragment, useContext, useMemo } from 'react'
import { Context } from 'provider'

export default function RadioGroup(props) {
    const { onChange, data, selected, name } = props
    const { colors } = useContext(Context)

    const _data = useMemo(() => {
        return data || []
    }, [data])

    const handleChangeGroup = (item) => {
        onChange(item)
    }

    return (
        <div>
            {_data && _data.map((item, index) => {
                if (item) {
                    return (
                        <Fragment key={`${item}_${index}`}>
                            <label htmlFor={`radiobox_${item.id}`} className={'flex items-center mb-3 ml-2 cursor-pointer'}>
                                <input
                                    checked={selected === item.id} disabled={item.disable}
                                    onChange={() => handleChangeGroup(item)} value={item.id} type={'radio'} id={`radiobox_${item.id}`}
                                    name={name || 'radiobox'}
                                    className={'h-5 w-5 mr-3 text-blue-500 focus:ring-gray-400'}
                                />
                                <div className={'flex-1 flex flex-col justify-center'}>
                                    <span className={'font-semibold text-sm text-gray-600'}>{item.title}</span>
                                    <span className={'text-sm text-gray-400'}>{item.subtitle}</span>
                                </div>
                            </label>
                            {item.disable && <span style={{ marginLeft: 20, fontSize: 13, color: 'red' }}>{item.disable}</span>}
                        </Fragment>
                    )
                }
            })}
        </div>
    )
}
