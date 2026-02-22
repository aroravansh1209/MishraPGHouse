import { useState, useEffect } from "react"

const accentTeal = "#5dd992"

const allReviews = [
  {
    id: 1,
    quote: "I PAID ZERO BROKERAGE FEES! Moving in was so smooth.",
    author: "Priya S.",
    highlight: true,
  },
  {
    id: 2,
    quote: "The common areas and food are great. Feels like home.",
    author: "Rahul M.",
    highlight: false,
  },
  {
    id: 3,
    quote: "Safe, clean, and the community here is amazing.",
    author: "Ananya K.",
    highlight: false,
  },
  {
    id: 4,
    quote: "Best decision for my first job. No hassle, just move in.",
    author: "Vikram J.",
    highlight: false,
  },
  {
    id: 5,
    quote: "Everything from furniture to WiFi was ready. Zero stress.",
    author: "Neha R.",
    highlight: false,
  },
  {
    id: 6,
    quote: "Memorable chapter of my life. Would recommend to everyone.",
    author: "Arjun P.",
    highlight: false,
  },
  {
    id: 7,
    quote: "Rooms are bright, airy and exactly like the photos.",
    author: "Simran L.",
    highlight: false,
  },
  {
    id: 8,
    quote: "Maintenance requests are handled in hours, not days.",
    author: "Karan B.",
    highlight: false,
  },
  {
    id: 9,
    quote: "Made friends from 5 different cities in my first week.",
    author: "Megha T.",
    highlight: false,
  },
  {
    id: 10,
    quote: "The perfect mix of privacy, community and convenience.",
    author: "Rohan D.",
    highlight: false,
  },
]

const ROTATION_INTERVAL_MS = 5000

function ReviewCard({ quote, author, highlight, variant }) {
  const isCenter = variant === "center"

  return (
    <div
      className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-white p-6 md:p-7 shadow-sm ring-1 ring-slate-100 transition-all duration-500 ease-out md:max-w-sm ${
        isCenter
          ? "opacity-100 scale-100 md:scale-105"
          : "opacity-60 scale-90 md:scale-95"
      }`}
    >
      {/* Camera icon */}
      <div
        className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400"
        style={{ background: "rgba(0,0,0,0.04)" }}
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
        </svg>
      </div>
      <p
        className={`min-h-0 flex-1 pr-8 text-sm leading-relaxed md:text-base line-clamp-4 overflow-hidden text-ellipsis ${
          highlight ? "font-semibold text-slate-900" : "text-slate-700"
        }`}
      >
        {quote}
      </p>
      <p className="mt-4 flex-shrink-0 text-xs font-medium uppercase tracking-wide text-slate-500">
        {author}
      </p>
    </div>
  )
}

export default function HomeReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allReviews.length)
    }, ROTATION_INTERVAL_MS)
    return () => clearInterval(interval)
  }, [paused])

  const getIndex = (offset) =>
    (currentIndex + offset + allReviews.length) % allReviews.length

  const leftReview = allReviews[getIndex(-1)]
  const centerReview = allReviews[getIndex(0)]
  const rightReview = allReviews[getIndex(1)]

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <header className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            <span className="font-bold" style={{ color: accentTeal }}>
              Never a
            </span>{" "}
            <span className="text-slate-900">dull moment</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            In your story, your stay with us will be the most memorable chapter.
          </p>
        </header>

        <div
          className="flex items-stretch justify-center gap-4 md:gap-6 lg:gap-8 transition-opacity duration-300"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left (previous) - same height as center */}
          <div className="hidden h-full md:block md:min-h-[200px] md:w-[220px] lg:w-[240px]">
            <ReviewCard
              quote={leftReview.quote}
              author={leftReview.author}
              highlight={leftReview.highlight}
              variant="side"
            />
          </div>

          {/* Center (active) - drives row height */}
          <div className="h-full w-[260px] md:min-h-[200px] md:w-[320px]">
            <ReviewCard
              quote={centerReview.quote}
              author={centerReview.author}
              highlight={centerReview.highlight}
              variant="center"
            />
          </div>

          {/* Right (next) - same height as center */}
          <div className="hidden h-full md:block md:min-h-[200px] md:w-[220px] lg:w-[240px]">
            <ReviewCard
              quote={rightReview.quote}
              author={rightReview.author}
              highlight={rightReview.highlight}
              variant="side"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
