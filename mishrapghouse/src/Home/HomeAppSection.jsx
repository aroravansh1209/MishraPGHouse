const accentTeal = "#5dd992"

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] flex-shrink-0">
      {/* Decorative blobs behind phone */}
      <div
        className="absolute -top-8 -right-4 h-40 w-40 rounded-full opacity-40 blur-2xl"
        style={{ background: accentTeal }}
      />
      <div
        className="absolute top-1/3 -left-6 h-32 w-32 rounded-full opacity-30 blur-2xl"
        style={{ background: accentTeal }}
      />

      {/* Phone frame */}
      <div className="relative rounded-[2.25rem] bg-slate-700 p-2 shadow-xl ring-4 ring-slate-800">
        <div className="overflow-hidden rounded-[1.75rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 text-xs text-slate-600">
            <span>9:41</span>
            <span>58%</span>
          </div>
          {/* App header */}
          <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
            <button type="button" className="p-1 text-slate-600" aria-label="Back">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="flex-1 truncate text-center text-xs font-medium text-slate-800">
              Payment and contract details
            </span>
            <button type="button" className="p-1 text-slate-600" aria-label="Menu">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>
          {/* Tabs */}
          <div className="flex gap-1 p-2">
            <span
              className="rounded-full px-3 py-1.5 text-xs font-medium text-white"
              style={{ background: accentTeal }}
            >
              Ledger
            </span>
            <span className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100">
              Payment plans
            </span>
          </div>
          {/* Balance */}
          <div className="space-y-2 px-3 py-2">
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
              <div className="h-3 w-3 rounded-full border-2 border-slate-300" />
              <span className="text-xs text-slate-600">Due as of today</span>
              <span className="ml-auto text-xs font-semibold text-slate-800">₹1,22,080</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-50 p-2">
              <div className="h-3 w-3 rounded-full border-2 border-slate-300" />
              <span className="text-xs text-slate-600">Paid till date</span>
              <span className="ml-auto text-xs font-semibold text-slate-800">₹1,22,081</span>
            </div>
          </div>
          {/* List */}
          <div className="border-t border-slate-100 px-3 py-2">
            <div className="flex items-start gap-2 py-2 text-xs">
              <span className="text-slate-400">May 23</span>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between">
                  <span className="text-slate-700">Instalment 5</span>
                  <span className="text-slate-800 font-medium">+₹20,000</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Balance</span>
                  <span>₹1,02,080</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 py-2 text-xs">
              <span className="text-slate-400">Apr 23</span>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between">
                  <span className="text-slate-700">Payment received</span>
                  <span className="text-slate-800 font-medium">+₹20,000</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Balance</span>
                  <span>₹1,22,080</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-slate-100 py-2">
            <span className="text-[10px] text-slate-500">Home</span>
            <span className="text-[10px] text-slate-500">Food</span>
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-white"
              style={{ background: accentTeal }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-[10px] text-slate-500">Calls</span>
          </div>
        </div>
      </div>

      {/* Hand cursor */}
      <div className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white shadow-lg">
        <svg className="h-6 w-6 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 12.5v-1.2c0-.66-.54-1.2-1.2-1.2H14v-4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5c0 .28-.22.5-.5.5h-.5V8.5c0-.83-.67-1.5-1.5-1.5S7 7.67 7 8.5v6.5h-.5c-.28 0-.5-.22-.5-.5v-6C6 7.67 5.33 7 4.5 7S3 7.67 3 8.5v7c0 2.21 1.79 4 4 4h7c2.21 0 4-1.79 4-4v-4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5z" />
        </svg>
      </div>
      {/* Ticket icon */}
      <div className="absolute -top-2 right-8 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-md">
        <svg className="h-5 w-5" style={{ color: accentTeal }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      </div>
    </div>
  )
}

export default function HomeAppSection() {
  return (
    <section className="bg-emerald-50/80 py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Always have us{" "}
              <span className="font-bold" style={{ color: accentTeal }}>
                at your fingertips
              </span>
            </h2>
            <p className="mt-4 border-b-2 pb-1 text-lg font-bold text-slate-900" style={{ borderColor: accentTeal }}>
              All payments and dues, in one place
            </p>
            <p className="mt-6 max-w-lg text-slate-600 leading-relaxed">
              No running around here and there paying all your bills. While paying, tracking and
              managing your rent and other expenses on your app, the only thing that'll move would
              be your fingertips.
            </p>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
