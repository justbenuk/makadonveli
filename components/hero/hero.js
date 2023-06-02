import Header from "../header/header"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-[50vh]" style={{ backgroundImage: `url("/assets/bg1.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="bg-purple-900/70 h-full">
        <Header />
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">MakaDonVeli</h1>
            <p className="font-bold text-lg mt-2 text-center px-6">Join the saltiest community on the planet. With Variaty Games, GTA, Squad and many more</p>
          <Link className="mt-4 bg-gray-900 px-12 py-2 rounded shadow-xl font-bold " href='https://www.twitch.tv/makadonveli'>Watch Now</Link>
        </div>
      </div>
    </div>
  )
}
