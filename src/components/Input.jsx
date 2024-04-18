import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`flex h-10 w-full rounded-md border border-[#27272A] bg-transparent px-3 py-2 text-sm placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input