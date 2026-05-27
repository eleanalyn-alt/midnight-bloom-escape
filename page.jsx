export default function MidnightBloomLanding() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3d342c] font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f1e5d5] to-[#f6f1ea] opacity-80" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
            <span className="text-[#d4b26a] opacity-70 text-sm">✿</span>
            <p className="uppercase tracking-[0.4em] text-sm text-[#a12d2d] bg-gradient-to-r from-[#a12d2d] via-[#c96b6b] to-[#a12d2d] bg-clip-text text-transparent">
              Midnight Bloom Escape
            </p>
            <span className="text-[#d4b26a] opacity-70 text-sm">✿</span>
          </div>

            <h1 className="text-5xl md:text-7xl leading-tight font-serif mb-6">
              Serene nook
              <br />
              in central
            </h1>

            <p className="text-base text-[#6d6257] leading-relaxed mb-8 max-w-xl italic font-serif">
              A warm and thoughtfully designed staycation space made for slow mornings,
              movie nights, workcations, and peaceful city escapes.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://airbnb.com/h/midnighbloomzylyn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a63232] hover:opacity-90 transition-all duration-300 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-md border border-[#d8c7a2]/30"
              >
                Book via Airbnb
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d4b26a]/70 text-[#5b4630] hover:bg-[#d4b26a]/80 transition-all duration-300 px-6 py-3 rounded-full shadow-lg backdrop-blur-md border border-[#e5cf9a]/20"
              >
                Stay Connected
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d46a6a] rounded-full blur-3xl opacity-60" />

            <img
              src="https://i.imgur.com/w0pD6cO.jpg"
              alt="Cozy condo"
              className="rounded-[2.8rem] shadow-2xl object-cover object-left h-[550px] w-full border border-white/10 ring-1 ring-white/10"
              style={{ filter: 'blur(0.2px)' }}
            />

            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md rounded-2xl p-5 shadow-xl">
              <h3 className="text-xl font-medium mb-1">Elevated Cozy Escape</h3>
              <p className="text-sm italic tracking-wider text-[#a12d2d] font-serif">
                Located in Mandaluyong City
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#a12d2d] mb-3">
            Amenities
          </p>

          <h2 className="text-4xl font-serif mb-4">
            Everything you need for a cozy stay
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: '📶',
              label: 'Fast WiFi + Smart TV',
            },
            {
              icon: '🏊',
              label: 'Pool Access',
            },
            {
              icon: '🍳',
              label: 'Fully Equipped Kitchen',
            },
            {
              icon: '💡',
              label: 'Warm Ambient Lighting',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#a89672]/70 text-[#4f3f2d] rounded-full px-5 py-3 shadow-lg border border-white/10 flex items-center justify-center text-center h-[56px] w-[240px] mx-auto hover:opacity-90 transition-all duration-300 backdrop-blur-xl" style={{boxShadow:'0 8px 32px rgba(0,0,0,0.12)'}}
            >
              <p className="text-sm leading-relaxed font-semibold tracking-wide uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <img
            src="https://i.imgur.com/LHNMU18.jpg"
            className="rounded-[2.5rem] h-[420px] object-cover object-[20%_center] w-full shadow-xl border border-white/10"
            style={{ filter: 'blur(0.2px)' }}
          />

          <img
            src="https://i.imgur.com/9KaIPZG.jpg"
            className="rounded-[2.5rem] h-[420px] object-cover w-full shadow-xl border border-white/10"
            style={{ filter: 'blur(0.2px)' }}
          />

          <img
            src="https://i.imgur.com/vModOYU.jpg"
            className="rounded-[2.5rem] h-[420px] object-cover w-full shadow-xl border border-white/10"
            style={{ filter: 'blur(0.2px)' }}
          />
        </div>
      </section>
    </div>
  );
}
