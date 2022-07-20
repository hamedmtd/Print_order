import React, { useContext, useState } from 'react'
import { ClassNames } from 'functions'
import { Context } from 'provider'
import PropTypes from 'prop-types'

export default function Tabs(props) {
    const { tabList, ulClassName, liClassName, onSelect, tabSelectedColor, defaultTabSelected } = props
    const { colors } = useContext(Context)
    const [tabSelected, setTabSelected] = useState(defaultTabSelected)

    return (
        <ul className={ClassNames(ulClassName, 'flex flex-1 items-center')}>
            {tabList && Object.entries(tabList).map(([key, value], index) => {
                return (
                    <div key={index} className={'flex justify-center relative'}>
                        <li
                            className={ClassNames(liClassName, tabSelected === key && tabSelectedColor, 'cursor-pointer')}
                            onClick={() => {
                                setTabSelected(key)
                                onSelect(key)
                            }}>
                            {value}
                        </li>
                        {tabSelected === key &&
                            <hr className={'absolute top-9 w-12 bg-blue-500 h-1 rounded-md'} />
                        }
                    </div>

                )
            })}
        </ul>
    )
}

Tabs.propTypes = {
    tabList: PropTypes.object,
    ulClassName: PropTypes.string,
    liClassName: PropTypes.string,
    onSelect: PropTypes.func,
    tabSelectedColor: PropTypes.string,
    defaultTabSelected: PropTypes.number,
}

Tabs.defaultProps = {
    tabList: {},
    ulClassName: '',
    liClassName: '',
    onSelect: () => { },
    tabSelectedColor: 'text-blue-400',
    defaultTabSelected: 0
}
