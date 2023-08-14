'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation'

async function getOneProduct(productNo) {
    const res = await fetch("https://fakestoreapi.com/products/" + productNo);
    return await res.json()

}



export default async function SingleProductPage(params) {
    // const router = useRouter()


    // function clickHandle() {
    //     router.push('/products')
    // }

    const product = await getOneProduct(params.params.id)
    return (
        <>
            <Link href={"/products"}>
                <div className="mt-5 w-16 h-10 bg-red-600 rounded-md flex flex-col justify-center items-center cursor-pointer hover:shadow-md hover:border-black hover:border">
                    <h1 className=" text-3xl text-white ">
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#FFFFFF" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill="" /></svg>
                    </h1>
                </div>
            </Link>
            <div key={product.id}
                className=" relative h-auto px-5  bg-white m-2 p-2 border border-x-gray-100 rounded-md">
                <h1 className="text-black text-3xl font-bold py-5 uppercase">{product.title}</h1>

                <Image width={200} height={100} src={product.image} alt="" className="h-64 mx-auto" />

                <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-black text-lg font-medium line-clamp-2 w-8/12">{product.title}</p>
                    <div className="bg-red-600 rounded-md w-auto h-auto text-white font-bold flex justify-center items-center p-2 ">
                        <p className="text-3xl font-bold">{product.price}</p>
                        <p className="text-md font-light">$</p>
                    </div>
                </div>
                <p className=" text-gray-500 text-sm line-clamp-1 font-light pt-1 pb-2">category: {product.category}</p>
                <p className=" text-gray-500 line-clamp-3">{product.description}</p>
                <div className="flex flex-col mt-2 w-full justify-start items-start">
                    <div className="h-5 w-auto  flex flex-row justify-center items-center">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 18C3 15.3945 4.66081 13.1768 6.98156 12.348C7.61232 12.1227 8.29183 12 9 12C9.70817 12 10.3877 12.1227 11.0184 12.348C11.3611 12.4703 11.6893 12.623 12 12.8027C12.3107 12.623 12.6389 12.4703 12.9816 12.348C13.6123 12.1227 14.2918 12 15 12C15.7082 12 16.3877 12.1227 17.0184 12.348C19.3392 13.1768 21 15.3945 21 18V21H15.75V19.5H19.5V18C19.5 15.5147 17.4853 13.5 15 13.5C14.4029 13.5 13.833 13.6163 13.3116 13.8275C14.3568 14.9073 15 16.3785 15 18V21H3V18ZM9 11.25C8.31104 11.25 7.66548 11.0642 7.11068 10.74C5.9977 10.0896 5.25 8.88211 5.25 7.5C5.25 5.42893 6.92893 3.75 9 3.75C10.2267 3.75 11.3158 4.33901 12 5.24963C12.6842 4.33901 13.7733 3.75 15 3.75C17.0711 3.75 18.75 5.42893 18.75 7.5C18.75 8.88211 18.0023 10.0896 16.8893 10.74C16.3345 11.0642 15.689 11.25 15 11.25C14.311 11.25 13.6655 11.0642 13.1107 10.74C12.6776 10.4869 12.2999 10.1495 12 9.75036C11.7001 10.1496 11.3224 10.4869 10.8893 10.74C10.3345 11.0642 9.68896 11.25 9 11.25ZM13.5 18V19.5H4.5V18C4.5 15.5147 6.51472 13.5 9 13.5C11.4853 13.5 13.5 15.5147 13.5 18ZM11.25 7.5C11.25 8.74264 10.2426 9.75 9 9.75C7.75736 9.75 6.75 8.74264 6.75 7.5C6.75 6.25736 7.75736 5.25 9 5.25C10.2426 5.25 11.25 6.25736 11.25 7.5ZM15 5.25C13.7574 5.25 12.75 6.25736 12.75 7.5C12.75 8.74264 13.7574 9.75 15 9.75C16.2426 9.75 17.25 8.74264 17.25 7.5C17.25 6.25736 16.2426 5.25 15 5.25Z" fill="#730066" />
                        </svg>
                        <p className="text-black text-lg font-medium line-clamp-2 uppercase pr-2">Count</p>
                        <p className=" text-black line-clamp-3">{product.rating.count}</p>

                    </div>
                    <div className="h-5 w-auto  flex flex-row justify-center items-center ">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3174 3.61183C11.543 3.24404 11.6558 3.06014 11.8009 2.99739C11.9275 2.9426 12.0712 2.9426 12.1979 2.99739C12.3429 3.06014 12.4557 3.24404 12.6813 3.61183L14.6663 6.84813C14.7513 6.98682 14.7939 7.05616 14.8519 7.10659C14.9032 7.15121 14.9631 7.1849 15.0279 7.20557C15.1012 7.22893 15.1825 7.22924 15.3452 7.22986L19.2503 7.24464C19.7117 7.24638 19.9425 7.24726 20.0741 7.34454C20.1889 7.42937 20.2619 7.55921 20.2748 7.70135C20.2897 7.86435 20.1707 8.062 19.9326 8.45732L18.0479 11.5873C17.9575 11.7373 17.9124 11.8123 17.8947 11.8924C17.8791 11.9633 17.8791 12.0367 17.8947 12.1075C17.9124 12.1876 17.9575 12.2626 18.0479 12.4127L19.9326 15.5426C20.1707 15.9379 20.2897 16.1356 20.2748 16.2986C20.2619 16.4407 20.1889 16.5706 20.0741 16.6554C19.9425 16.7527 19.7117 16.7536 19.2503 16.7553L15.3452 16.7701C15.1825 16.7707 15.1012 16.771 15.0279 16.7944C14.9631 16.815 14.9032 16.8487 14.8519 16.8934C14.7939 16.9438 14.7513 17.0131 14.6663 17.1518L12.6813 20.3881C12.4557 20.7559 12.3429 20.9398 12.1979 21.0026C12.0712 21.0573 11.9275 21.0573 11.8009 21.0026C11.6558 20.9398 11.543 20.7559 11.3174 20.3881L9.33246 17.1518C9.2474 17.0131 9.20487 16.9438 9.14686 16.8934C9.09552 16.8487 9.03562 16.815 8.97081 16.7944C8.89759 16.771 8.81624 16.7707 8.65354 16.7701L4.74844 16.7553C4.28699 16.7536 4.05627 16.7527 3.92465 16.6554C3.80987 16.5706 3.73682 16.4407 3.72389 16.2986C3.70907 16.1356 3.82809 15.9379 4.06613 15.5426L5.95087 12.4127C6.0412 12.2626 6.08637 12.1876 6.10401 12.1075C6.11962 12.0367 6.11962 11.9633 6.10401 11.8924C6.08637 11.8123 6.0412 11.7373 5.95087 11.5873L4.06613 8.45731C3.82809 8.062 3.70907 7.86435 3.72389 7.70135C3.73682 7.55921 3.80987 7.42937 3.92465 7.34454C4.05627 7.24726 4.28699 7.24638 4.74844 7.24464L8.65354 7.22986C8.81624 7.22924 8.89759 7.22893 8.97081 7.20557C9.03562 7.1849 9.09552 7.15121 9.14686 7.10659C9.20487 7.05616 9.2474 6.98682 9.33246 6.84813L11.3174 3.61183Z" stroke="#F2CD00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-black text-lg font-medium line-clamp-2 uppercase pr-2">rate</p>
                        <p className=" text-black line-clamp-3">{product.rating.rate}</p>

                    </div>
                </div>
                {/* <button type="button" onClick={()=>console.log("ds")}>
                            Add
                        </button> */}

            </div>
        </>
    )

}