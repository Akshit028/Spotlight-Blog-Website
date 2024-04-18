import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Container, Logo } from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (

        <Container>
            < section  >
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className=" border w-[450px] border-[#27272A] rounded-xl px-8 py-8 ">
                        <div className="mb-2 flex justify-center">
                            <Logo />
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-[#FAFAFA]">
                            Log in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-[#FAFAFA] ">
                            Don&apos;t have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-medium text-[#DCDF00] text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                        <form onSubmit={handleSubmit(login)} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-[#FAFAFA]">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-[#27272A] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            {...register("email", {
                                                required: true,
                                                validate: {
                                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                        "Email address must be a valid address",
                                                }
                                            })}
                                        >

                                        </input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-[#FAFAFA]">
                                            {' '}
                                            Password{' '}
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-[#27272A] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            {...register("password", {
                                                required: true,
                                            })}
                                        >

                                        </input>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-white px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-[#FAFAFA]/80"
                                    >
                                        Get started
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </Container>



    )
}

export default Login


