/**
 * Portfolio site designs 1–5.
 * Each is a standalone website with its own identity — palette, type,
 * layout structure and photography. These are not template variations.
 */

const P = {
  bpoOffice:
    "https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  bpoMeeting:
    "https://images.pexels.com/photos/7964413/pexels-photo-7964413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dishSeafood:
    "https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dishChicken:
    "https://images.pexels.com/photos/24186393/pexels-photo-24186393.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dishQuail:
    "https://images.pexels.com/photos/24246212/pexels-photo-24246212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dishTomato:
    "https://images.pexels.com/photos/24186309/pexels-photo-24186309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hotelEntrance:
    "https://images.pexels.com/photos/36545095/pexels-photo-36545095.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hotelDusk:
    "https://images.pexels.com/photos/19550585/pexels-photo-19550585.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  hotelFacade:
    "https://images.pexels.com/photos/25309226/pexels-photo-25309226.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  houseWater:
    "https://images.pexels.com/photos/28201816/pexels-photo-28201816.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  houseSub:
    "https://images.pexels.com/photos/16370166/pexels-photo-16370166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  houseApt:
    "https://images.pexels.com/photos/36484478/pexels-photo-36484478.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dentalChair:
    "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dentalRoom:
    "https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  dentalDoc:
    "https://images.pexels.com/photos/3881440/pexels-photo-3881440.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

/* ------------------------------------------------------------------ *
 * 01 — CoreAxis BPO Solutions
 * Corporate, sharp-edged, trust-led. IBM Plex Sans. Radius 0.
 * ------------------------------------------------------------------ */
export function SiteCoreAxis() {
  return (
    <div className="w-full bg-white font-['IBM_Plex_Sans',sans-serif] text-[#0B1B33]">
      {/* utility bar */}
      <div className="flex items-center justify-between border-b border-[#E2E6EB] px-8 py-2 text-[9px] tracking-[0.12em] text-[#5A6B82]">
        <span>ISO 27001 CERTIFIED · SINCE 2011</span>
        <span className="flex gap-5">
          <span>+63 45 499 8200</span>
          <span className="text-[#1D4ED8]">CLIENT PORTAL</span>
        </span>
      </div>

      {/* nav */}
      <div className="flex items-center justify-between border-b border-[#E2E6EB] px-8 py-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-[17px] font-bold tracking-[-0.02em]">CoreAxis</span>
          <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#1D4ED8]">BPO</span>
        </div>
        <div className="flex gap-7 text-[10px] font-medium uppercase tracking-[0.1em] text-[#3E4E63]">
          <span>Services</span><span>Industries</span><span>Operations</span><span>Careers</span><span>Insights</span>
        </div>
        <div className="border border-[#0B1B33] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em]">
          Request Proposal
        </div>
      </div>

      {/* hero */}
      <div className="relative h-[300px]">
        <img src={P.bpoOffice} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B33]/92 via-[#0B1B33]/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <div className="mb-3 h-[2px] w-10 bg-[#1D4ED8]" />
          <p className="max-w-[300px] text-[26px] font-light leading-[1.15] tracking-[-0.02em] text-white">
            Outsourcing operations built on measurable accountability.
          </p>
          <p className="mt-3 max-w-[260px] text-[10px] leading-relaxed text-white/70">
            640 seats across three Clark facilities. Healthcare, finance and retail accounts
            with 99.4% SLA attainment.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="bg-[#1D4ED8] px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
              Review Capability Deck
            </span>
            <span className="border border-white/40 px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
              Our Operations
            </span>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div className="grid grid-cols-4 divide-x divide-[#E2E6EB] border-b border-[#E2E6EB]">
        {[
          ["640", "Seats in operation"],
          ["99.4%", "SLA attainment, FY25"],
          ["11 yrs", "Average client tenure"],
          ["3", "Clark facilities"],
        ].map(([n, l]) => (
          <div key={l} className="px-6 py-5">
            <div className="text-[20px] font-light tracking-[-0.02em]">{n}</div>
            <div className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#7A8899]">{l}</div>
          </div>
        ))}
      </div>

      {/* services */}
      <div className="px-8 py-8">
        <p className="text-[8px] uppercase tracking-[0.24em] text-[#1D4ED8]">Service Lines</p>
        <h3 className="mt-2 max-w-[320px] text-[17px] font-light leading-snug tracking-[-0.01em]">
          Four practices. One accountable operating model.
        </h3>
        <div className="mt-6 grid grid-cols-3 gap-0">
          {[
            ["Customer Experience", "Omnichannel voice, chat and email with workforce management on-site.", P.bpoMeeting],
            ["Back Office & Finance", "Order-to-cash, claims processing and reconciliation under named supervision."],
            ["Healthcare Support", "Credentialing and prior authorisation run to HIPAA-aligned procedure."],
          ].map(([t, d], i) => (
            <div key={t} className={`px-0 ${i > 0 ? "border-l border-[#E2E6EB] pl-6" : "pr-6"}`}>
              <div className="text-[9px] font-semibold text-[#1D4ED8]">0{i + 1}</div>
              <div className="mt-2 text-[12px] font-semibold leading-snug">{t}</div>
              <p className="mt-2 text-[9px] leading-relaxed text-[#5A6B82]">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* clients */}
      <div className="flex items-center justify-between border-t border-[#E2E6EB] bg-[#F7F8FA] px-8 py-4">
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#7A8899]">Accounts served</span>
        <div className="flex gap-8 text-[10px] font-semibold tracking-[0.1em] text-[#9AA6B5]">
          <span>MERIDIAN</span><span>Kestrel Health</span><span>NORTHBANK</span><span>Vantage Retail</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 02 — Sizzle House Kitchen
 * Dark editorial restaurant. Playfair Display. Menu with leaders.
 * ------------------------------------------------------------------ */
export function SiteSizzleHouse() {
  const menu = [
    ["Sizzling Sisig", "Pork jowl, chicken liver, calamari mayo, farm egg", "₱465"],
    ["Kare-Kare Bagnet", "Peanut annatto, banana blossom, bagoong alamang", "₱540"],
    ["Inihaw na Pusit", "Whole squid, tomato-silantro relish, toasted garlic", "₱520"],
    ["Crisp Tadyang", "12-hour beef ribs, native vinegar dip", "₱610"],
  ];
  return (
    <div className="w-full bg-[#141010] font-['Inter',sans-serif] text-[#F3EDE4]">
      {/* nav */}
      <div className="flex items-center justify-between px-8 py-5">
        <span className="text-[9px] tracking-[0.3em] text-[#C9A227]">ANGELES CITY</span>
        <div className="text-center">
          <div className="font-['Playfair_Display',serif] text-[18px] tracking-[0.02em]">Sizzle House</div>
          <div className="text-[7px] tracking-[0.42em] text-[#C9A227]">KITCHEN</div>
        </div>
        <span className="border border-[#C9A227]/60 px-4 py-1.5 text-[9px] tracking-[0.14em] text-[#C9A227]">
          RESERVE
        </span>
      </div>
      <div className="mx-8 h-px bg-[#C9A227]/20" />

      {/* hero */}
      <div className="relative h-[300px]">
        <img src={P.dishSeafood} alt="" className="h-full w-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141010] via-[#141010]/45 to-[#141010]/25" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-['Playfair_Display',serif] text-[11px] italic text-[#C9A227]">
            est. 2016 · Kapampangan kitchen
          </p>
          <h2 className="mt-2 max-w-[420px] font-['Playfair_Display',serif] text-[30px] font-normal leading-[1.1]">
            Fire, acid and patience — the whole animal, respected.
          </h2>
        </div>
      </div>

      {/* menu */}
      <div className="px-8 py-9">
        <div className="text-center">
          <p className="text-[8px] tracking-[0.42em] text-[#C9A227]">THE KITCHEN</p>
          <h3 className="mt-2 font-['Playfair_Display',serif] text-[19px]">Today&apos;s Offering</h3>
        </div>
        <div className="mx-auto mt-6 max-w-[420px]">
          {menu.map(([n, d, p]) => (
            <div key={n} className="border-b border-[#F3EDE4]/10 py-3">
              <div className="flex items-baseline gap-2">
                <span className="font-['Playfair_Display',serif] text-[13px]">{n}</span>
                <span className="flex-1 border-b border-dotted border-[#F3EDE4]/20" />
                <span className="text-[12px] text-[#C9A227]">{p}</span>
              </div>
              <p className="mt-1 text-[9px] italic leading-relaxed text-[#F3EDE4]/45">{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-3 gap-px">
        {[P.dishChicken, P.dishQuail, P.dishTomato].map((src) => (
          <img key={src} src={src} alt="" className="h-[110px] w-full object-cover" />
        ))}
      </div>

      {/* reserve */}
      <div className="px-8 py-9 text-center">
        <h3 className="font-['Playfair_Display',serif] text-[17px]">Reserve a table</h3>
        <p className="mx-auto mt-2 max-w-[280px] text-[9px] leading-relaxed text-[#F3EDE4]/50">
          Tuesday to Sunday, 11am until the last table leaves. Walk-ins at the bar.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <span className="bg-[#C9A227] px-6 py-2.5 text-[9px] font-semibold tracking-[0.14em] text-[#141010]">
            BOOK ONLINE
          </span>
          <span className="border border-[#F3EDE4]/25 px-6 py-2.5 text-[9px] tracking-[0.14em]">
            0917 244 0188
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 03 — Skyline Clark Hotel
 * Luxury hospitality. Cormorant Garamond, wide tracking, booking bar.
 * ------------------------------------------------------------------ */
export function SiteSkylineHotel() {
  return (
    <div className="w-full bg-[#F7F4EF] font-['Libre_Franklin',sans-serif] text-[#1A1A1A]">
      {/* nav */}
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex gap-6 text-[9px] tracking-[0.22em] text-[#1A1A1A]/70">
          <span>STAY</span><span>DINE</span><span>WELLNESS</span>
        </div>
        <div className="text-center">
          <div className="font-['Cormorant_Garamond',serif] text-[19px] tracking-[0.34em]">SKYLINE</div>
          <div className="text-[6.5px] tracking-[0.48em] text-[#A68B5B]">CLARK FREEPORT</div>
        </div>
        <div className="flex gap-6 text-[9px] tracking-[0.22em] text-[#1A1A1A]/70">
          <span>MEETINGS</span><span className="text-[#A68B5B]">RESERVE</span>
        </div>
      </div>

      {/* hero */}
      <div className="relative h-[300px]">
        <img src={P.hotelEntrance} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#14181C]/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[8px] tracking-[0.5em] text-white/75">A QUIET ADDRESS IN CLARK</p>
          <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-[34px] font-light tracking-[0.1em] text-white">
            Arrival, unhurried
          </h2>
        </div>
      </div>

      {/* booking bar */}
      <div className="mx-8 -mt-8 border border-[#1A1A1A]/10 bg-white shadow-[0_18px_50px_-30px_rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-4 divide-x divide-[#1A1A1A]/10">
          {[
            ["ARRIVAL", "Fri, 14 Nov"],
            ["DEPARTURE", "Sun, 16 Nov"],
            ["GUESTS", "2 Adults"],
            ["ROOMS", "1 Deluxe"],
          ].map(([l, v]) => (
            <div key={l} className="px-5 py-4">
              <div className="text-[7px] tracking-[0.24em] text-[#A68B5B]">{l}</div>
              <div className="mt-1.5 font-['Cormorant_Garamond',serif] text-[14px]">{v}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#1A1A1A]/10 bg-[#1A1A1A] py-3 text-center text-[9px] tracking-[0.28em] text-[#F7F4EF]">
          CHECK AVAILABILITY
        </div>
      </div>

      {/* intro */}
      <div className="px-8 py-10 text-center">
        <h3 className="mx-auto max-w-[380px] font-['Cormorant_Garamond',serif] text-[20px] font-light leading-[1.4]">
          One hundred and eight rooms, a rooftop pool at 30 metres, and a kitchen that
          takes its time.
        </h3>
        <div className="mx-auto mt-5 h-px w-16 bg-[#A68B5B]" />
      </div>

      {/* rooms */}
      <div className="grid grid-cols-3 gap-6 px-8 pb-10">
        {[
          ["Deluxe King", "From ₱7,400", P.hotelFacade],
          ["Corner Suite", "From ₱12,900", P.hotelDusk],
          ["Skyline Room", "From ₱9,200", P.hotelEntrance],
        ].map(([n, p, src]) => (
          <div key={n}>
            <img src={src} alt="" className="h-[120px] w-full object-cover" />
            <div className="mt-3 flex items-baseline justify-between">
              <span className="font-['Cormorant_Garamond',serif] text-[14px]">{n}</span>
              <span className="text-[8px] tracking-[0.14em] text-[#A68B5B]">{p}</span>
            </div>
            <div className="mt-2 h-px w-full bg-[#1A1A1A]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 04 — Goldenfield Estates
 * High-end real estate. Fraunces serif + DM Sans, property cards.
 * ------------------------------------------------------------------ */
export function SiteGoldenfield() {
  const listings = [
    ["Waterfront Residence", "₱18,500,000", "5 bd · 4 ba · 420 sqm", P.houseWater],
    ["The Maples, Phase II", "₱9,200,000", "4 bd · 3 ba · 265 sqm", P.houseSub],
    ["Herran Lofts", "₱6,750,000", "2 bd · 2 ba · 98 sqm", P.houseApt],
  ];
  return (
    <div className="w-full bg-white font-['DM_Sans',sans-serif] text-[#14181C]">
      {/* nav */}
      <div className="flex items-center justify-between px-8 py-5">
        <div className="font-['Fraunces',serif] text-[16px] font-semibold tracking-[-0.01em]">
          Goldenfield
          <span className="ml-1.5 align-super text-[7px] font-normal uppercase tracking-[0.22em] text-[#1B3A2F]">
            Estates
          </span>
        </div>
        <div className="flex gap-6 text-[10px] text-[#4A5561]">
          <span>Listings</span><span>Developments</span><span>Advisory</span><span>Journal</span>
        </div>
        <span className="bg-[#1B3A2F] px-4 py-2 text-[9px] font-medium tracking-[0.06em] text-white">
          Book a Viewing
        </span>
      </div>

      {/* hero — split, text left / photo right */}
      <div className="grid grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center bg-[#F7F5F0] px-8 py-12">
          <p className="text-[8px] uppercase tracking-[0.26em] text-[#1B3A2F]">Pampanga · Est. 2004</p>
          <h2 className="mt-4 font-['Fraunces',serif] text-[27px] font-medium leading-[1.1] tracking-[-0.015em]">
            Property, advised properly.
          </h2>
          <p className="mt-4 max-w-[240px] text-[10px] leading-relaxed text-[#5C6672]">
            Thirty-one licensed brokers handling residential, estate and pre-selling
            inventory across Central Luzon.
          </p>
          <div className="mt-6 flex gap-8">
            {[["₱2.1B", "Closed 2025"], ["312", "Active listings"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-['Fraunces',serif] text-[18px] font-medium text-[#1B3A2F]">{n}</div>
                <div className="text-[8px] uppercase tracking-[0.14em] text-[#8A939E]">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={P.houseWater} alt="" className="h-[290px] w-full object-cover" />
      </div>

      {/* filter row */}
      <div className="flex items-center justify-between border-y border-[#E6E8E6] px-8 py-3">
        <span className="text-[8px] uppercase tracking-[0.22em] text-[#8A939E]">
          312 PROPERTIES
        </span>
        <div className="flex gap-5 text-[9px] text-[#4A5561]">
          <span className="border-b-2 border-[#1B3A2F] pb-0.5 font-medium">All</span>
          <span>House &amp; Lot</span><span>Condominium</span><span>Pre-selling</span><span>Lot only</span>
        </div>
      </div>

      {/* listings */}
      <div className="grid grid-cols-3 gap-6 px-8 py-8">
        {listings.map(([n, p, spec, src]) => (
          <div key={n} className="border border-[#E6E8E6]">
            <img src={src} alt="" className="h-[120px] w-full object-cover" />
            <div className="p-4">
              <div className="font-['Fraunces',serif] text-[13px] font-medium">{n}</div>
              <div className="mt-1 text-[14px] font-medium text-[#1B3A2F]">{p}</div>
              <div className="mt-2 text-[8px] uppercase tracking-[0.12em] text-[#8A939E]">{spec}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 05 — BrightSmile Dental Studio
 * Modern healthcare. DM Sans, soft radii, appointment card.
 * ------------------------------------------------------------------ */
export function SiteBrightSmile() {
  return (
    <div className="w-full bg-white font-['DM_Sans',sans-serif] text-[#0F2027]">
      {/* nav */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E7C7B] text-[11px] font-bold text-white">
            B
          </span>
          <span className="text-[14px] font-bold tracking-[-0.01em]">BrightSmile</span>
        </div>
        <div className="flex gap-6 text-[11px] text-[#4A5A66]">
          <span>Treatments</span><span>Our Team</span><span>Fees</span><span>Patients</span>
        </div>
        <span className="rounded-full bg-[#0E7C7B] px-5 py-2 text-[11px] font-medium text-white">
          Book Appointment
        </span>
      </div>

      {/* hero split */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center bg-[#EAF5F4] px-8 py-12">
          <span className="w-fit rounded-full bg-[#0E7C7B]/10 px-3 py-1 text-[9px] font-medium text-[#0E7C7B]">
            Now accepting new patients
          </span>
          <h2 className="mt-4 text-[26px] font-bold leading-[1.15] tracking-[-0.02em]">
            Dentistry that explains itself first.
          </h2>
          <p className="mt-3 max-w-[250px] text-[10.5px] leading-relaxed text-[#4A5A66]">
            Every treatment plan comes with the price, the sequence and the reason —
            before we begin. Interest-free instalments available.
          </p>
          <div className="mt-6 flex gap-6">
            {[["4.9★", "612 reviews"], ["15 min", "Avg. wait"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-[15px] font-bold text-[#0E7C7B]">{n}</div>
                <div className="text-[8.5px] text-[#7A8899]">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={P.dentalDoc} alt="" className="h-[280px] w-full object-cover" />
      </div>

      {/* appointment card */}
      <div className="mx-8 -mt-10 rounded-2xl bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,32,39,0.28)]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[15px] font-bold">Book a consultation</h3>
            <p className="mt-1 text-[10px] text-[#7A8899]">Takes under a minute. We confirm by SMS.</p>
          </div>
          <span className="rounded-full bg-[#0E7C7B] px-5 py-2.5 text-[11px] font-medium text-white">
            Find a Slot
          </span>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3">
          {["Full name", "Mobile number", "Treatment", "Preferred date"].map((f) => (
            <div key={f} className="rounded-lg bg-[#F4F7F7] px-3 py-2.5 text-[10px] text-[#9AA8AE]">
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* treatments */}
      <div className="px-8 py-9">
        <div className="flex items-end justify-between">
          <h3 className="text-[16px] font-bold">Treatments</h3>
          <span className="text-[10px] text-[#0E7C7B]">See all fees →</span>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-4">
          {[
            ["Cleaning", "₱1,800", P.dentalChair],
            ["Braces", "from ₱65,000", P.dentalRoom],
            ["Implants", "from ₱48,000", P.dentalChair],
            ["Whitening", "₱9,500", P.dentalRoom],
          ].map(([t, p, src]) => (
            <div key={t} className="overflow-hidden rounded-xl border border-[#E8EEED]">
              <img src={src} alt="" className="h-[76px] w-full object-cover" />
              <div className="p-3">
                <div className="text-[11px] font-medium">{t}</div>
                <div className="mt-0.5 text-[10px] text-[#0E7C7B]">{p}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
