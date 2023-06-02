import Twitch from "@/components/twitch/twitch"

export default function Home() {
  return (
    <div className="mt-10">
      <div className="uppercase text-lg font-bold border-b-2 border-purple-700 mb-4">Live - Twitch</div>
      <Twitch />
    </div>
  )
}
