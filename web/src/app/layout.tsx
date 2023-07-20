import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { ReactNode } from 'react'
import { Copyrigth } from './components/Copyright'
import { Hero } from './components/Hero'
import { Profile } from './components/Profile'
import { SignIn } from './components/Sign In'
import { cookies } from 'next/headers'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const  baiJamjuree = BaiJamjuree({subsets: ['latin'], weight:['700'], variable: '--font-bai-jamjuree',})

export const metadata: Metadata = {
  title: 'NLW SPACETIME',
  description: 'A time capsule built with React.js, Next.js, Tailwind CSS and TypeSript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        
        
        <main className="grid grid-cols-2 min-h-screen">
        {/* Left */}
        <div className="flex flex-col items-start justify-between overflow-hidden px-28 py-16 relative border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
          {/* Blur */}
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"/>
          
          {/* Stripes */}
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>

          {/* Sign In */}
        {isAuthenticated ? <Profile /> : <SignIn />}

         {/* Hero */}
          <Hero />

          {/* Copyrigth */}
          <Copyrigth />

        </div>

        {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
        </body>
    </html>
  )
}
