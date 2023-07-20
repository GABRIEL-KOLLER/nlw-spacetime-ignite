import Image from 'next/image'
import Logo from '@/assets/nlw-spacetime-logo.svg'
import Link from 'next/link'


export function Hero() {
  return (
    <div className="space-y-5">
          <Image src={Logo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-4">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">Your time capsule</h1>
            <p className="text-lg leading-relaxed">Collect memorable moments from your journey and share (if you like) with the world!</p>
          </div>
          <Link className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase
          leading-none text-black hover:bg-green-600" href="/memories/new">REGISTER MEMORY</Link>
      </div>
  )
}