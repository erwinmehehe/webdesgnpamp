/**
 * Portfolio site designs 6–10.
 * Standalone identities: B2B logistics, brutalist construction, calm
 * medical, editorial property investment, and B2B industrial supply.
 */

const P = {
  dockTrailers:
    "https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  truckRed:
    "https://images.pexels.com/photos/5876475/pexels-photo-5876475.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  truckVolvo:
    "https://images.pexels.com/photos/12418935/pexels-photo-12418935.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  craneTower:
    "https://images.pexels.com/photos/14486702/pexels-photo-14486702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  cranesCity:
    "https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  engineerPlan:
    "https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  engineersTeam:
    "https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  doctorSerious:
    "https://images.pexels.com/photos/4989136/pexels-photo-4989136.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  doctorSmile:
    "https://images.pexels.com/photos/4227090/pexels-photo-4227090.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  aerialSub:
    "https://images.pexels.com/photos/33326698/pexels-photo-33326698.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  aerialField:
    "https://images.pexels.com/photos/37520984/pexels-photo-37520984.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  wareWorker:
    "https://images.pexels.com/photos/31112250/pexels-photo-31112250.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  wareShelves:
    "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  wareOrange:
    "https://images.pexels.com/photos/4487364/pexels-photo-4487364.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};

/* ------------------------------------------------------------------ *
 * 06 — Starlane Logistics
 * B2B freight. Graphite + safety orange. Mono numerals, lane table.
 * ------------------------------------------------------------------ */
export function SiteStarlane() {
  const lanes = [
    ["CLARK → BATANGAS PORT", "Full Container Load", "Daily", "14–16 hrs"],
    ["CLARK → DAVAO (via Cebu)", "Breakbulk / FCL", "Tue · Fri", "4–6 days"],
    ["MABALACAT → BGC", "Less than truckload", "Daily", "5–7 hrs"],
    ["PORAC → SUBIC BAY", "Bonded transfer", "Mon · Thu", "3–4 hrs"],
  ];
  return (
    <div className="w-full bg-white font-['Archivo',sans-serif] text-[#16181D]">
      {/* dense utility bar */}
      <div className="flex items-center justify-between bg-[#16181D] px-8 py-2 text-[8.5px] tracking-[0.1em] text-white/60">
        <span>24/7 DISPATCH · +63 917 882 4460</span>
        <div className="flex gap-5">
          <span>SHIPPER LOGIN</span><span>TRACK CARGO</span><span>DRIVER PORTAL</span>
        </div>
      </div>

      {/* nav */}
      <div className="flex items-center justify-between border-b-2 border-[#E8590C] px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1.5 bg-[#E8590C]" />
          <span className="text-[16px] font-bold tracking-[0.14em]">STARLANE</span>
        </div>
        <div className="flex gap-7 text-[10px] font-medium uppercase tracking-[0.12em] text-[#4A5160]">
          <span>Services</span><span>Lanes</span><span>Fleet</span><span>Warehousing</span><span>Company</span>
        </div>
        <span className="bg-[#E8590C] px-5 py-2 text-[9.5px] font-bold uppercase tracking-[0.12em] text-white">
          Request a Rate
        </span>
      </div>

      {/* hero */}
      <div className="relative h-[280px]">
        <img src={P.dockTrailers} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#16181D]/72" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-1.5 w-1.5 bg-[#E8590C]" />
            <span className="text-[8.5px] tracking-[0.28em] text-white/70">
              LUZON · VISAYAS · MINDANAO
            </span>
          </div>
          <h2 className="max-w-[330px] text-[28px] font-bold uppercase leading-[1.08] tracking-[0.01em] text-white">
            Freight that leaves when the manifest says so.
          </h2>
          <div className="mt-5 flex gap-8">
            {[["148", "Trucks"], ["99.1%", "On-time"], ["38", "Lanes"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-[18px] font-medium text-[#E8590C]">{n}</div>
                <div className="text-[8px] uppercase tracking-[0.18em] text-white/55">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* services */}
      <div className="grid grid-cols-4 divide-x divide-[#E6E8EA] border-b border-[#E6E8EA]">
        {[
          ["Full Truckload", "Dedicated unit, direct routing."],
          ["Less than Truckload", "Consolidated, scheduled departures."],
          ["Warehousing", "12,000 sqm bonded facility."],
          ["Project Cargo", "Oversized, escorted movements."],
        ].map(([t, d], i) => (
          <div key={t} className="px-6 py-6">
            <div className="font-mono text-[9px] text-[#E8590C]">0{i + 1}</div>
            <div className="mt-2 text-[11.5px] font-bold uppercase tracking-[0.04em]">{t}</div>
            <p className="mt-1.5 text-[9px] leading-relaxed text-[#6B7280]">{d}</p>
          </div>
        ))}
      </div>

      {/* lane table */}
      <div className="px-8 py-8">
        <div className="flex items-baseline justify-between">
          <h3 className="text-[15px] font-bold uppercase tracking-[0.05em]">Scheduled lanes</h3>
          <span className="font-mono text-[9px] text-[#6B7280]">UPDATED 04 NOV</span>
        </div>
        <table className="mt-4 w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-[#16181D] text-[8px] uppercase tracking-[0.16em] text-[#6B7280]">
              <th className="pb-2">Lane</th><th className="pb-2">Service</th>
              <th className="pb-2">Departure</th><th className="pb-2 text-right">Transit</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[10px]">
            {lanes.map(([a, b, c, d]) => (
              <tr key={a} className="border-b border-[#E6E8EA]">
                <td className="py-2.5 font-semibold">{a}</td>
                <td className="py-2.5 text-[#6B7280]">{b}</td>
                <td className="py-2.5 text-[#6B7280]">{c}</td>
                <td className="py-2.5 text-right text-[#E8590C]">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* fleet photo band */}
      <div className="relative h-[150px]">
        <img src={P.truckVolvo} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-between bg-[#16181D]/55 px-8">
          <p className="max-w-[300px] text-[15px] font-bold uppercase leading-tight text-white">
           Owned fleet, GPS-tracked, driver-retained.
          </p>
          <span className="border border-white/50 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            Fleet Specification
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
 * 07 — Ironpeak Builders
 * Brutalist construction. Heavy condensed uppercase, yellow accents.
 * ------------------------------------------------------------------ */
export function SiteIronpeak() {
  const projects = [
    ["NORTHGATE LOGISTICS HUB", "Industrial · 18,400 sqm · 2025"],
    ["CASA MIRADOR", "Residential · 42 units · 2024"],
    ["SAN FERNANDO RETAIL ROW", "Commercial · 3,200 sqm · 2024"],
  ];
  return (
    <div className="w-full bg-[#0E0E10] font-['Archivo',sans-serif] text-white">
      {/* nav */}
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-[#FFC800] px-1.5 py-1 text-[13px] font-black leading-none text-[#0E0E10]">IP</div>
          <span className="text-[15px] font-extrabold uppercase tracking-[0.06em]">Ironpeak</span>
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white/60">
          <span>Projects</span><span>Capability</span><span>Safety</span><span>Pre-qualification</span>
        </div>
        <span className="bg-[#FFC800] px-4 py-2 text-[9.5px] font-extrabold uppercase tracking-[0.1em] text-[#0E0E10]">
          Request Bid
        </span>
      </div>

      {/* hero */}
      <div className="relative h-[300px]">
        <img src={P.craneTower} alt="" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-8 pb-8">
          <h2 className="max-w-[430px] text-[40px] font-black uppercase leading-[0.92] tracking-[-0.02em]">
            We build
            <br />
            <span className="text-[#FFC800]">heavy.</span>
          </h2>
          <p className="mt-3 max-w-[300px] text-[10px] leading-relaxed text-white/65">
            General contracting and design-build across Central Luzon. ₱1.4B delivered,
            zero lost-time incidents in 2025.
          </p>
        </div>
      </div>

      {/* capability strip */}
      <div className="grid grid-cols-4 divide-x divide-white/10 border-y border-white/10">
        {[
          ["DESIGN-BUILD", "Single contract, single risk."],
          ["GENERAL CONTRACTING", "Bid, build, hand over."],
          ["CIVIL WORKS", "Site development, roads."],
          ["FIT-OUT", "Industrial and retail."],
        ].map(([t, d]) => (
          <div key={t} className="px-6 py-5">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.06em] text-[#FFC800]">{t}</div>
            <p className="mt-1.5 text-[9px] text-white/50">{d}</p>
          </div>
        ))}
      </div>

      {/* projects */}
      <div className="px-8 py-9">
        <div className="flex items-baseline justify-between">
          <h3 className="text-[22px] font-black uppercase tracking-[-0.01em]">Selected work</h3>
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#FFC800]">
            All projects →
          </span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-5">
          {projects.map(([n, m], i) => (
            <div key={n} className="group">
              <div className="flex items-baseline gap-2">
                <span className="text-[26px] font-black leading-none text-white/12">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <img src={[P.engineerPlan, P.cranesCity, P.engineersTeam][i]} alt=""
                   className="mt-3 h-[100px] w-full object-cover" />
              <div className="mt-2.5 text-[11px] font-extrabold uppercase leading-tight tracking-[0.02em]">
                {n}
              </div>
              <div className="mt-1 text-[8.5px] uppercase tracking-[0.1em] text-white/40">{m}</div>
            </div>
          ))}
        </div>
      </div>

      {/* safety band */}
      <div className="flex items-center justify-between bg-[#FFC800] px-8 py-5 text-[#0E0E10]">
        <p className="text-[13px] font-black uppercase leading-tight">
          Zero lost-time incidents.
          <span className="ml-2 font-medium normal-case opacity-70">Audited quarterly, documented always.</span>
        </p>
        <span className="border-2 border-[#0E0E10] px-5 py-2 text-[9px] font-extrabold uppercase tracking-[0.1em]">
          Safety Record
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
 * 08 — Northvale Medical Clinic
 * Calm, credible healthcare. Libre Franklin, generous whitespace.
 * ------------------------------------------------------------------ */
export function SiteNorthvale() {
  return (
    <div className="w-full bg-[#FBFAF8] font-['Libre_Franklin',sans-serif] text-[#12355B]">
      {/* nav */}
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#12355B] text-[13px] font-semibold text-white">
            N
          </div>
          <div>
            <div className="text-[14px] font-semibold leading-none">Northvale</div>
            <div className="mt-0.5 text-[7px] uppercase tracking-[0.24em] text-[#12355B]/55">
              Medical Clinic
            </div>
          </div>
        </div>
        <div className="flex gap-7 text-[11px] text-[#12355B]/70">
          <span>Services</span><span>Physicians</span><span>HMO</span><span>Results</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-[#12355B]/60">(045) 886 2200</span>
          <span className="rounded-md border border-[#12355B]/25 px-4 py-2 text-[10.5px] font-medium">
            Book Visit
          </span>
        </div>
      </div>

      {/* hero */}
      <div className="grid grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center px-8 py-12">
          <p className="text-[9px] uppercase tracking-[0.24em] text-[#12355B]/50">
            San Fernando · Open Monday to Saturday
          </p>
          <h2 className="mt-4 max-w-[320px] text-[25px] font-light leading-[1.2] tracking-[-0.01em]">
            Primary care, diagnostics and follow-through — under one roof.
          </h2>
          <p className="mt-4 max-w-[290px] text-[10.5px] leading-relaxed text-[#12355B]/65">
            Twelve physicians across internal medicine, paediatrics and obstetrics.
            Laboratory results released the same day.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="rounded-md bg-[#12355B] px-5 py-2.5 text-[10.5px] font-medium text-white">
              Request Appointment
            </span>
            <span className="rounded-md border border-[#12355B]/20 px-5 py-2.5 text-[10.5px] font-medium">
              View Physicians
            </span>
          </div>
        </div>
        <img src={P.doctorSerious} alt="" className="h-[280px] w-full object-cover" />
      </div>

      {/* accreditation */}
      <div className="border-y border-[#12355B]/10 bg-white px-8 py-4">
        <div className="flex items-center justify-between">
          <span className="text-[8px] uppercase tracking-[0.22em] text-[#12355B]/45">
            Accredited HMO provider
          </span>
          <div className="flex gap-7 text-[10px] font-medium tracking-[0.06em] text-[#12355B]/35">
            <span>MAXICARE</span><span>Intellicare</span><span>MEDICARD</span><span>Cardinal</span>
          </div>
        </div>
      </div>

      {/* physician + services */}
      <div className="grid grid-cols-[0.95fr_1.05fr] gap-10 px-8 py-10">
        <div>
          <img src={P.doctorSmile} alt="" className="h-[170px] w-full object-cover" />
          <div className="mt-4">
            <div className="text-[8px] uppercase tracking-[0.22em] text-[#12355B]/50">
              Internal Medicine
            </div>
            <h3 className="mt-1.5 text-[14px] font-semibold">Dr. Amelita R. Navarro</h3>
            <p className="mt-1 text-[9.5px] leading-relaxed text-[#12355B]/60">
              Fellow, Philippine College of Physicians. Practising since 2009. Consults
              Mondays, Wednesdays and Fridays, 9am–4pm.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold">Clinical services</h3>
          <div className="mt-4">
            {[
              ["General consultation", "Same-day slots held for urgent cases."],
              ["Laboratory & imaging", "CBC, lipid panel, X-ray, ultrasound."],
              ["Executive check-up", "Three packages, results in 24 hours."],
              ["Vaccination", "Paediatric and adult schedules."],
            ].map(([t, d], i) => (
              <div key={t} className={`flex gap-5 py-3.5 ${i > 0 ? "border-t border-[#12355B]/10" : ""}`}>
                <span className="text-[9px] text-[#12355B]/35">0{i + 1}</span>
                <div>
                  <div className="text-[11.5px] font-medium">{t}</div>
                  <p className="mt-0.5 text-[9.5px] leading-relaxed text-[#12355B]/60">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
 * 09 — Verdant Property Group
 * Editorial property investment. Cormorant + Libre Franklin.
 * ------------------------------------------------------------------ */
export function SiteVerdant() {
  return (
    <div className="w-full bg-[#F5F2EC] font-['Libre_Franklin',sans-serif] text-[#2F3A2E]">
      {/* masthead */}
      <div className="flex items-center justify-between px-8 py-5">
        <span className="text-[9px] tracking-[0.2em] text-[#2F3A2E]/50">EST. 1998</span>
        <div className="text-center">
          <div className="font-['Cormorant_Garamond',serif] text-[20px] tracking-[0.2em]">VERDANT</div>
          <div className="text-[6.5px] uppercase tracking-[0.44em] text-[#8C6E4A]">
            Property Group
          </div>
        </div>
        <span className="text-[9px] tracking-[0.16em] text-[#8C6E4A]">INVESTOR RELATIONS</span>
      </div>
      <div className="mx-8 h-px bg-[#2F3A2E]/15" />

      {/* hero — centred masthead style */}
      <div className="px-8 py-10 text-center">
        <p className="text-[8.5px] uppercase tracking-[0.4em] text-[#8C6E4A]">
          Land, held and developed
        </p>
        <h2 className="mx-auto mt-4 max-w-[440px] font-['Cormorant_Garamond',serif] text-[32px] font-light leading-[1.15] tracking-[0.01em]">
          Four hundred hectares in Pampanga, and no intention of rushing it.
        </h2>
        <p className="mx-auto mt-4 max-w-[380px] text-[10.5px] leading-relaxed text-[#2F3A2E]/65">
          We acquire contiguous farmland, secure titling, then develop in phases —
          selling only what is finished and documented.
        </p>
      </div>

      {/* aerial band */}
      <div className="relative h-[190px]">
        <img src={P.aerialSub} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#2F3A2E]/22" />
      </div>

      {/* editorial stat row */}
      <div className="grid grid-cols-4 divide-x divide-[#2F3A2E]/12 border-b border-[#2F3A2E]/12">
        {[
          ["412", "Hectares held"],
          ["2,860", "Lots titled"],
          ["6", "Phases delivered"],
          ["27 yrs", "Operating"],
        ].map(([n, l]) => (
          <div key={l} className="px-6 py-7 text-center">
            <div className="font-['Cormorant_Garamond',serif] text-[27px] font-light leading-none">{n}</div>
            <div className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#2F3A2E]/50">{l}</div>
          </div>
        ))}
      </div>

      {/* masterplan */}
      <div className="grid grid-cols-[1fr_1.15fr] gap-10 px-8 py-10">
        <div>
          <p className="text-[8.5px] uppercase tracking-[0.3em] text-[#8C6E4A]">Current phase</p>
          <h3 className="mt-3 font-['Cormorant_Garamond',serif] text-[22px] font-light leading-tight">
            Hacienda Verde, Phase VI
          </h3>
          <p className="mt-3 max-w-[280px] text-[10px] leading-relaxed text-[#2F3A2E]/65">
            320 titled lots from 240 sqm. Roadworks complete, drainage certified,
            96 lots remaining at release pricing.
          </p>
          <span className="mt-6 inline-block border-b border-[#8C6E4A] pb-1 text-[9.5px] tracking-[0.16em] text-[#8C6E4A]">
            DOWNLOAD MASTERPLAN
          </span>
        </div>
        <div>
          <img src={P.aerialField} alt="" className="h-[190px] w-full object-cover" />
          <div className="mt-4 grid grid-cols-2 gap-5">
            {[
              ["Lot sizes", "240 – 480 sqm"],
              ["Release price", "₱8,500 / sqm"],
              ["Title status", "Clean, individually titled"],
              ["Turnover", "Immediate on 60%"],
            ].map(([l, v]) => (
              <div key={l} className="border-t border-[#2F3A2E]/15 pt-3">
                <div className="text-[8px] uppercase tracking-[0.18em] text-[#2F3A2E]/45">{l}</div>
                <div className="mt-1 text-[12px] font-medium">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
 * 10 — Tradeline Industrial Supply
 * B2B distributor. Steel blue, mono SKUs, catalogue structure.
 * ------------------------------------------------------------------ */
export function SiteTradeline() {
  const cats = [
    ["Power Tools", "1,240 SKUs", P.wareWorker],
    ["Safety & PPE", "860 SKUs", P.wareOrange],
    ["Fasteners", "3,100 SKUs", P.wareShelves],
    ["Electrical", "940 SKUs", P.wareWorker],
  ];
  const specs = [
    ["TL-BLT-0814", "Angle grinder 4½\" 900W", "Makita", "₱3,450"],
    ["TL-WLD-2203", "Welding shield auto-dark", "Bosch", "₱5,890"],
    ["TL-FAST-1190", "Hex bolt M12×60 (100pcs)", "Trademark", "₱1,240"],
  ];
  return (
    <div className="w-full bg-white font-['IBM_Plex_Sans',sans-serif] text-[#16283C]">
      {/* utility bar */}
      <div className="flex items-center justify-between bg-[#1F3C5C] px-8 py-2 text-[8.5px] tracking-[0.1em] text-white/70">
        <span>VAT-REGISTERED · 22 YEARS SUPPLYING CENTRAL LUZON</span>
        <div className="flex gap-5">
          <span>TRADE ACCOUNT</span><span>CREDIT APPLICATION</span><span>DOWNLOAD CATALOGUE</span>
        </div>
      </div>

      {/* nav + search */}
      <div className="flex items-center justify-between border-b border-[#E2E8EE] px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#1F3C5C] text-[12px] font-bold text-white">
            T
          </div>
          <span className="text-[14px] font-bold tracking-[-0.01em]">Tradeline</span>
        </div>
        <div className="flex w-[300px] items-center gap-2 rounded border border-[#D7DEE5] px-3 py-2">
          <span className="text-[10px] text-[#9AA8B5]">Search 6,400 SKUs…</span>
        </div>
        <div className="flex gap-6 text-[10px] font-medium text-[#4A5C70]">
          <span>Categories</span><span>Brands</span><span>Quotes</span><span>Support</span>
        </div>
        <span className="flex flex-col items-end">
          <span className="text-[8px] uppercase tracking-[0.16em] text-[#9AA8B5]">Trade desk</span>
          <span className="text-[10px] font-semibold">(045) 901 7742</span>
        </span>
      </div>

      {/* category banner */}
      <div className="grid grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-8 py-10">
          <p className="text-[8px] uppercase tracking-[0.24em] text-[#1F3C5C]/55">
            Industrial &amp; maintenance supply
          </p>
          <h2 className="mt-3 max-w-[300px] text-[24px] font-semibold leading-[1.15] tracking-[-0.02em]">
            6,400 line items. One purchase order.
          </h2>
          <p className="mt-3 max-w-[270px] text-[10px] leading-relaxed text-[#5A6C7E]">
            Serving plants, contractors and LGUs across Pampanga. Volume pricing
            published on account, 48-hour Luzon delivery.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="bg-[#1F3C5C] px-5 py-2.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white">
              Open Trade Account
            </span>
            <span className="border border-[#D7DEE5] px-5 py-2.5 text-[9.5px] font-semibold uppercase tracking-[0.1em]">
              Browse Catalogue
            </span>
          </div>
        </div>
        <img src={P.wareWorker} alt="" className="h-[240px] w-full object-cover" />
      </div>

      {/* categories */}
      <div className="border-y border-[#E2E8EE] bg-[#F6F8FA] px-8 py-7">
        <div className="flex items-baseline justify-between">
          <h3 className="font-['Oswald',sans-serif] text-[14px] font-medium uppercase tracking-[0.08em]">Shop by category</h3>
          <span className="text-[9px] text-[#1F3C5C]">All categories →</span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {cats.map(([t, c, src]) => (
            <div key={t} className="border border-[#E2E8EE] bg-white">
              <img src={src} alt="" className="h-[78px] w-full object-cover" />
              <div className="p-3">
                <div className="text-[11px] font-semibold">{t}</div>
                <div className="mt-0.5 font-mono text-[8.5px] text-[#8A98A6]">{c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* spec table */}
      <div className="px-8 py-8">
        <div className="flex items-baseline justify-between">
          <h3 className="text-[13px] font-bold uppercase tracking-[0.05em]">Featured stock</h3>
          <span className="font-mono text-[8.5px] text-[#8A98A6]">PRICES EX-VAT · 04 NOV</span>
        </div>
        <table className="mt-4 w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-[#1F3C5C] text-[8px] uppercase tracking-[0.14em] text-[#6B7B8A]">
              <th className="pb-2">SKU</th><th className="pb-2">Description</th>
              <th className="pb-2">Brand</th><th className="pb-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="text-[10px]">
            {specs.map(([sku, d, b, p]) => (
              <tr key={sku} className="border-b border-[#E2E8EE]">
                <td className="py-2.5 font-mono text-[9px] text-[#1F3C5C]">{sku}</td>
                <td className="py-2.5">{d}</td>
                <td className="py-2.5 text-[#6B7B8A]">{b}</td>
                <td className="py-2.5 text-right font-semibold">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* trade banner */}
      <div className="flex items-center justify-between bg-[#1F3C5C] px-8 py-5">
        <p className="text-[13px] font-semibold text-white">
          Net-30 terms for verified accounts.
          <span className="ml-2 text-[10px] font-normal text-white/60">
            Approval within two working days.
          </span>
        </p>
        <span className="bg-white px-5 py-2 text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#1F3C5C]">
          Apply Now
        </span>
      </div>
    </div>
  );
}
