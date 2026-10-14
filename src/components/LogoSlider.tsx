import { FaGithub, FaGoogle, FaMicrosoft, FaAmazon, FaSpotify, FaApple } from "react-icons/fa"
import { SiMeta, SiNetflix } from "react-icons/si"

const logos = [
  { name: "Google", Icon: FaGoogle, color: "#4285F4" },
  { name: "Microsoft", Icon: FaMicrosoft, color: "#00A4EF" },
  { name: "Amazon", Icon: FaAmazon, color: "#FF9900" },
  { name: "Meta", Icon: SiMeta, color: "#0668E1" },
  { name: "Netflix", Icon: SiNetflix, color: "#E50914" },
  { name: "Spotify", Icon: FaSpotify, color: "#1DB954" },
  { name: "GitHub", Icon: FaGithub, color: "#181717" },
  { name: "Apple", Icon: FaApple, color: "#111111" }
]

const LogoSlider = () => {

  const half = [...logos, ...logos, ...logos, ...logos]
  const items = [...half, ...half] 

  return (
    <section className="w-full bg-white py-10">
      <p className="mb-6 text-center text-sm text-gray-500">Trusted by teams at</p>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {items.map(({ name, Icon, color }, i) => (
            <Icon
              key={i}
              aria-label={name}
              style={{ color }}
              className="mx-8 h-8 w-8 brightness-75 md:mx-12 md:h-20 md:w-20"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSlider