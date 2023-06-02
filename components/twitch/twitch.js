export default function Twitch() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-[40vh] gap-4">
      <div className="md:col-span-2 lg:col-span-3 rounded overflow-hidden">
        <iframe
          className="w-full"
          src="https://player.twitch.tv/?channel=makadonveli&parent=makadonveli.co.uk&autoplay=true"
          frameborder="0"
          allowfullscreen="true"
          height="100%"
          width="">
        </iframe>
      </div>
      <div className="hidden md:block md:col-span-2 lg:col-span-1 rounded overflow-hidden">
        <iframe id="twitch-chat-embed"
          className="w-full"
          src="https://www.twitch.tv/embed/makadonveli/chat?parent=localhost"
          height="100%"
          width="350">
        </iframe>      </div>
    </div>
  )
}
