import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'reuse'
import { Icon } from 'reuse'
import axios from 'axios'

export default function Login() {
    const router = useRouter()
    const [state, setState] = useState({
        email: '',
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
        e.preventDefault()
        state.loading = true
        setState({ ...state })
        let { email, password } = state
        let config = {
            method: 'post',
            url: 'http://185.252.29.104:3002/api/v1/auth/admin/email/login',
            data: { email, password }
        };
        try {
            const { data } = await axios(config)
            if (data?.token) {
                state.loading = true
                setState({ ...state })
                router.push('/')
            }
        } catch (error) {
            state.loading = false
            setState({ ...state })
        }
    }

    return (
        <div className={'flex h-screen'}>
            <form onSubmit={handleSubmit} className={'flex justify-center flex-col items-center w-96 p-5'}>
                <h2 className={'flex mb-5 text-lg text-text-500 font-bold'}>خوش آمدید</h2>
                <label htmlFor={'email'} className={'flex self-start m-2 text-base text-text-500 font-bold mt-5'}>نام کاربری</label>
                <input
                    className={'w-full border border-gray-300 rounded p-2 outline-none text-gray-500'}
                    placeholder={'email'}
                    name={'email'}
                    id={'email'}
                    type={'text'}
                    required
                    value={state.email}
                    onChange={onChange}
                />
                <label htmlFor={'password'} className={'flex self-start m-2 text-base text-text-500 font-bold'}>کلمه عبور</label>
                <input
                    className={'w-full border border-gray-300 rounded p-2 outline-none text-gray-500'}
                    placeholder={'***********'}
                    name={'password'}
                    id={'password'}
                    type={state.showPass ? 'text' : 'password'}
                    required
                    value={state.password}
                    onChange={onChange}
                />
                <div className={'flex w-full justify-start items-center p-3'}>
                    <input
                        type={'checkbox'}
                        id={'showPassword'}
                        className={'rounded cursor-pointer ml-2'}
                        checked={state.showPass}
                        onChange={handleShowPassword}
                    />
                    <label htmlFor={'showPassword'} className={'font-semibold cursor-pointer text-text-500 text-base'}>نمایش کلمه عبور</label>
                </div>
                <Button
                    type={'submit'}
                    className={'w-full h-10 rounded flex justify-center items-center bg-primary-500 text-white font-bold mt-2'}
                    loading={state.loading}
                    title={'ورود'}
                />
            </form>
            <div className={'flex flex-1 flex-col justify-center items-center bg-primary-500 space-y-2 p-8'}>
                <hr className={'h-0.25 w-full bg-lighttext-500'} />
                <p className={'bold bg-text text-lg font-bold text-lighttext-500'}>انجمن صنفی کارفرمائی کارشناسان خبره محلی شهرستان مشهد</p>
                <hr className={'h-0.25 w-full bg-lighttext-500'} />
            </div>
        </div>
    )
}
