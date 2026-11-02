import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, HardHat, Menu, X } from "lucide-react";

type View = "home" | "projects" | "capabilities" | "quote";
type Category = "All" | "Industrial" | "Commercial" | "Residential" | "Civic";
const photos = {
  cranes: "https://images.pexels.com/photos/14486702/pexels-photo-14486702.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1500",
  plan: "https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1500",
  city: "https://images.pexels.com/photos/5505131/pexels-photo-5505131.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1500",
  team: "https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=950&w=1500",
};
const projectExamples = [
  { id: "industrial", title: "Industrial distribution hub", category: "Industrial", image: photos.cranes, scope: "Conceptual new-build logistics facility", details: "A project detail could explain site preparation, structural works, loading access and coordination requirements.", considerations: ["Site access", "Logistics interfaces", "Construction phases"] },
  { id: "commercial", title: "Commercial fit-out", category: "Commercial", image: photos.plan, scope: "Conceptual commercial interior renovation", details: "A buyer can compare scope items such as interior construction, MEP coordination and operation during refurbishment.", considerations: ["Existing building", "Trade sequencing", "Business continuity"] },
  { id: "residential", title: "Residential development", category: "Residential", image: photos.team, scope: "Conceptual small residential development", details: "A detailed brief can outline design coordination, build methodology and milestones.", considerations: ["Site conditions", "Budget planning", "Review stages"] },
  { id: "civic", title: "Community facility", category: "Civic", image: photos.city, scope: "Conceptual shared-use building", details: "This example shows how service information can be organised for an institutional procurement audience.", considerations: ["Accessibility", "Stakeholder review", "Phased delivery"] },
] as const;
const categories: Category[] = ["All", "Industrial", "Commercial", "Residential", "Civic"];
const capabilityItems = [
  { id: "design", title: "Design & Build", icon: "01", description: "One scope covering concept coordination, technical development and construction planning.", bullets: ["Requirements briefing", "Design coordination", "Delivery-stage reviews"] },
  { id: "general", title: "General Contracting", icon: "02", description: "A service page outlining the information a contractor needs to prepare a realistic bid.", bullets: ["Drawings and specifications", "Trade coordination", "Schedule assumptions"] },
  { id: "civil", title: "Civil Works", icon: "03", description: "Clear explanation of enabling works, site infrastructure and construction logistics.", bullets: ["Site access", "Ground conditions", "Utility interfaces"] },
] as const;
type CapabilityId = (typeof capabilityItems)[number]["id"];

