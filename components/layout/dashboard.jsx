import React, { useEffect, useState } from 'react'
import { SvgIcon } from 'components/reuse'

export default function Dashboard() {

    const [state, setState] = useState({
        data: null,
        loading: false,
    })

    useEffect(() => {

    }, [])

    return (
        <div className={'flex p-3'}>
            <div className={'flex flex-1 p-3'}>
                <div className={'flex flex-1 flex-col border rounded-md p-3'}>
                    <span className={'flex my-2 font-bold text-primary-500'}>اخرین فعالیت ها</span>
                    <div className={'flex flex-col'}>
                        {state.data && state.data.map((item, index) => {
                            return (
                                <>
                                    <div key={index} className={'flex justify-between pl-5 mt-2'}>
                                        <span className={'text-sm text-text-500'}>{item?.name}</span>
                                        <span className={'text-sm text-text-500'}>{item?.name}</span>
                                        <span className={'text-sm text-text-500'}>{item?.name}</span>
                                        <span className={'text-sm text-text-500'}>{item?.name}</span>
                                        <span className={'text-sm text-text-500'}>{item?.name}</span>
                                        <span className={'text-sm text-text-500'}>{item?.name}</span>
                                    </div>
                                    <hr className={'my-2'} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={'flex flex-col w-96 p-3'}>
                <div className={'flex border rounded'}>
                    <SvgIcon type={'search'} />
                    <input
                        className={'outline-none text-gray-500 w-full p-2'}
                        placeholder={'جستجو'}
                        type={'serach'}
                    />
                </div>
                <div className={'flex flex-wrap mt-1'}>
                    <div className={'w-36 h-28 flex flex-col border m-1 rounded-md justify-center items-center p-3'}>
                        <span className={'text-primary-500 text-lg font-bold'}>27</span>
                        <span className={'text-text-500 text-sm mt-1'}>صف لیست چاپ</span>
                    </div>
                    <div className={'w-36 h-28 flex flex-col border m-1 rounded-md justify-center items-center p-3'}>
                        <span className={'text-primary-500 text-lg font-bold'}>27</span>
                        <span className={'text-text-500 text-sm mt-1'}>صف لیست چاپ</span>
                    </div>
                    <div className={'w-36 h-28 flex flex-col border m-1 rounded-md justify-center items-center p-3'}>
                        <span className={'text-primary-500 text-lg font-bold'}>27</span>
                        <span className={'text-text-500 text-sm mt-1'}>صف لیست چاپ</span>
                    </div>
                    <div className={'w-36 h-28 flex flex-col border m-1 rounded-md justify-center items-center p-3'}>
                        <span className={'text-primary-500 text-lg font-bold'}>27</span>
                        <span className={'text-text-500 text-sm mt-1'}>صف لیست چاپ</span>
                    </div>
                    <div className={'w-36 h-28 flex flex-col border m-1 rounded-md justify-center items-center p-3'}>
                        <span className={'text-primary-500 text-lg font-bold'}>27</span>
                        <span className={'text-text-500 text-sm mt-1'}>صف لیست چاپ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
