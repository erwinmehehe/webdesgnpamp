import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Menu, Search, X } from "lucide-react";

type View = "home" | "menu" | "gallery" | "reserve";
const gold = "#C9A227";
const photos = [
  "https://images.pexels.com/photos/24289213/pexels-photo-24289213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500",
  "https://images.pexels.com/photos/24186393/pexels-photo-24186393.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500",
  "https://images.pexels.com/photos/24246212/pexels-photo-24246212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500",
  "https://images.pexels.com/photos/24186309/pexels-photo-24186309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500",
];
const menu = [
  { name: "Sizzling Sisig", category: "Mains", price: "₱465", description: "Pork jowl, chicken liver, calamansi mayo, farm egg.", photo: photos[1] },
  { name: "Kare-Kare Bagnet", category: "Mains", price: "₱540", description: "Peanut annatto, banana blossom, bagoong alamang.", photo: photos[2] },
  { name: "Inihaw na Pusit", category: "Mains", price: "₱520", description: "Whole squid, tomato-silantro relish, toasted garlic.", photo: photos[0] },
  { name: "Crisp Tadyang", category: "Mains", price: "₱610", description: "Slow-cooked beef ribs, spiced native vinegar.", photo: photos[3] },
  { name: "Smoked Eggplant Salad", category: "Sides", price: "₱220", description: "Tomato, onion and bright citrus dressing.", photo: photos[3] },
  { name: "Calamansi Cooler", category: "Drinks", price: "₱160", description: "Citrus, sparkling water and mint.", photo: photos[2] },
];
const categories = ["All", "Mains", "Sides", "Drinks"];

