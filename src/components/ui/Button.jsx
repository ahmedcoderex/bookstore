import React from 'react'

function Button({text, bg, color, width}) {
    return (
        <button className={`${width ? `${width}` : "w-fit"} py-1 px-4 text-lg lg:text-xl rounded-md ${bg? `${bg}` : "bg-(--primary-color)"} ${color? `${color}` : "text-gray-200"} hover:transform hover:-translate-y-0.5 transition-all duration-300`}>{text}</button>
    )
}

export default Button
