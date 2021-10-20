import React, { useState } from 'react'
import { Button, SvgIcon } from 'components/reuse'
import { Header } from 'components/layout'
import Image from 'next/image'

export default function AddCustomer() {
    const [state, setState] = useState({
        pic: '',
        name: '',
        lastname: '',
        fathername: '',
        location: '',
        birthday: '',
        code: '',
        shenasname: '',
        codekarshenas: '',
        jobtitle: '',
        registerdate: '',
        loading: false,
    })

    const onChange = ({ target }) => {
        state[target.name] = target.value
        setState({ ...state })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        state.loading = true
        setState({ ...state })
        let { pic, name, } = state


    }

    return (
        <>
            <Header />
            <div className={'flex flex-1 justify-center'}>
                <div className={'w-2/3 mt-5'}>
                    <form onSubmit={handleSubmit} className={'flex flex-col'}>
                        <div className={'flex pr-2 mt-5'}>
                            {/* <Image
                                src={'/images/user.png'}
                                alt={'user'}
                                width={40}
                                height={40}
                            /> */}
                            <SvgIcon type={'user'} />
                            <Button
                                className={'h-10 px-3 rounded hover:bg-primary-500 hover:text-white bg-white text-primary-500 border border-primary-500 mr-3'}
                                title={'آپلود عکس'}
                            />
                        </div>
                        <div className={'flex mt-5'}>
                            <div className={'flex flex-1 flex-col sm:ml-2'}>
                                <label htmlFor={'name'} className={'flex self-start my-2 text-text-500 font-bold'}>نام</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'نام خود را وارد نمایید'}
                                    name={'name'}
                                    id={'name'}
                                    type={'text'}
                                    required
                                    value={state.name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={'flex flex-1 flex-col'}>
                                <label htmlFor={'lastname'} className={'flex self-start my-2 text-text-500 font-bold'}>نام خانوادگی</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'نام خانوادگی خود را وارد نمایید'}
                                    name={'lastname'}
                                    id={'lastname'}
                                    type={'text'}
                                    required
                                    value={state.lastname}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className={'flex mt-2'}>
                            <div className={'flex flex-1 flex-col sm:ml-2'}>
                                <label htmlFor={'name'} className={'flex self-start my-2 text-text-500 font-bold'}>نام پدر</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'نام پدر را وارد نمایید'}
                                    name={'fathername'}
                                    id={'fathername'}
                                    type={'text'}
                                    required
                                    value={state.fathername}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={'flex flex-1 flex-col'}>
                                <label htmlFor={'lastname'} className={'flex self-start my-2 text-text-500 font-bold'}>محل تولد</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'محل تولد خود را وارد نمایید'}
                                    name={'lastname'}
                                    id={'lastname'}
                                    type={'text'}
                                    required
                                    value={state.lastname}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col mt-2'}>
                            <label htmlFor={'lasbirthdayname'} className={'flex self-start my-2 text-text-500 font-bold'}>تاریخ تولد</label>
                            <div className={'flex'}>
                                <input
                                    className={'w-full border border-lightgray-500 text-center rounded p-2 outline-none font-sm text-gray-500 sm:ml-2'}
                                    placeholder={'روز'}
                                    name={'birthday'}
                                    id={'birthday'}
                                    type={'text'}
                                    required
                                    value={state.birthday}
                                    onChange={onChange}
                                />
                                <input
                                    className={'w-full border border-lightgray-500 text-center rounded p-2 outline-none font-sm text-gray-500 sm:ml-2'}
                                    placeholder={'ماه'}
                                    name={'birthday'}
                                    id={'birthday'}
                                    type={'text'}
                                    required
                                    value={state.birthday}
                                    onChange={onChange}
                                />
                                <input
                                    className={'w-full border border-lightgray-500 text-center rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'سال'}
                                    name={'birthday'}
                                    id={'birthday'}
                                    type={'text'}
                                    required
                                    value={state.birthday}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className={'flex mt-2'}>
                            <div className={'flex flex-1 flex-col sm:ml-2'}>
                                <label htmlFor={'name'} className={'flex self-start my-2 text-text-500 font-bold'}>کدملی</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'کدملی را وارد نمایید'}
                                    name={'fathername'}
                                    id={'fathername'}
                                    type={'text'}
                                    required
                                    value={state.fathername}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={'flex flex-1 flex-col'}>
                                <label htmlFor={'lastname'} className={'flex self-start my-2 text-text-500 font-bold'}>شماره شناسنامه</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'شماره شناسنامه خود را وارد نمایید'}
                                    name={'lastname'}
                                    id={'lastname'}
                                    type={'text'}
                                    required
                                    value={state.lastname}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className={'flex mt-2'}>
                            <div className={'flex flex-1 flex-col sm:ml-2'}>
                                <label htmlFor={'name'} className={'flex self-start my-2 text-text-500 font-bold'}>کد کارشناس</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'کد کارشناس را وارد نمایید'}
                                    name={'fathername'}
                                    id={'fathername'}
                                    type={'text'}
                                    required
                                    value={state.fathername}
                                    onChange={onChange}
                                />
                            </div>
                            <div className={'flex flex-1 flex-col'}>
                                <label htmlFor={'name'} className={'flex self-start my-2 text-text-500 font-bold'}>عنوان شغلی</label>
                                <input
                                    className={'w-full border border-lightgray-500 rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'عنوان شغلی را وارد نمایید'}
                                    name={'fathername'}
                                    id={'fathername'}
                                    type={'text'}
                                    required
                                    value={state.fathername}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col mt-2'}>
                            <label htmlFor={'lasbirthdayname'} className={'flex self-start my-2 text-text-500 font-bold'}>تاریخ عضویت</label>
                            <div className={'flex'}>
                                <input
                                    className={'w-full border border-lightgray-500 text-center rounded p-2 outline-none font-sm text-gray-500 sm:ml-2'}
                                    placeholder={'روز'}
                                    name={'birthday'}
                                    id={'birthday'}
                                    type={'text'}
                                    required
                                    value={state.birthday}
                                    onChange={onChange}
                                />
                                <input
                                    className={'w-full border border-lightgray-500 text-center rounded p-2 outline-none font-sm text-gray-500 sm:ml-2'}
                                    placeholder={'ماه'}
                                    name={'birthday'}
                                    id={'birthday'}
                                    type={'text'}
                                    required
                                    value={state.birthday}
                                    onChange={onChange}
                                />
                                <input
                                    className={'w-full border border-lightgray-500 text-center rounded p-2 outline-none font-sm text-gray-500'}
                                    placeholder={'سال'}
                                    name={'birthday'}
                                    id={'birthday'}
                                    type={'text'}
                                    required
                                    value={state.birthday}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-1 justify-end mt-5'}>
                            <Button
                                className={'h-10 w-20 flex justify-center hover:bg-gray-500 hover:text-white items-center text-sm border rounded text-primary-500 border-primary-500'}
                                title={'انصراف'}
                            />
                            <Button
                                type={'submit'}
                                className={'h-10 w-20 flex justify-center hover:bg-white hover:border-primary-500 hover:text-primary-500 items-center text-sm border rounded bg-primary-500 text-white mr-2'}
                                loading={state.loading}
                                title={'ثبت'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