export function SizzleHouseDemo() {
  const [view, setView] = useState<View>("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [shortlist, setShortlist] = useState<string[]>([]);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("");
  const [preview, setPreview] = useState(false);
  const filtered = useMemo(() => menu.filter((dish) =>
    (category === "All" || dish.category === category) &&
    (dish.name + " " + dish.description).toLowerCase().includes(query.toLowerCase()),
  ), [category, query]);

  const navigate = (next: View) => {
    setView(next);
    setMobileOpen(false);
    setPreview(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const toggleShortlist = (name: string) => setShortlist((old) =>
    old.includes(name) ? old.filter((item) => item !== name) : [...old, name]);
  const openLightbox = (index: number) => setLightbox(index);

  useEffect(() => {
    if (lightbox === null) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [lightbox]);

  const submitReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (date) setPreview(true);
  };
  const navItems: { label: string; id: View }[] = [
    { label: "The Kitchen", id: "home" },
    { label: "Menu", id: "menu" },
    { label: "Gallery", id: "gallery" },
    { label: "Reserve", id: "reserve" },
  ];
  const goldButton = "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#C9A227] px-7 py-3 text-sm font-bold tracking-wide text-[#141010] transition-colors hover:bg-[#e2c35c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]";
  return (
    <div className="min-h-screen bg-[#141010] font-['Inter',sans-serif] text-[#F3EDE4]">
      <div className="border-b border-[#C9A227]/20 px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C9A227]">
        Sizzle House Kitchen · Fictional hospitality concept
      </div>
      <header className="relative z-20 border-b border-[#C9A227]/25 bg-[#141010]">
        <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <button type="button" onClick={() => navigate("home")} className="text-left" aria-label="Sizzle House Kitchen home">
            <span className="block font-['Playfair_Display',Georgia,serif] text-[25px] tracking-[-0.035em] sm:text-[30px]">Sizzle House</span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.52em] text-[#C9A227]">KITCHEN</span>
          </button>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Restaurant demo navigation">
            {navItems.map((item) => (
              <button key={item.id} type="button" aria-current={view === item.id ? "page" : undefined}
                onClick={() => navigate(item.id)}
                className={"border-b-2 pb-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors " +
                  (view === item.id ? "border-[#C9A227] text-[#C9A227]" : "border-transparent text-white/65 hover:text-white")}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => navigate("reserve")} className="hidden min-h-11 rounded-sm border border-[#C9A227] px-5 text-xs font-semibold uppercase tracking-[0.13em] text-[#C9A227] hover:bg-[#C9A227]/10 sm:inline-block">Reserve</button>
            <button type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((old) => !old)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 md:hidden">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="border-t border-[#C9A227]/20 bg-[#1b1515] px-5 py-3 md:hidden" aria-label="Mobile restaurant navigation">
            {navItems.map((item) => <button type="button" key={item.id} onClick={() => navigate(item.id)}
              className="block min-h-12 w-full border-b border-white/10 py-3 text-left text-sm font-semibold uppercase tracking-widest">{item.label}</button>)}
          </nav>
        )}
      </header>

      {view === "home" && (
        <div>
          <section className="relative isolate flex min-h-[550px] items-center overflow-hidden lg:min-h-[670px]">
            <img src={photos[0]} alt="Illustrative seafood dish served on a plate" className="absolute inset-0 -z-20 h-full w-full object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#141010]/95 via-[#141010]/72 to-[#141010]/20" />
            <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10">
              <p className="font-['Playfair_Display',Georgia,serif] text-lg italic text-[#C9A227]">A concept kitchen rooted in Pampanga</p>
              <h1 className="mt-6 max-w-3xl font-['Playfair_Display',Georgia,serif] text-[clamp(3rem,6.5vw,6.7rem)] leading-[1.02] tracking-[-0.05em]">
                Fire, acid<br />and patience.
              </h1>
              <p className="mt-7 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                A restaurant website experience designed around the menu, the story and a clear next step for guests.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button type="button" onClick={() => navigate("menu")} className={goldButton}>Explore the menu <ArrowRight className="h-4 w-4" /></button>
                <button type="button" onClick={() => navigate("reserve")} className="min-h-12 border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10">Reservation preview</button>
              </div>
            </div>
          </section>
          <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">THE EXPERIENCE</p>
              <h2 className="mt-6 font-['Playfair_Display',Georgia,serif] text-4xl leading-tight sm:text-5xl">A menu you can actually use.</h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
                Browse real HTML menu items, filter by dish type and save your favourites. A working user journey matters more than a photographed menu.
              </p>
              <button type="button" onClick={() => navigate("menu")} className="mt-8 inline-flex items-center gap-2 border-b border-[#C9A227] pb-2 text-sm font-semibold text-[#C9A227]">Open the menu <ArrowRight className="h-4 w-4" /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={photos[1]} alt="Illustrative plated entrée" loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <img src={photos[2]} alt="Illustrative restaurant dish" loading="lazy" className="mt-10 aspect-[3/4] w-full object-cover" />
            </div>
          </section>
          <section className="bg-[#201918] px-6 py-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">A CLEAR NEXT STEP</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-['Playfair_Display',Georgia,serif] text-4xl sm:text-5xl">From the first look to a table request.</h2>
            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-white/60">Preview the booking experience. This sample does not connect to a real restaurant or availability system.</p>
            <button type="button" onClick={() => navigate("reserve")} className={goldButton + " mt-8"}>Preview a booking <CalendarDays className="h-4 w-4" /></button>
          </section>
        </div>
      )}

      {view === "menu" && (
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">THE KITCHEN</p>
          <h1 className="mt-4 font-['Playfair_Display',Georgia,serif] text-5xl sm:text-6xl">Today's offering.</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/55">Illustrative menu items and prices, written as searchable text for accessible browsing. No orders are placed.</p>
          <div className="mt-10 flex flex-col justify-between gap-4 border-y border-[#C9A227]/20 py-5 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Menu category">
              {categories.map((item) => (
                <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}
                  className={"min-h-11 rounded-full border px-5 text-sm font-medium " + (category === item ? "border-[#C9A227] bg-[#C9A227] text-[#141010]" : "border-white/20 text-white/70 hover:border-[#C9A227]")}>
                  {item}
                </button>
              ))}
            </div>
            <label className="relative flex w-full items-center md:w-[270px]">
              <Search className="absolute left-4 h-4 w-4 text-white/40" />
              <span className="sr-only">Search example dishes</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the menu" className="min-h-12 w-full rounded-sm border border-white/20 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#C9A227]" />
            </label>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((dish) => {
              const saved = shortlist.includes(dish.name);
              return (
                <article key={dish.name} className="overflow-hidden border border-white/10 bg-[#1c1616]">
                  <img src={dish.photo} alt={"Illustrative dish for " + dish.name} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#C9A227]">{dish.category}</p>
                    <div className="mt-3 flex justify-between gap-4">
                      <h2 className="font-['Playfair_Display',Georgia,serif] text-2xl">{dish.name}</h2>
                      <span className="shrink-0 text-sm text-[#C9A227]">{dish.price}</span>
                    </div>
                    <p className="mt-3 min-h-12 text-sm leading-relaxed text-white/55">{dish.description}</p>
                    <button type="button" aria-pressed={saved} onClick={() => toggleShortlist(dish.name)}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-[#C9A227]/60 text-xs font-semibold uppercase tracking-[0.12em] text-[#C9A227]">
                      {saved ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                      {saved ? "Saved to shortlist" : "Save this dish"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {!filtered.length && <p className="mt-8 rounded-lg border border-white/15 p-8 text-white/65">No dishes match your search. Try another category or term.</p>}
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#C9A227]/20 pt-8 sm:flex-row sm:items-center">
            <p aria-live="polite" className="text-sm text-white/70">
              {shortlist.length ? "Saved dishes: " + shortlist.join(", ") : "Save dishes you want to remember."}
            </p>
            <button type="button" onClick={() => navigate("reserve")} className={goldButton}>Reservation preview <ArrowRight className="h-4 w-4" /></button>
          </div>
        </section>
      )}

      {view === "gallery" && (
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">VISUAL STORY</p>
          <h1 className="mt-4 font-['Playfair_Display',Georgia,serif] text-5xl sm:text-6xl">In the kitchen.</h1>
          <p className="mt-5 max-w-2xl text-white/55">A sample editorial image gallery. Select any image for a larger view.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {photos.map((photo, index) => (
              <button type="button" key={photo} onClick={() => openLightbox(index)}
                className="group relative overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A227]"
                aria-label={"Open sample gallery image " + (index + 1)}>
                <img src={photo} alt={"Illustrative restaurant food photograph " + (index + 1)} loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span className="absolute bottom-4 right-4 bg-[#141010]/85 px-4 py-2 text-xs text-[#C9A227]">View image {index + 1}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {view === "reserve" && (
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">RESERVATION EXPERIENCE</p>
            <h1 className="mt-5 font-['Playfair_Display',Georgia,serif] text-5xl leading-tight sm:text-6xl">A table worth<br />coming back to.</h1>
            <p className="mt-6 max-w-lg leading-relaxed text-white/55">
              This interactive booking preview shows how a customer can choose a date, time and party size. No data is transmitted or stored.
            </p>
            <img src={photos[3]} alt="Illustrative restaurant entrée" loading="lazy" className="mt-10 aspect-[16/9] w-full max-w-xl object-cover" />
          </div>
          <form onSubmit={submitReservation} className="border border-[#C9A227]/25 bg-[#201918] p-6 sm:p-9">
            <h2 className="font-['Playfair_Display',Georgia,serif] text-3xl">Preview a reservation</h2>
            <p className="mt-3 text-sm text-white/55">Sample request only. No real restaurant bookings or availability checks.</p>
            <label className="mt-7 block text-sm text-white/75">Preferred date
              <input type="date" required value={date} onChange={(event) => { setDate(event.target.value); setPreview(false); }}
                className="mt-2 min-h-12 w-full rounded-sm border border-white/20 bg-[#141010] px-4 py-3 text-white focus:border-[#C9A227]" />
            </label>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-white/75">Time
                <select value={time} onChange={(event) => { setTime(event.target.value); setPreview(false); }}
                  className="mt-2 min-h-12 w-full rounded-sm border border-white/20 bg-[#141010] px-4 py-3 text-white">
                  {["11:00","12:30","14:00","18:00","19:00","20:30"].map((value) => <option value={value} key={value}>{value}</option>)}
                </select>
              </label>
              <label className="text-sm text-white/75">Guests
                <select value={guests} onChange={(event) => { setGuests(event.target.value); setPreview(false); }}
                  className="mt-2 min-h-12 w-full rounded-sm border border-white/20 bg-[#141010] px-4 py-3 text-white">
                  {["1","2","3","4","5","6","7","8"].map((value) => <option value={value} key={value}>{value}</option>)}
                </select>
              </label>
            </div>
            <label className="mt-5 block text-sm text-white/75">Occasion (optional)
              <select value={occasion} onChange={(event) => { setOccasion(event.target.value); setPreview(false); }}
                className="mt-2 min-h-12 w-full rounded-sm border border-white/20 bg-[#141010] px-4 py-3 text-white">
                {["","Birthday","Family gathering","Business meal","Other"].map((value) => <option value={value} key={value}>{value || "No occasion selected"}</option>)}
              </select>
            </label>
            <button type="submit" className={goldButton + " mt-7 w-full"}>Prepare sample request <ArrowRight className="h-4 w-4" /></button>
            {preview && (
              <div aria-live="polite" className="mt-6 border border-[#C9A227]/40 bg-[#C9A227]/10 p-5 text-sm leading-relaxed text-white/80">
                <p className="font-bold text-[#C9A227]">Sample request prepared, not sent</p>
                <p className="mt-2">Table for {guests} · {date} at {time}{occasion ? " · " + occasion : ""}</p>
                <p className="mt-2 text-xs text-white/50">In a real implementation, this would connect to the restaurant's reservation process.</p>
              </div>
            )}
          </form>
        </section>
      )}

      {lightbox !== null && (
        <div role="dialog" aria-modal="true" aria-label="Restaurant photo viewer" className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4" onClick={() => setLightbox(null)}>
          <div className="relative mx-auto max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" autoFocus aria-label="Close photo viewer" onClick={() => setLightbox(null)}
              className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center bg-black/75 text-white"><X className="h-5 w-5" /></button>
            <img src={photos[lightbox]} alt={"Expanded sample food photograph " + (lightbox + 1)} className="max-h-[78vh] w-full object-contain" />
            <div className="mt-4 flex justify-between">
              <button type="button" onClick={() => setLightbox((lightbox + photos.length - 1) % photos.length)} className="inline-flex min-h-11 items-center gap-1 text-sm text-white"><ChevronLeft className="h-4 w-4" /> Previous</button>
              <span className="self-center text-xs text-white/60">{lightbox + 1} / {photos.length}</span>
              <button type="button" onClick={() => setLightbox((lightbox + 1) % photos.length)} className="inline-flex min-h-11 items-center gap-1 text-sm text-white">Next <ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-[#C9A227]/15 bg-[#1a1414] px-6 py-10 text-center">
        <span className="font-['Playfair_Display',Georgia,serif] text-2xl">Sizzle House Kitchen</span>
        <p className="mt-3 text-xs text-white/45">Fictional restaurant design · sample food, prices and booking interactions.</p>
        <p className="mt-3 text-xs" style={{ color: gold }}>A Web Design Pampanga demonstration</p>
      </footer>
    </div>
  );
}