export function IronpeakDemo() {
  const [view, setView] = useState<View>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<Category>("All");
  const [detail, setDetail] = useState<string | null>(null);
  const [capabilityId, setCapabilityId] = useState<CapabilityId>("design");
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("Commercial");
  const [timeline, setTimeline] = useState("Planning stage");
  const [budget, setBudget] = useState("To be discussed");
  const [requirements, setRequirements] = useState("");
  const [reviewed, setReviewed] = useState(false);

  const shown = useMemo(() => projectExamples.filter((item) => filter === "All" || item.category === filter), [filter]);
  const selected = projectExamples.find((item) => item.id === detail);
  const capability = capabilityItems.find((item) => item.id === capabilityId) || capabilityItems[0];

  const navigate = (next: View) => {
    setView(next);
    setMenuOpen(false);
    setDetail(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const viewProject = (id: string) => {
    setDetail(id);
    window.setTimeout(() => document.getElementById("ironpeak-project-detail")?.scrollIntoView({ block: "start", behavior: "smooth" }), 70);
  };
  useEffect(() => {
    if (!detail) return;
    const handler = (event: KeyboardEvent) => { if (event.key === "Escape") setDetail(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [detail]);

  const nav: { label: string; id: View }[] = [
    { label: "Overview", id: "home" },
    { label: "Project types", id: "projects" },
    { label: "Expertise", id: "capabilities" },
    { label: "Request bid", id: "quote" },
  ];
  const primary = "inline-flex min-h-12 items-center justify-center gap-2 bg-[#FFC800] px-7 py-3 text-sm font-black uppercase tracking-[0.05em] text-[#0E0E10] transition-colors hover:bg-[#ffe06a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC800]";
  return (
    <div className="min-h-screen bg-[#0E0E10] font-['Archivo',Arial,sans-serif] text-white">
      <div className="bg-[#FFC800] px-5 py-2 text-center text-[10px] font-black uppercase tracking-[0.13em] text-[#0E0E10]">
        Construction website concept · Fictional business and sample projects
      </div>
      <header className="relative z-20 border-b border-white/10 bg-[#0E0E10]">
        <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <button type="button" aria-label="Ironpeak Builders home" onClick={() => navigate("home")} className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-[#FFC800] text-xl font-black text-[#0E0E10]">IP</span>
            <span className="text-xl font-black uppercase tracking-[-0.04em] sm:text-2xl">IRONPEAK</span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Construction demo navigation">
            {nav.map((item) => <button type="button" key={item.id} onClick={() => navigate(item.id)} aria-current={view === item.id ? "page" : undefined}
              className={"border-b-2 py-3 text-xs font-extrabold uppercase tracking-[0.1em] " + (view === item.id ? "border-[#FFC800] text-[#FFC800]" : "border-transparent text-white/55 hover:text-white")}>{item.label}</button>)}
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => navigate("quote")} className={primary + " hidden sm:inline-flex"}>Bid worksheet <ArrowUpRight className="h-4 w-4" /></button>
            <button type="button" onClick={() => setMenuOpen((old) => !old)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-white/10 px-5 py-3 lg:hidden" aria-label="Mobile construction navigation">
          {nav.map((item) => <button key={item.id} type="button" onClick={() => navigate(item.id)}
            className="block min-h-12 w-full border-b border-white/10 py-3 text-left text-sm font-black uppercase">{item.label}</button>)}
        </nav>}
      </header>

      {view === "home" && <>
        <section className="relative isolate flex min-h-[560px] items-end overflow-hidden sm:min-h-[670px]">
          <img src={photos.cranes} alt="Illustrative construction cranes at a building site" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/55 to-[#0E0E10]/20" />
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 sm:px-10">
            <p className="border-l-4 border-[#FFC800] pl-4 text-xs font-black uppercase tracking-[0.2em] text-[#FFC800]">MADE FOR COMPLEX PROJECTS</p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.91] tracking-[-0.06em]">BUILD<br /><span className="text-[#FFC800]">WITH PURPOSE.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-white/75">A concept construction website that makes capability, project examples and quotation requirements easy to evaluate.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={() => navigate("projects")} className={primary}>Explore project types <ArrowRight className="h-4 w-4" /></button>
              <button type="button" onClick={() => navigate("quote")} className="inline-flex min-h-12 items-center justify-center border border-white/35 px-7 py-3 text-sm font-bold uppercase text-white hover:bg-white/10">Prepare a sample bid</button>
            </div>
          </div>
        </section>
        <section className="border-y border-white/15 bg-[#19191b]">
          <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-3">
            {capabilityItems.map((item) => <button type="button" key={item.id}
              onClick={() => { setCapabilityId(item.id); navigate("capabilities"); }}
              className="group border-b border-white/10 px-7 py-8 text-left hover:bg-[#222225] sm:border-b-0 sm:border-r">
              <span className="text-xs font-bold text-[#FFC800]">{item.icon}</span>
              <span className="mt-4 block text-xl font-black uppercase">{item.title}</span>
              <span className="mt-3 block text-sm leading-relaxed text-white/50">{item.description}</span>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-[#FFC800]">View capability <ArrowRight className="h-4 w-4" /></span>
            </button>)}
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div><p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFC800]">STRONGER PROJECT STORIES</p>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-[-0.04em] sm:text-5xl">Show the work.<br />Explain the scope.</h2>
            <p className="mt-6 leading-relaxed text-white/55">A useful construction portfolio helps buyers compare project types and understand the kind of information needed before a quotation.</p>
            <button type="button" onClick={() => navigate("projects")} className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#FFC800] pb-2 text-sm font-black uppercase text-[#FFC800]">Browse example projects <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={photos.plan} alt="Illustrative engineering plans" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            <img src={photos.team} alt="Illustrative construction team" loading="lazy" className="mt-10 aspect-[3/4] w-full object-cover" />
          </div>
        </section>
      </>}

      {view === "projects" && <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFC800]">PROJECT GALLERY SYSTEM</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[.96] tracking-[-0.045em] sm:text-6xl">FIND WORK<br /><span className="text-[#FFC800]">LIKE YOURS.</span></h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-white/55">Fictional project scenarios demonstrate gallery filters and project detail views. None are records of completed construction.</p>
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter example construction projects">
          {categories.map((item) => <button type="button" key={item} onClick={() => { setFilter(item); setDetail(null); }} aria-pressed={filter === item}
            className={"min-h-11 border px-5 text-xs font-black uppercase tracking-wide " + (filter === item ? "border-[#FFC800] bg-[#FFC800] text-[#0E0E10]" : "border-white/20 text-white/70 hover:border-[#FFC800]")}>{item}</button>)}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {shown.map((project, index) => <article key={project.id} className="group border border-white/10 bg-[#18181a]">
            <button type="button" onClick={() => viewProject(project.id)} className="w-full text-left focus-visible:outline-2 focus-visible:outline-[#FFC800]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={project.image} alt={"Illustrative construction image for " + project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span className="absolute left-5 top-5 bg-[#FFC800] px-3 py-1 text-[10px] font-black uppercase text-[#0E0E10]">Sample project {String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex items-end justify-between gap-4 px-6 py-7">
                <span><span className="text-xs font-black uppercase tracking-[0.15em] text-[#FFC800]">{project.category}</span>
                  <span className="mt-3 block text-2xl font-black uppercase">{project.title}</span>
                  <span className="mt-2 block text-sm text-white/50">{project.scope}</span></span>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-[#FFC800]" />
              </div>
            </button>
          </article>)}
        </div>
        {selected && <section id="ironpeak-project-detail" aria-live="polite" className="mt-10 scroll-mt-8 border-l-[6px] border-[#FFC800] bg-[#202023] p-6 sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC800]">EXAMPLE PROJECT BRIEF</p>
              <h2 className="mt-4 text-3xl font-black uppercase">{selected.title}</h2></div>
            <button type="button" onClick={() => setDetail(null)} className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20" aria-label="Close project brief"><X className="h-5 w-5" /></button>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-white/70">{selected.details}</p>
          <h3 className="mt-7 text-sm font-black uppercase text-[#FFC800]">A buyer may need to clarify</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">{selected.considerations.map((item) => <li key={item} className="flex items-center gap-2 border border-white/10 p-4 text-sm"><Check className="h-4 w-4 shrink-0 text-[#FFC800]" />{item}</li>)}</ul>
          <button type="button" className={primary + " mt-8"} onClick={() => { setProjectType(selected.category); navigate("quote"); }}>Use this type in a sample bid <ArrowRight className="h-4 w-4" /></button>
        </section>}
      </section>}

      {view === "capabilities" && <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFC800]">CAPABILITY PAGES</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase tracking-[-0.045em] sm:text-6xl">WHAT YOU NEED<br /><span className="text-[#FFC800]">TO KNOW FIRST.</span></h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-white/55">Explore how a service breakdown can answer procurement questions before a quotation is requested. These are design examples, not verified qualifications.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.38fr_.62fr]">
          <div className="space-y-3" role="group" aria-label="Select construction capability">
            {capabilityItems.map((item) => <button type="button" key={item.id} onClick={() => setCapabilityId(item.id)} aria-pressed={capabilityId === item.id}
              className={"flex min-h-[82px] w-full items-center justify-between gap-5 border px-6 text-left text-sm font-black uppercase " +
                (capabilityId === item.id ? "border-[#FFC800] bg-[#FFC800] text-[#0E0E10]" : "border-white/15 bg-[#19191b] hover:border-[#FFC800]")}>
              {item.title} <ChevronRight className="h-5 w-5 shrink-0" /></button>)}
          </div>
          <article className="border border-white/15 bg-[#19191b] p-7 sm:p-10" aria-live="polite">
            <HardHat className="h-9 w-9 text-[#FFC800]" />
            <h2 className="mt-7 text-3xl font-black uppercase">{capability.title}</h2>
            <p className="mt-5 leading-relaxed text-white/70">{capability.description}</p>
            <h3 className="mt-9 text-xs font-black uppercase tracking-[0.2em] text-[#FFC800]">Possible project discussion topics</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">{capability.bullets.map((item) => <li key={item} className="flex items-center gap-3 border border-white/10 p-4 text-sm text-white/75"><Check className="h-4 w-4 shrink-0 text-[#FFC800]" />{item}</li>)}</ul>
            <button type="button" className={primary + " mt-9"} onClick={() => navigate("quote")}>Prepare a sample project scope <ArrowRight className="h-4 w-4" /></button>
          </article>
        </div>
      </section>}

      {view === "quote" && <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#FFC800]">QUOTATION UX STUDY</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[.96] tracking-[-0.04em] sm:text-6xl">CLEAR BRIEF.<br /><span className="text-[#FFC800]">BETTER BID.</span></h1>
          <p className="mt-6 leading-relaxed text-white/60">A progressive questionnaire keeps a complex construction enquiry manageable. This demo prepares an on-screen summary without sending it.</p>
          <img src={photos.plan} alt="Illustrative construction plans" loading="lazy" className="mt-10 aspect-[16/10] w-full object-cover" />
        </div>
        <div className="border border-white/15 bg-[#1a1a1d] p-6 sm:p-10">
          <div className="flex gap-2" aria-label={"Worksheet step " + step + " of 3"}>
            {[1,2,3].map((number) => <div key={number} className={"h-2 flex-1 " + (number <= step ? "bg-[#FFC800]" : "bg-white/15")} />)}
          </div>
          <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#FFC800]">STEP {step} OF 3</p>
          {step === 1 && <>
            <h2 className="mt-4 text-3xl font-black uppercase">Project basics</h2>
            <p className="mt-3 text-sm text-white/55">Start with a type and rough stage, not a lengthy tender document.</p>
            <label className="mt-7 block text-sm font-semibold">Project category
              <select value={projectType} onChange={(event) => { setProjectType(event.target.value); setReviewed(false); }}
                className="mt-2 min-h-12 w-full border border-white/20 bg-[#0E0E10] px-4 py-3 text-white">
                {["Commercial","Industrial","Residential","Civic","Other"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="mt-5 block text-sm font-semibold">Current stage
              <select value={timeline} onChange={(event) => { setTimeline(event.target.value); setReviewed(false); }}
                className="mt-2 min-h-12 w-full border border-white/20 bg-[#0E0E10] px-4 py-3 text-white">
                {["Planning stage","Design underway","Ready for pricing","Future project"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </>}
          {step === 2 && <>
            <h2 className="mt-4 text-3xl font-black uppercase">Scope and budget</h2>
            <p className="mt-3 text-sm text-white/55">Add context a real contractor would need before responding.</p>
            <label className="mt-7 block text-sm font-semibold">Budget status
              <select value={budget} onChange={(event) => { setBudget(event.target.value); setReviewed(false); }}
                className="mt-2 min-h-12 w-full border border-white/20 bg-[#0E0E10] px-4 py-3 text-white">
                {["To be discussed","Budget range established","Needs cost planning"].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="mt-5 block text-sm font-semibold">Important requirements (optional)
              <textarea value={requirements} maxLength={450} onChange={(event) => { setRequirements(event.target.value); setReviewed(false); }}
                placeholder="Site conditions, scope, construction stage or access requirements"
                className="mt-2 min-h-[150px] w-full resize-y border border-white/20 bg-[#0E0E10] p-4 text-sm text-white outline-none focus:border-[#FFC800]" />
            </label>
          </>}
          {step === 3 && <>
            <h2 className="mt-4 text-3xl font-black uppercase">Review the brief</h2>
            <p className="mt-3 text-sm text-white/55">Check the summary. There is no final send action in this fictional demo.</p>
            <dl className="mt-7 grid gap-3">
              {[["Project category",projectType],["Current stage",timeline],["Budget status",budget],["Requirements",requirements.trim() || "Not entered"]].map(([label,value]) => <div key={label} className="grid gap-1 border-b border-white/10 pb-3 sm:grid-cols-[135px_1fr]">
                <dt className="text-xs font-bold uppercase text-[#FFC800]">{label}</dt><dd className="break-words text-sm text-white/80">{value}</dd></div>)}
            </dl>
            {reviewed && <div aria-live="polite" className="mt-6 border border-[#FFC800]/40 bg-[#FFC800]/10 p-5 text-sm text-white/80">
              <p className="font-black uppercase text-[#FFC800]">Example brief prepared, not sent.</p>
              <p className="mt-2">A real website would now collect an authorised contact method and transmit the request securely.</p>
            </div>}
          </>}
          <div className="mt-10 flex flex-wrap justify-between gap-3">
            <button type="button" onClick={() => { setStep((old) => Math.max(1, old - 1)); setReviewed(false); }} disabled={step === 1}
              className="inline-flex min-h-12 items-center gap-2 border border-white/25 px-5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-30">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            {step < 3
              ? <button type="button" onClick={() => { setStep((old) => Math.min(3, old + 1)); setReviewed(false); }} className={primary}>Next <ArrowRight className="h-4 w-4" /></button>
              : <button type="button" onClick={() => setReviewed(true)} className={primary}>Prepare sample brief <Check className="h-4 w-4" /></button>}
          </div>
        </div>
      </section>}

      <footer className="border-t-4 border-[#FFC800] bg-[#171719] px-6 py-11">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xl font-black uppercase">IRONPEAK <span className="text-[#FFC800]">BUILDERS</span></p>
          <p className="max-w-xl text-xs text-white/50">Fictional website concept. No construction projects, safety records, licences or submitted quotations are claimed.</p>
        </div>
      </footer>
    </div>
  );
}
