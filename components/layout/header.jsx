import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Tabs, Dropdown } from 'reuse'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from 'reuse'

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
        4: 'نمایش اطلاعات'
    }

    const tabIndex = {
        0: '',
        1: 'customer-list',
        2: 'add-customer',
        3: 'upload-list',
        4: 'info'
    }

    const logout = () => {
        state.loading = true
        setState({ ...state })
        router.push('/login')
    }

    return (
        <div className={'flex items-center h-20 px-5 bg-white border'}>
            <div className={'flex flex-1'}>
                <Link href='/'>
                    <Image
                        className={'cursor-pointer'}
                        src={'/images/logo.png'}
                        alt={'user'}
                        width={155}
                        height={48}
                    />
                </Link>
                <Tabs
                    tabList={tabList}
                    liClassName={'hover:text-blue-500 rounded py-1.5 px-5 text-prim-500 font-bold bg-lighttext-500'}
                    // tabSelectedColor={'bg-blue-300'}
                    onSelect={(i) => {
                        router.push(`/${tabIndex[i]}`)
                        console.log("i:", i);
                    }}
                />
            </div>
            <Dropdown
                width={''}
                // btn_className={''}
                // title={'options'}
                // icon={'dots-vertical'}
                header={() => {
                    return (
                        <div className={'flex'}>
                            <Icon name='chevron-down' />
                            <div className={'flex flex-col items-center'} >
                                <span className={'text-gray-500 text-sm'}>خوش آمدید</span>
                                <span className={'text-gray-500 text-sm'}>moghadam</span>
                            </div>
                        </div>
                    )
                }}
            >
            </Dropdown>

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
    )
}
