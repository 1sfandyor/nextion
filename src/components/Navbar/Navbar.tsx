'use client'

import { useRouter } from "next/navigation"

export const Navbar = () => {

  const router = useRouter();

  return (
    <div className="flex items-center">
      <button onClick={() => router.push('/')} className="p-3 mr-3 rounded bg-teal-700 text-white">Home</button>
      <button onClick={() => router.push('/about')} className="p-3 mr-3 rounded bg-teal-700 text-white">About me</button>
      <button onClick={() => router.push('/contact')} className="p-3 mr-3 rounded bg-teal-700 text-white">Contact</button>
      <button onClick={() => router.push('/posts')} className="p-3 rounded bg-teal-700 text-white">Posts</button>
    </div>
  )
}
