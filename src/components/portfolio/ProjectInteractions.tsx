import { useState } from "react";

type DemoProps = { slug: string };

const shell = "mt-8 rounded-[2rem] border border-gold-400/20 bg-white/[0.035] p-5 sm:p-8";
const tab = "rounded-full border px-4 py-2.5 text-sm font-medium transition-colors";
const activeTab = "border-gold-400/50 bg-gold-400/15 text-gold-200";
const idleTab = "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white";
const tile = "rounded-2xl border border-white/10 bg-ink-950/60 p-5";

function DemoHeading({ title, description }: { title: string; description: string }) {
  return (
    <header className="max-w-3xl">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-400">
        Interactive design study · demonstration only
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
      <p className="mt-3 text-xs text-amber-200/80">
        These are sample interactions for a fictional business. No orders, bookings, employment applications or quotations are sent.
      </p>
    </header>
  );
}

const dishes = [
  { name: "Grilled market fish", kind: "Mains", detail: "Sample seasonal dish with citrus and herbs" },
  { name: "Adobo-inspired bowl", kind: "Mains", detail: "Sample rice bowl and vegetable sides" },
  { name: "House greens", kind: "Sides", detail: "A sample shareable starter" },
  { name: "Calamansi cooler", kind: "Drinks", detail: "A sample refreshing house drink" },
] as const;

