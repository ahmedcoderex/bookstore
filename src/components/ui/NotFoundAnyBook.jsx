import React from 'react'

function NotFoundAnyBook({message}) {
    return (
        <section>
            <div className="container min-h-52 flex justify-center items-center">
                <h4 className='bg-(--primary-color) py-2 px-4 font-semibold rounded-md text-2xl text-gray-200'>{message}</h4>
            </div>
        </section>
    )
}

export default NotFoundAnyBook
