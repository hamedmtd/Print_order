import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'reuse'
import Link from 'next/link'
import axios from 'axios'

export default function Login() {
    const router = useRouter()
    const [state, setState] = useState({
        username: '',
        password: '',
        loading: false,
        showPass: false,
    })

    const onChange = ({ target }) => {
        state[target.name] = target.value
        setState({ ...state })
    }

    const handleShowPassword = () => {
        state.showPass = !state.showPass
        setState({ ...state })
    }

    const handleSubmit = async (e) => {
        router.push('/')
        e.preventDefault()
        state.loading = true
        setState({ ...state })
        let { username, password } = state
        let config = {
            method: 'post',
            url: 'http://185.252.29.104:3002/api/v1/auth/admin/email/login',
            data: { username, password }
        }
        // try {
        //     const { data } = await axios(config)
        //     if (data?.token) {
        //         state.loading = true
        //         setState({ ...state })
        //         router.push('/')
        //     }
        // } catch (error) {
        //     state.loading = false
        //     setState({ ...state })
        // }
    }

    return (
        <div className={'flex h-screen'}>
            <form onSubmit={handleSubmit} className={'flex justify-center flex-col w-96 py-5 pr-4'}>
                <h1 className={'flex justify-center mb-5 text-text-500 text-lg font-bold'}>
                    به داشبورد
                    <span className={'mx-1'}>سعید مقدم</span>
                    خوش آمدید
                </h1>
                <h3 className={'flex text-gray-500 font-bold'}>
                    این پنل ویژه کاربران تعریف شده میباشد
                </h3>
                <h3 className={'flex mb-5 text-gray-500 font-bold'}>
                    برای درخواست ایجاد اکانت به
                    <Link href=''>
                        <a className={'mx-1 hover:text-blue-500'}>
                            ادمین
                        </a>
                    </Link>
                    پیام بدهید
                </h3>
                <label htmlFor={'username'} className={'flex self-start m-2 text-gray-500 text-sm mt-5'}>نام کاربری</label>
                <input
                    className={'w-full border border-gray-300 rounded p-2 outline-none text-gray-500'}
                    placeholder={'Username'}
                    name={'username'}
                    id={'username'}
                    type={'text'}
                    required
                    value={state.username}
                    onChange={onChange}
                />
                <label htmlFor={'password'} className={'flex self-start m-2 text-gray-500 text-sm'}>کلمه عبور</label>
                <input
                    className={'w-full border border-gray-300 rounded p-2 outline-none text-gray-500'}
                    placeholder={'Password'}
                    name={'password'}
                    id={'password'}
                    type={state.showPass ? 'text' : 'password'}
                    required
                    value={state.password}
                    onChange={onChange}
                />
                {/* <div className={'flex w-full justify-start items-center p-3'}>
                    <input
                        type={'checkbox'}
                        id={'showPassword'}
                        className={'rounded cursor-pointer ml-2'}
                        checked={state.showPass}
                        onChange={handleShowPassword}
                    />
                    <label htmlFor={'showPassword'} className={'font-semibold cursor-pointer text-text-500 text-base'}>نمایش کلمه عبور</label>
                </div> */}
                <Button
                    type={'submit'}
                    className={'flex justify-center items-center w-full h-10 rounded text-white bg-blue-500 font-bold mt-5'}
                    loading={state.loading}
                    style={{
                        background: 'linear-gradient(270deg, #4DCAAC 0%, #4DB3CA 100%)',
                        boxShadow: '-4px 4px 15px rgba(77, 179, 202, 0.25), 4px 4px 15px rgba(77, 202, 172, 0.25)'
                    }}
                    title={'ثبت'}
                />
            </form>
            <div className={'flex flex-1 flex-col justify-center items-center space-y-2 p-5'}>
                <img
                    className={'h-full w-full'}
                    src={'/images/login_pic.png'}
                    alt={'Login Image'}
                />
            </div>
        </div>
    )
}
