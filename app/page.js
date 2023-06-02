import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className='text-white text-8xl font-bold'>MakaDonVeli</h1> 
      <Link className='text-lg uppercase font-white rounded bg-purple-500 px-12 py-2 mt-10 text-white font-bold' href='https://www.twitch.tv/makadonveli' target='_blank'>Watch Now</Link>      
         </div>
  )
}
