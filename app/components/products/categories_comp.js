import Link from 'next/link'
import React from 'react'


async function getCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    return data
}

export default async function categoriesComp() {
    const categories = await getCategories()

    return (
        <>
            <h1 className="text-black text-3xl font-bold py-5 uppercase">Categories</h1>
            <div className="flex flex-wrap bg-gray-100 p-5 ">
                {categories.map((category) => (
                    // <Link key={category} href={"category/" + category}>
                        <div key={category}
                            className="flex flex-row justify-center items-center h-auto px-5  bg-white m-2 p-2 border border-x-gray-100 rounded-md shadow-sm hover:shadow-md">
                            {/* <img src={product.image} alt="" className="h-64 mx-auto" /> */}
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z" fill="#ffffff" /> <path opacity="0.4" d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z" fill="#ffffff" /> <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" fill="#ffffff" /> <path d="M17.7099 21.9999C20.0792 21.9999 21.9999 20.0792 21.9999 17.7099C21.9999 15.3406 20.0792 13.4199 17.7099 13.4199C15.3406 13.4199 13.4199 15.3406 13.4199 17.7099C13.4199 20.0792 15.3406 21.9999 17.7099 21.9999Z" fill="#ffffff" /> </g>

                            </svg>
                            <p className="mx-2 text-black text-base font-medium uppercase">{category}</p>
                        </div>
                    // </Link>
                ))}
            </div>
        </>
    )
}
