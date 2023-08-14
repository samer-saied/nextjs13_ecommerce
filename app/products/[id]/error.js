"use client"
export default function errorPage({error}) {
  return (
    <div className="min-h-screen">
      <div>Error: {error.toString()}</div>
    </div>
  )
}
