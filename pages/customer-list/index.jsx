import React, { useEffect, useState } from 'react'
import { Spinner, SvgIcon } from 'reuse'
import { Header } from 'components/layout'
import moment from 'moment-jalaali'
import Image from 'next/image'
import axios from 'axios'

export default function CustomerList() {
    const [state, setState] = useState({
        data: null,
        loading: false,
    })

    // useEffect(async () => {
    //     state.loading = true
    //     setState({ ...state })
    //     const config = {
    //         method: 'get',
    //         url: 'http://185.252.29.104:3002/api/v1/customers',
    //         headers: {
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6eyJpZCI6MSwiaXNBY3RpdmUiOnRydWUsImlzQXJjaGl2ZWQiOmZhbHNlLCJjcmVhdGVkQnkiOm51bGwsImxhc3RDaGFuZ2VkQnkiOm51bGwsImRlbGV0ZWRCeSI6bnVsbCwiaW50ZXJuYWxDb21tZW50IjpudWxsLCJjcmVhdGVkQXQiOiIyMDIxLTA5LTAzVDIxOjQ1OjU3LjIxNloiLCJ1cGRhdGVkQXQiOiIyMDIxLTA5LTAzVDIxOjQ1OjU3LjIxNloiLCJkZWxldGVkQXQiOm51bGwsIm5hbWUiOiJBZG1pbiIsIl9fZW50aXR5IjoiUm9sZSJ9LCJpYXQiOjE2MzExOTQ4OTIsImV4cCI6MTYzMTI4MTI5Mn0.BkvCvFhuZuMqY_rs5rcwnRJGC9JZPTlKIuI0iXK--P8'
    //         }
    //     };
    //     try {
    //         const { data } = await axios(config)
    //         if (data) {
    //             state.data = data
    //             state.loading = false
    //             setState({ ...state })
    //         }
    //     } catch (error) {
    //     }
    // }, [])

    return (
        <>
            <Header />
            <div className={'flex flex-1 p-3'}>
                <div className={'flex flex-1 flex-col border rounded-md p-3'}>
                    <div className={'flex flex-1 items-center border rounded'}>
                        <SvgIcon type={'search'} />
                        <input
                            className={'outline-none text-gray-500 w-full p-2'}
                            placeholder={'جستجو'}
                            type={'search'}
                        />
                    </div>
                    <div className={'flex flex-1 my-3'}>
                        <div className={'flex self-start items-center mr-1'}>
                            <input
                                type={'checkbox'}
                                id={'selectAll'}
                                className={'rounded cursor-pointer ml-2'}
                            // checked={state.selected}
                            // onChange={selected}
                            />
                            <label htmlFor={'selectAll'} className={'text-sm text-gray-500 cursor-pointer'}>انتخاب همه</label>
                        </div>
                    </div>
                    <div className={'flex flex-1 justify-between'}>
                        <span className={'flex w-16 justify-center text-gray-500 font-sm'}>عکس</span>
                        <span className={'flex w-24 justify-start text-gray-500 font-sm'}>کد کارشناس</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>تاریخ عضویت</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>نام</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>نام خانوادگی</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>نام پدر</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>کدملی</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>ش شناسنامه</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>محل تولد</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>عنوان شغلی</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>وضعیت چاپ</span>
                        <span className={'flex w-24 justify-center text-gray-500 font-sm'}>وضعیت</span>
                    </div>
                    <hr className={'my-3 h-0.5 bg-gray-500'} />
                    {state.loading && <Spinner color={'blue'} />}
                    {state.data && state.data.map((item, index) => {
                        return (
                            <>
                                <div key={index} className={'flex flex-1 justify-between items-center'}>
                                    <div className={'flex w-16 justify-start items-center'}>
                                        <input
                                            type={'checkbox'}
                                            id={'selectAll'}
                                            className={'rounded cursor-pointer ml-2'}
                                        // checked={state.selected}
                                        // onChange={handleSelected}
                                        />
                                        {/* <Image
                                            src={'/images/user.png'}
                                            alt={'user'}
                                            width={30}
                                            height={30}
                                        /> */}
                                        <SvgIcon type={'user'} />
                                    </div>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{item?.birthCertificateNo}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{moment(item?.joinDate, 'YYYY/MM/DD HH:mm:ss').format('jYYYY/jMM/jDD')}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{item?.firstName}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{item?.lastName}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{item?.fatherName}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{item?.nationalId}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{item?.nationalId}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>{moment(item?.birthDate, 'YYYY/MM/DD HH:mm:ss').format('jYYYY/jMM/jDD')}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'} title={item?.jobTitle}>{item?.jobTitle.trunc(10)}</span>
                                    <span className={'flex w-24 text-text-500 font-sm justify-start'}>نامشخص</span>
                                    <div className={'flex w-24 text-text-500 font-sm justify-center items-center'}>
                                        <button
                                        // onClick={{}}
                                        >
                                            <SvgIcon type={'dots_v'} />
                                        </button>
                                    </div>
                                </div>
                                <hr className={'my-2 bg-gray-500'} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
