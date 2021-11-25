import React from 'react'
import { Header } from 'components/layout'
import { Button } from 'components/reuse'

export default function UploadList() {

    return (
        <>
            <Header />
            <div className={'flex flex-col p-5'}>
                <span className={'flex flex-1 text-text-500 font-bold'}>شما می توانید لیست مورد نظر خود را در فرمت csv بارگزاری نمایید .</span>
                <span className={'flex flex-1 mt-3 text-text-500 font-sm'}>برای این کار کافیست بر روی دکمه آپلود کلیک نموده و فایل خود را از کامپیوتر خود انتخاب کنید.</span>
                <div className={'flex items-center border border-gray-300 mt-3 p-5'}>
                    <span className={'flex flex-1 text-text-500 font-sm'}>هنوز فایلی انتخاب نشده است</span>
                    <Button
                        title={'آپلود'}
                        className={'h-10 w-20 flex justify-center items-center border rounded font-bold bg-blue-500 text-white'}
                    />
                </div>
            </div>
        </>
    )
}
