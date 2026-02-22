import { useEffect, useRef, useState } from "react"
import pgImage from "../assets/pg.webp"

const accentColor = "#5dd992"

function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { rootMargin = "0px 0px -80px 0px", threshold = 0.1 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { rootMargin, threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  return [ref, isInView]
}

const features = [
  {
    title: "Start living your best life from ",
    titleHighlight: "day one",
    description:
      "Bring a box full of hopes, dreams, ambitions... and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.",
    images: [pgImage, pgImage, pgImage],
  },
  {
    title: "Spaces designed for ",
    titleHighlight: "community",
    description:
      "Common areas, events, and a ready-made network of people who get it. Your next friend or mentor might be right down the hall.",
    images: [pgImage, pgImage, pgImage],
  },
  {
    title: "Move in without the ",
    titleHighlight: "hassle",
    description:
      "No broker fees, no endless paperwork. Just sign, show up, and start living. We handle the rest so you can focus on what matters.",
    images: [pgImage, pgImage, pgImage],
  },
  {
    title: "Safety and comfort ",
    titleHighlight: "first",
    description:
      "Secure buildings, verified residents, and round-the-clock support. Feel at home from the moment you step in.",
    images: [pgImage, pgImage, pgImage],
  },
  {
    title: "Flexible stays for every ",
    titleHighlight: "chapter",
    description:
      "Whether you're here for a few months or a few years, we have options that fit your plan. No lock-in, no surprises.",
    images: [pgImage, pgImage, pgImage],
  },
]

function ImageCollage({ images, reverse }) {
  const cellClass = "overflow-hidden rounded-xl min-h-[136px]"
  const longClass = "row-span-2 overflow-hidden rounded-xl min-h-[280px]"
  const imgClass =
    "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"

  if (reverse) {
    /* Pictures on right: two stacked first (left), then long (right) */
    return (
      <div className="relative group">
        <div className="grid grid-cols-2 gap-3">
          <div className={cellClass}>
            <img src={images[1]} alt="" className={imgClass} />
          </div>
          <div className={longClass}>
            <img src={images[0]} alt="" className={imgClass} />
          </div>
          <div className={cellClass}>
            <img src={images[2]} alt="" className={imgClass} />
          </div>
        </div>
        <svg
          className="absolute -bottom-4 -right-2 h-16 w-24 text-slate-200/80 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"
          viewBox="0 0 80 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M80 40 Q60 20 40 30 T0 20" strokeLinecap="round" />
        </svg>
      </div>
    )
  }

  /* Pictures on left: long (left), two stacked (right) */
  return (
    <div className="relative group">
      <div className="grid grid-cols-2 gap-3">
        <div className={longClass}>
          <img src={images[0]} alt="" className={imgClass} />
        </div>
        <div className={cellClass}>
          <img src={images[1]} alt="" className={imgClass} />
        </div>
        <div className={cellClass}>
          <img src={images[2]} alt="" className={imgClass} />
        </div>
      </div>
      <svg
        className="absolute -bottom-4 -left-2 h-16 w-24 text-slate-200/80 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
        viewBox="0 0 80 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M0 40 Q20 20 40 30 T80 20" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function FeatureBlock({
  title,
  titleHighlight,
  description,
  images,
  reverse,
  isInView,
  delay = 0,
  altBackground = false,
}) {
  return (
    <div
      className={`flex flex-col gap-10 py-12 md:py-16 lg:flex-row lg:items-center lg:gap-14 ${
        reverse ? "lg:flex-row-reverse" : ""
      } ${altBackground ? "rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-slate-50/80 px-6 md:px-10 lg:px-14 -mx-2 md:-mx-4" : ""}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      <div className="min-w-0 flex-1">
        <ImageCollage images={images} reverse={reverse} />
      </div>
      <div className="flex-1 lg:min-w-[320px]">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          {title}
          <span
            className="inline-block transition-transform duration-500 ease-out"
            style={{
              color: accentColor,
              transform: isInView ? "translateX(0)" : "translateX(-8px)",
              transitionDelay: `${delay + 200}ms`,
            }}
          >
            {titleHighlight}
          </span>
        </h2>
        <p
          className="mt-4 text-slate-500 leading-relaxed"
          style={{
            opacity: isInView ? 1 : 0,
            transition: `opacity 0.6s ease-out ${delay + 150}ms`,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

function FeatureBlockWrapper({ feature, index }) {
  const [ref, isInView] = useInView()
  return (
    <div ref={ref}>
      <FeatureBlock
        {...feature}
        reverse={index % 2 === 1}
        isInView={isInView}
        delay={index * 80}
        altBackground={index % 2 === 1}
      />
    </div>
  )
}

export default function HomeFeatures() {
  const [headerRef, headerInView] = useInView()

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <header
          ref={headerRef}
          className="pt-12 pb-4 text-center"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            <span
              style={{
                color: accentColor,
                display: "inline-block",
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
              }}
            >
              Not just
            </span>{" "}
            <span
              className="text-slate-900"
              style={{
                opacity: headerInView ? 1 : 0,
                transition: "opacity 0.6s ease-out 0.3s",
              }}
            >
              four walls and a roof
            </span>
          </h2>
          <p
            className="mt-3 text-slate-500 max-w-xl mx-auto"
            style={{
              opacity: headerInView ? 1 : 0,
              transition: "opacity 0.6s ease-out 0.4s",
            }}
          >
            Come over and experience how a place to stay can be so much more
          </p>
        </header>

        {features.map((feature, index) => (
          <FeatureBlockWrapper
            key={index}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
