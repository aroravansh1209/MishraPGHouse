import { useState, useEffect } from "react"
import pgImage from "../assets/pg.webp"

const heroImages = [
  pgImage,
  pgImage,
  pgImage,
]

const buildings = [
  { title: "Building 1", image: pgImage },
  { title: "Building 2", image: pgImage },
  { title: "Building 3", image: pgImage },
]

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function BuildingCard({ title, image }) {
  return (
    <div className="relative w-full h-[140px] rounded-xl overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex items-center justify-between">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  )
}

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

            {/* Hero Section */}
            <div className="relative flex-1 min-h-[480px] rounded-2xl overflow-hidden">
              {heroImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

              {/* Text */}
              <div className="relative z-20 flex flex-col justify-between h-full p-6 md:p-10">
                <div>
                  <h1 className="font-serif text-4xl md:text-6xl text-white max-w-[600px]">
                    You've got 99 problems,{" "}
                    <span className="text-[#d4a843]">
                      but brokerage ain't one.
                    </span>
                  </h1>

                  <p className="mt-4 text-white/90 max-w-[340px]">
                    <strong>Move in</strong> without having to pay a fortune.
                  </p>
                </div>

                {/* Dots */}
                <div className="flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`rounded-full transition-all ${
                        index === activeSlide
                          ? "w-3.5 h-3.5 bg-white"
                          : "w-2.5 h-2.5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Buildings */}
            <div className="flex flex-col gap-4 lg:w-[340px]">

              {/* Buildings List */}
              <div className="flex flex-col gap-4">
                {buildings.map((building) => (
                  <BuildingCard
                    key={building.title}
                    title={building.title}
                    image={building.image}
                  />
                ))}
              </div>

              {/* View All Button */}
              <button className="w-full py-3 rounded-xl border border-[#1a2744]/30 text-[#1a2744] font-medium text-sm hover:bg-[#1a2744] hover:text-white transition-colors">
                View All
              </button>

            </div>

          </div>
        </div>
      </section>
    </main>
  )
}