function RestaurantDemo() {
  const [kind, setKind] = useState("All");
  const [selected, setSelected] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [showRequest, setShowRequest] = useState(false);

  return (
    <div className={shell}>
      <DemoHeading
        title="From menu browsing to a reservation request."
        description="Try the menu categories, create a sample shortlist and preview the information a restaurant could collect for a booking."
      />
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Sample menu categories">
        {["All", "Mains", "Sides", "Drinks"].map((item) => (
          <button key={item} type="button" onClick={() => setKind(item)} aria-pressed={kind === item}
            className={tab + " " + (kind === item ? activeTab : idleTab)}>{item}</button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {dishes.filter((dish) => kind === "All" || dish.kind === kind).map((dish) => (
          <article key={dish.name} className={tile}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-300">{dish.kind}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{dish.name}</h3>
            <p className="mt-2 text-sm text-slate-400">{dish.detail}</p>
            <button type="button" onClick={() => setSelected((old) => [...old, dish.name])}
              className="mt-4 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:border-gold-400/60">
              Add to sample shortlist
            </button>
          </article>
        ))}
      </div>
      <p aria-live="polite" className="mt-4 text-sm text-slate-300">
        Sample shortlist: {selected.length ? selected.join(", ") : "No dishes selected yet"}
      </p>
      <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Preferred date
          <input aria-label="Sample reservation date" type="date" value={date}
            onChange={(event) => { setDate(event.target.value); setShowRequest(false); }}
            className="min-h-11 rounded-lg border border-white/20 bg-ink-950 px-3 text-white" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Guests
          <select value={guests} onChange={(event) => setGuests(event.target.value)}
            className="min-h-11 rounded-lg border border-white/20 bg-ink-950 px-3 text-white">
            {["1", "2", "3", "4", "5", "6"].map((n) => <option key={n}>{n}</option>)}
          </select>
        </label>
        <div className="flex items-end">
          <button type="button" disabled={!date} onClick={() => setShowRequest(true)}
            className="min-h-11 w-full rounded-xl bg-gold-400 px-4 py-2 text-sm font-bold text-ink-950 disabled:cursor-not-allowed disabled:opacity-40">
            Preview request
          </button>
        </div>
      </div>
      {showRequest && <p aria-live="polite" className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
        Example request prepared for {guests} guests on {date}. No reservation has been made or transmitted.
      </p>}
    </div>
  );
}

const corporateTracks = [
  { name: "Customer support", detail: "Service capacity, languages, hours and escalation needs" },
  { name: "Back-office services", detail: "Processes, security expectations and reporting" },
  { name: "Recruitment", detail: "Role, experience requirements and application stages" },
] as const;

function BpoDemo() {
  const [audience, setAudience] = useState<"buyers" | "careers">("buyers");
  const [selected, setSelected] = useState("Customer support");
  return (
    <div className={shell}>
      <DemoHeading
        title="Two audiences. Two clear paths."
        description="See how the example corporate website separates companies evaluating outsourcing services from people considering careers."
      />
      <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Choose website journey">
        <button type="button" aria-pressed={audience === "buyers"} onClick={() => { setAudience("buyers"); setSelected("Customer support"); }}
          className={tab + " " + (audience === "buyers" ? activeTab : idleTab)}>I'm evaluating services</button>
        <button type="button" aria-pressed={audience === "careers"} onClick={() => { setAudience("careers"); setSelected("Recruitment"); }}
          className={tab + " " + (audience === "careers" ? activeTab : idleTab)}>I'm exploring careers</button>
      </div>
      {audience === "buyers" ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className={tile}>
            <h3 className="font-semibold text-white">Choose a capability</h3>
            <div className="mt-4 flex flex-col gap-2">
              {corporateTracks.filter((track) => track.name !== "Recruitment").map((track) => (
                <button key={track.name} type="button" aria-pressed={selected === track.name}
                  onClick={() => setSelected(track.name)}
                  className="rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-white hover:border-gold-400/40">
                  {track.name}
                </button>
              ))}
            </div>
          </div>
          <div className={tile} aria-live="polite">
            <p className="text-xs uppercase tracking-wider text-gold-400">Example inquiry outline</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{selected}</h3>
            <p className="mt-3 text-sm text-slate-300">{corporateTracks.find((track) => track.name === selected)?.detail}</p>
            <p className="mt-5 text-xs text-slate-500">A production version could ask for company size, volumes and timing before sending a request.</p>
          </div>
        </div>
      ) : (
        <div className={tile + " mt-6"} aria-live="polite">
          <p className="text-xs uppercase tracking-wider text-gold-400">Careers example</p>
          <h3 className="mt-3 text-xl font-semibold text-white">Explore roles before applying</h3>
          <p className="mt-3 text-sm text-slate-300">Open positions → Requirements → Location and schedule → Application instructions</p>
          <p className="mt-4 text-xs text-slate-500">No job opening or application collection is represented here as real.</p>
        </div>
      )}
    </div>
  );
}

const buildingProjects = [
  { title: "Office fit-out", kind: "Commercial", description: "Example layout for a multi-floor office renovation" },
  { title: "Family residence", kind: "Residential", description: "Example gallery for a custom home build" },
  { title: "Community learning space", kind: "Institutional", description: "Example scope for a shared public facility" },
] as const;

function ConstructionDemo() {
  const [kind, setKind] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const shown = buildingProjects.filter((project) => kind === "All" || project.kind === kind);
  return (
    <div className={shell}>
      <DemoHeading
        title="Find the most relevant project before asking for a quote."
        description="Filter a sample construction gallery, open a project summary and see how a quotation path can be tailored to the project type."
      />
      <div className="mt-7 flex flex-wrap gap-2" role="group" aria-label="Example construction categories">
        {["All", "Commercial", "Residential", "Institutional"].map((item) => (
          <button key={item} type="button" aria-pressed={kind === item}
            onClick={() => { setKind(item); setSelected(null); }}
            className={tab + " " + (kind === item ? activeTab : idleTab)}>{item}</button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {shown.map((project) => (
          <article key={project.title} className={tile}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-300">{project.kind} concept</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{project.description}</p>
            <button type="button" onClick={() => setSelected(project.title)}
              className="mt-5 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:border-gold-400/60">
              View project brief
            </button>
          </article>
        ))}
      </div>
      {selected && (
        <div className="mt-5 rounded-2xl border border-gold-400/25 bg-gold-400/[0.06] p-5" aria-live="polite">
          <p className="text-xs uppercase tracking-wider text-gold-300">Sample project detail</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{selected}</h3>
          <p className="mt-3 text-sm text-slate-300">A real project page would include approved site images, materials, delivery scope and an enquiry form prefilled with this project type.</p>
          <p className="mt-2 text-xs text-slate-500">Fictional demonstration. No client project or completed construction is claimed.</p>
        </div>
      )}
    </div>
  );
}

/** Interactive, clearly labelled examples — never present mock interactions as live client systems. */
export function ProjectInteractions({ slug }: DemoProps) {
  if (slug === "sizzle-house") return <RestaurantDemo />;
  if (slug === "coreaxis-bpo") return <BpoDemo />;
  if (slug === "ironpeak-builders") return <ConstructionDemo />;
  return null;
}
