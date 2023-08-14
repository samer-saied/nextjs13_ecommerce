import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {

    const headersList = headers()
    const referer = headersList.get('referer')

    // const { searchParams } = new URL(request.url)
    // const id = searchParams.get('id')
    // console.log(id)


    // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${1}`, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         //   'API-Key': process.env.DATA_API_KEY,
    //     },
    // })
    // const data = await res.json()


    return NextResponse.json(headersList.forEach((value) => console.log(value)))
}



export async function POST(request) {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    //     body: JSON.stringify({ time: new Date().toISOString() }),
    // })

    // const data = await res.json()



    // const formData = await request.formData()
    // const name = formData.get('name')
    // const email = formData.get('email')
    
    return NextResponse.json({ name, email })
}


export async function PUT(request) {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'API-Key': process.env.DATA_API_KEY,
    //     },
    //     body: JSON.stringify({ time: new Date().toISOString() }),
    // })

    // const data = await res.json()
    console.log(request)
    return NextResponse.json(request.json())
}