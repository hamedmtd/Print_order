import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs, Button } from 'reuse'

export default function Header() {
    const router = useRouter()
    const [state, setState] = useState({
        checked: false,
        loading: false,
    })

    const tabList = {
        0: 'داشبورد',
        1: 'لیست کاربران',
        2: 'افزودن کاربر',
        3: 'آپلود لیست',
        4: 'نمایش اطلاعات',
    }

    const tabIndex = {
        0: '',
        1: 'customer-list',
        2: 'add-customer',
        3: 'upload-list',
        4: 'info',
    }

    const logout = () => {
        state.loading = true
        setState({ ...state })
        router.push('/login')


    }

    return (
        <div className={'flex items-center h-20 px-5 bg-primary-500'}>
            <div className={'flex flex-1'}>
                <Tabs
                    tabList={tabList}
                    liClassName={'hover:text-primary-500 hover:bg-white rounded py-1.5 px-3 ml-5 text-primary-500 font-bold bg-lighttext-500'}
                    onSelect={(i) => {
                        router.push(`/${tabIndex[i]}`)
                    }}
                />
            </div>
            <div className={'flex'}>
                <Button
                    className={'h-11 w-14 hover:text-primary-500 hover:bg-white border border-solid border-lighttext-500 font-bold rounded text-lighttext-100 bg-primary-500'}
                    loading={state.loading}
                    onClick={logout}
                    title={'خروج'}
                />
                {/* <RadioGroup
                    name={'radioGroup'}
                    className={'flex'}
                    selected={state.checked}
                    data={[
                        { id: '1', title: 'text1' },
                        { id: '2', title: 'text2' }
                    ]}
                    onChange={(item) => {
                        state.checked = item.id
                        setState({ ...state })
                    }}
                /> */}
            </div>
        </div>
    )
}
