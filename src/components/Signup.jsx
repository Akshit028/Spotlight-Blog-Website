import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Logo, Container } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
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
                            Sign up to create account
                        </h2>
                        <p className="mt-2 text-center text-sm text-[#FAFAFA] ">
                            Already have an account?&nbsp;
                            <Link
                                to="/login"
                                className="font-medium text-[#DCDF00] text-primary transition-all duration-200 hover:underline"
                            >
                                Log In
                            </Link>
                        </p>
                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                        <form onSubmit={handleSubmit(create)} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-[#FAFAFA]">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-[#27272A] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50"

                                            placeholder="Full name"
                                            {...register("name", {
                                                required: true,
                                            })}
                                        >

                                        </input>
                                    </div>
                                </div>
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
                                        className="inline-flex w-full items-center justify-center rounded-md bg-[#FAFAFA] px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-[#FAFAFA]/80"
                                    >
                                        Create Account
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

export default Signup


