import React from 'react'
import { Header } from 'components/layout'
import { Button, SvgIcon } from 'reuse'
import Image from 'next/image'

export default function Info() {

    return (
        <>
            <Header />
            <div className={'flex flex-1 flex-col p-3'}>
                <div className={'flex flex-1 flex-col border rounded-md p-3'}>
                    <div className={'flex flex-1 justify-between'}>
                        <span className={'flex w-12 justify-start text-gray-500 font-sm'}>عکس</span>
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
                    <hr className={'my-2'} />
                    <div className={'flex flex-1 justify-between items-center my-1'}>
                        <div className={'flex w-12 justify-start items-center'}>
                            {/* <Image
                                src={'/images/user.png'}
                                alt={'user'}
                                width={40}
                                height={40}
                            /> */}
                            <SvgIcon type={'user'} />
                        </div>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>3232</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>1399</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>شاهین</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>شاهین</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>شاهین</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>0922612040</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>0922612040</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>1373</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>دبیر</span>
                        <span className={'flex w-24 text-text-500 font-sm justify-start'}>نامشخص</span>
                        <div className={'flex w-24 text-text-500 font-sm justify-center items-center'}>
                            <button
                            // onClick={{}}
                            >
                                <SvgIcon type={'dots_v'} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-1 justify-center items-center mt-2'}>
                    <Button
                        className={'w-28 h-10 flex justify-center items-center border rounded text-gray-400 mt-2 px-2'}
                        title={'انصراف'}
                    />
                    <Button
                        className={'w-28 h-10 flex justify-center items-center border rounded bg-purple-600 text-white mt-2 mr-2 px-2'}
                        // loading={state.loading}
                        title={'تایید'}
                    />
                </div>
                <div className={'flex flex-1 p-5'}>
                    <div className={'flex flex-1 flex-col items-center px-5'}>
                        <span className={'text-sm text-blue-500'}>پیش نمایش کارت</span>
                        <hr className={'mt-2 bg-gray-600 w-full'} />
                        <div className={'flex mt-3'}>
                            <Image
                                src={'/images/card1.png'}
                                alt={'user'}
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className={'flex mt-3'}>
                            <Image
                                src={'/images/card2.png'}
                                alt={'user'}
                                width={300}
                                height={200}
                            />
                        </div>
                        <div className={'flex mt-3'}>
                            <Image
                                src={'/images/card3.png'}
                                alt={'user'}
                                width={300}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className={'flex flex-1 flex-col items-center px-5'}>
                        <span className={'text-sm text-blue-500'}>پیش نمایش لوح</span>
                        <hr className={'mt-2 bg-gray-600 w-full'} />
                        <div className={'flex mt-2'}>
                            <Image
                                src={'/images/govahi.png'}
                                alt={'user'}
                                width={450}
                                height={550}
                            />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
