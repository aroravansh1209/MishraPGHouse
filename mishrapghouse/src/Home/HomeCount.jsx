const accentTeal = "#5dd992"

export default function HomeCount() {
  const items = [
    { label: "Buildings", value: "8+", icon: "city" },
    { label: "Happy Residents", value: "1,00,000+", icon: "building" },
    { label: "Beds", value: "50,000+", icon: "bed" },
  ]

  return (
    <section className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-6 text-slate-700 sm:flex-row sm:gap-12 lg:gap-20">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl bg-slate-50 px-5 py-3 shadow-sm ring-1 ring-slate-100"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200/70 bg-white text-emerald-500">
                {item.icon === "city" && <span className="text-xl">🏙️</span>}
                {item.icon === "building" && <span className="text-xl">🏢</span>}
                {item.icon === "bed" && <span className="text-xl">🛏️</span>}
              </div>

              {/* Text */}
              <div className="flex flex-col leading-tight">
                <span
                  className="text-lg font-semibold text-slate-900"
                  style={{ color: accentTeal }}
                >
                  {item.value}
                </span>
                <span className="text-sm text-slate-600">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}