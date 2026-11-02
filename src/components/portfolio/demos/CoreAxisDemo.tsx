import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, ChevronRight, Menu, Users, X } from "lucide-react";

type View = "overview" | "services" | "careers" | "contact";
const office = "https://images.pexels.com/photos/8102000/pexels-photo-8102000.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500";
const meeting = "https://images.pexels.com/photos/7964413/pexels-photo-7964413.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1500";

const capabilities = [
  { id: "cx", name: "Customer Experience", summary: "Customer conversations across voice, chat and email.", details: "A sample capability page showing service coverage, escalation design, workforce planning and reporting questions.", requirements: ["Support channels", "Volume and service hours", "Escalation requirements", "Reporting cadence"] },
  { id: "back", name: "Back Office", summary: "Structured administrative workflows and operational support.", details: "An example service description outlining data handling, onboarding and documented handoffs without claiming certifications.", requirements: ["Workflow types", "Data sensitivity", "Expected turnaround", "Quality checks"] },
  { id: "people", name: "People Operations", summary: "Hiring-process support and candidate communications.", details: "A demonstration of how staffing-related services could be explained to enterprise buyers.", requirements: ["Hiring stages", "Required experience", "Geographic coverage", "Recruitment reporting"] },
] as const;
type CapabilityId = (typeof capabilities)[number]["id"];

const roles = [
  { title: "Customer Support Specialist", dept: "Customer Experience", type: "Example role", detail: "Illustrative responsibilities: respond to customer requests, document cases and escalate complex issues.", skills: "Written communication · Problem solving · CRM familiarity" },
  { title: "Quality Analyst", dept: "Operations", type: "Example role", detail: "Illustrative responsibilities: review process quality, document feedback and support operational coaching.", skills: "Attention to detail · Process analysis · Reporting" },
  { title: "Recruitment Coordinator", dept: "People", type: "Example role", detail: "Illustrative responsibilities: organise candidate communication, interview schedules and applicant records.", skills: "Scheduling · Communication · Process ownership" },
] as const;
const roleDepartments = ["All", "Customer Experience", "Operations", "People"];

export function CoreAxisDemo() {
  const [view, setView] = useState<View>("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [capabilityId, setCapabilityId] = useState<CapabilityId>("cx");
  const [depart, setDepart] = useState("All");
  const [roleIndex, setRoleIndex] = useState<number | null>(null);
  const [scope, setScope] = useState("");
  const [headcount, setHeadcount] = useState("Not sure yet");
  const [timeline, setTimeline] = useState("Exploring options");
  const [preview, setPreview] = useState(false);

  const capability = capabilities.find((item) => item.id === capabilityId) || capabilities[0];
  const jobs = useMemo(() => roles.filter((job) => depart === "All" || job.dept === depart), [depart]);
  const navigate = (next: View) => {
    setView(next);
    setMenuOpen(false);
    setPreview(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const primary = "inline-flex min-h-12 items-center justify-center gap-2 bg-[#1D4ED8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1740b9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]";
  const nav: { label: string; view: View }[] = [
    { label: "Overview", view: "overview" },
    { label: "Capabilities", view: "services" },
    { label: "Careers", view: "careers" },
    { label: "Contact", view: "contact" },
  ];
  const submitPreview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPreview(true);
  };
  return (
    <div className="min-h-screen bg-[#F6F8FB] font-['IBM_Plex_Sans',Arial,sans-serif] text-[#0B1B33]">
      <div className="bg-[#0B1B33] px-5 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-200">
        Corporate website concept · Not an operating outsourcing firm
      </div>
      <header className="relative z-20 border-b border-[#DDE4EE] bg-white">
        <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <button type="button" onClick={() => navigate("overview")} aria-label="CoreAxis BPO demo home" className="flex min-w-0 items-baseline gap-2 text-left">
            <span className="text-[27px] font-extrabold tracking-[-0.055em] text-[#0B1B33]">CoreAxis</span>
            <span className="text-xs font-bold tracking-[0.22em] text-[#1D4ED8]">BPO</span>
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Corporate demo navigation">
            {nav.map((item) => (
              <button type="button" key={item.view} aria-current={view === item.view ? "page" : undefined}
                onClick={() => navigate(item.view)}
                className={"border-b-2 py-3 text-xs font-bold uppercase tracking-[0.12em] " + (view === item.view ? "border-[#1D4ED8] text-[#1D4ED8]" : "border-transparent text-[#506078] hover:text-[#0B1B33]")}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => navigate("contact")} className={primary + " hidden sm:inline-flex"}>Scope a project <ArrowUpRight className="h-4 w-4" /></button>
            <button type="button" onClick={() => setMenuOpen((old) => !old)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-[#DDE4EE] lg:hidden">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && <nav aria-label="Mobile corporate navigation" className="border-t border-[#DDE4EE] bg-white px-5 py-3 lg:hidden">
          {nav.map((item) => <button type="button" key={item.view} onClick={() => navigate(item.view)} className="block min-h-12 w-full border-b border-[#DDE4EE] py-3 text-left text-sm font-semibold">{item.label}</button>)}
        </nav>}
      </header>

      {view === "overview" && <>
        <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-[#0B1B33] sm:min-h-[630px]">
          <img src={office} alt="Illustrative modern office used in a fictional outsourcing website" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-65" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1B33]/95 via-[#0B1B33]/85 to-[#0B1B33]/20" />
          <div className="mx-auto w-full max-w-7xl px-6 py-20 text-white sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8ebaff]">STRUCTURE BUILT FOR DECISION-MAKERS</p>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.75rem,6vw,6rem)] font-light leading-[1.07] tracking-[-0.055em]">
              Outsourcing decisions deserve <span className="font-semibold text-[#8ebaff]">clear information.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              A business-to-business website concept with distinct journeys for buyers and candidates.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button type="button" onClick={() => navigate("services")} className={primary}>Explore capabilities <ArrowRight className="h-4 w-4" /></button>
              <button type="button" onClick={() => navigate("careers")} className="inline-flex min-h-12 items-center justify-center border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Explore career journey</button>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
          <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">TWO VISITOR INTENTS</p>
              <h2 className="mt-5 max-w-xl text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">Choose the right path from the first screen.</h2>
            </div>
            <p className="max-w-xl leading-relaxed text-[#596A82]">A corporate buyer needs operational clarity. A candidate needs role requirements and next steps. Mixing those journeys creates unnecessary friction.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <button type="button" onClick={() => navigate("services")} className="group overflow-hidden border border-[#DDE4EE] bg-white text-left">
              <div className="relative h-[260px] overflow-hidden">
                <img src={meeting} alt="Illustrative business meeting" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/70 to-transparent" />
                <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.2em] text-white">FOR BUSINESS BUYERS</span>
              </div>
              <div className="flex items-start justify-between gap-5 p-7">
                <div><h3 className="text-2xl font-semibold">Explore our capabilities</h3><p className="mt-3 text-sm leading-relaxed text-[#596A82]">Structured service information and a targeted scope preview.</p></div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-[#1D4ED8]" />
              </div>
            </button>
            <button type="button" onClick={() => navigate("careers")} className="group flex flex-col justify-between border border-[#DDE4EE] bg-[#E9EFF9] p-7 text-left sm:p-10">
              <div><span className="flex h-14 w-14 items-center justify-center bg-[#D8E5F9] text-[#1D4ED8]"><Users className="h-7 w-7" /></span>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">FOR CANDIDATES</p>
                <h3 className="mt-4 max-w-sm text-3xl font-light tracking-[-0.04em] sm:text-4xl">Understand the role before applying.</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#596A82]">Sample job listings, filters and a transparent explanation of application stages.</p>
              </div>
              <span className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8]">View sample roles <ArrowRight className="h-4 w-4" /></span>
            </button>
          </div>
        </section>
      </>}

      {view === "services" && <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8]">CAPABILITY ARCHITECTURE</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-light leading-tight tracking-[-0.045em] sm:text-6xl">A useful service page answers <span className="font-semibold text-[#1D4ED8]">buyer questions.</span></h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-[#596A82]">Choose a sample service to explore how an enterprise site could organise operational information before asking for an inquiry.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.35fr_.65fr]">
          <div className="space-y-2" role="group" aria-label="Select a corporate service">
            {capabilities.map((item) => <button type="button" key={item.id} aria-pressed={capabilityId === item.id} onClick={() => setCapabilityId(item.id)}
              className={"flex min-h-[70px] w-full items-center justify-between gap-3 border px-5 text-left text-sm font-semibold transition-colors " +
                (capabilityId === item.id ? "border-[#1D4ED8] bg-[#1D4ED8] text-white" : "border-[#DDE4EE] bg-white text-[#34455f] hover:border-[#1D4ED8]")}>
              {item.name} <ChevronRight className="h-5 w-5 shrink-0" /></button>)}
          </div>
          <article className="border border-[#DDE4EE] bg-white p-6 sm:p-10" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">SELECTED CAPABILITY</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">{capability.name}</h2>
            <p className="mt-4 text-lg text-[#45566f]">{capability.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#66758b]">{capability.details}</p>
            <h3 className="mt-9 text-sm font-bold uppercase tracking-[0.15em]">Useful information to collect</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {capability.requirements.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-[#45566f]"><Check className="h-4 w-4 text-[#1D4ED8]" />{item}</li>)}
            </ul>
            <button type="button" className={primary + " mt-9"} onClick={() => { setView("contact"); setPreview(false); window.scrollTo({ top: 0, behavior: "auto" }); }}>
              Scope an enquiry about {capability.name} <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        </div>
      </section>}

      {view === "careers" && <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8]">CAREER EXPERIENCE</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-light tracking-[-0.045em] sm:text-6xl">Roles that are easier to <span className="font-semibold text-[#1D4ED8]">understand.</span></h1>
        <p className="mt-6 max-w-3xl leading-relaxed text-[#596A82]">These are invented examples to demonstrate a recruitment interface. There are no real vacancies or live applications.</p>
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Sample role filters">
          {roleDepartments.map((item) => <button type="button" key={item} onClick={() => { setDepart(item); setRoleIndex(null); }} aria-pressed={depart === item}
            className={"min-h-11 border px-5 text-sm font-medium " + (depart === item ? "border-[#1D4ED8] bg-[#1D4ED8] text-white" : "border-[#ccd7e6] bg-white hover:border-[#1D4ED8]")}>{item}</button>)}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[.5fr_.5fr]">
          <div className="space-y-3">
            {jobs.map((job) => {
              const index = roles.indexOf(job);
              return <button key={job.title} type="button" onClick={() => setRoleIndex(index)} aria-pressed={roleIndex === index}
                className={"flex min-h-[116px] w-full items-center justify-between gap-4 border p-6 text-left " +
                  (roleIndex === index ? "border-[#1D4ED8] bg-[#E9EFF9]" : "border-[#DDE4EE] bg-white hover:border-[#1D4ED8]")}>
                <span><span className="block text-xs font-semibold uppercase tracking-wider text-[#1D4ED8]">{job.dept} · {job.type}</span>
                  <span className="mt-2 block text-lg font-semibold">{job.title}</span></span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#1D4ED8]" />
              </button>;
            })}
          </div>
          <div className="min-h-[300px] border border-[#DDE4EE] bg-white p-7 sm:p-10" aria-live="polite">
            {roleIndex === null ? <div>
              <BriefcaseBusiness className="h-10 w-10 text-[#1D4ED8]" />
              <h2 className="mt-6 text-2xl font-semibold">Choose a sample role.</h2>
              <p className="mt-3 max-w-md leading-relaxed text-[#596A82]">See how job description, qualifications and application stages could be presented before an applicant submits personal information.</p>
            </div> : <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">SAMPLE ROLE DETAIL</p>
              <h2 className="mt-4 text-3xl font-semibold">{roles[roleIndex].title}</h2>
              <p className="mt-4 leading-relaxed text-[#596A82]">{roles[roleIndex].detail}</p>
              <h3 className="mt-7 text-sm font-bold">Example skills</h3>
              <p className="mt-2 text-sm text-[#596A82]">{roles[roleIndex].skills}</p>
              <h3 className="mt-7 text-sm font-bold">Illustrative application stages</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#596A82]">Review role → Confirm requirements → Submit through an authorised recruitment system → Receive an acknowledged application.</p>
              <p className="mt-5 border-l-4 border-[#1D4ED8] bg-[#E9EFF9] p-4 text-xs leading-relaxed">Demonstration only: this site does not collect CVs or accept applications.</p>
            </div>}
          </div>
        </div>
      </section>}

      {view === "contact" && <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1D4ED8]">SALES ENQUIRY DESIGN</p>
          <h1 className="mt-5 text-5xl font-light tracking-[-0.045em] sm:text-6xl">Capture what matters <span className="font-semibold text-[#1D4ED8]">before the call.</span></h1>
          <p className="mt-6 leading-relaxed text-[#596A82]">A B2B enquiry should carry the service type and enough initial requirements to help the team respond usefully. This is a local preview, not a submission.</p>
          <div className="mt-10 overflow-hidden border border-[#DDE4EE]"><img src={meeting} alt="Illustrative office meeting" loading="lazy" className="aspect-[16/10] w-full object-cover" /></div>
        </div>
        <form onSubmit={submitPreview} className="border border-[#DDE4EE] bg-white p-6 shadow-sm sm:p-10">
          <div className="flex items-center gap-3 text-[#1D4ED8]"><Building2 className="h-6 w-6" /><span className="text-xs font-bold uppercase tracking-[0.18em]">SAMPLE SCOPE BUILDER</span></div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Start with your service needs.</h2>
          <p className="mt-3 text-sm text-[#66758b]">No contact details are required or collected in this demonstration.</p>
          <label className="mt-7 block text-sm font-semibold">Area of interest
            <select value={capabilityId} onChange={(event) => { setCapabilityId(event.target.value as CapabilityId); setPreview(false); }}
              className="mt-2 min-h-12 w-full border border-[#CAD5E4] bg-[#F6F8FB] px-4 py-3 text-sm">
              {capabilities.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </label>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">Estimated team size
              <select value={headcount} onChange={(event) => { setHeadcount(event.target.value); setPreview(false); }}
                className="mt-2 min-h-12 w-full border border-[#CAD5E4] bg-[#F6F8FB] px-4 py-3 text-sm">
                {["Not sure yet","1–5","6–20","21–50","50+"].map((value) => <option value={value} key={value}>{value}</option>)}
              </select>
            </label>
            <label className="text-sm font-semibold">Desired timeline
              <select value={timeline} onChange={(event) => { setTimeline(event.target.value); setPreview(false); }}
                className="mt-2 min-h-12 w-full border border-[#CAD5E4] bg-[#F6F8FB] px-4 py-3 text-sm">
                {["Exploring options","Within 1 month","Within 3 months","Later"].map((value) => <option value={value} key={value}>{value}</option>)}
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold">Requirements (optional)
            <textarea rows={4} maxLength={450} value={scope} onChange={(event) => { setScope(event.target.value); setPreview(false); }}
              placeholder="Describe the workflow or support you would need"
              className="mt-2 w-full resize-y border border-[#CAD5E4] bg-[#F6F8FB] p-4 text-sm outline-none focus:border-[#1D4ED8]" />
          </label>
          <button type="submit" className={primary + " mt-6 w-full"}>Preview an enquiry summary <ArrowRight className="h-4 w-4" /></button>
          {preview && <div aria-live="polite" className="mt-6 border border-[#b7d4b9] bg-[#ecf8ed] p-5 text-sm">
            <p className="font-semibold text-[#18552a]">Summary prepared — not submitted</p>
            <dl className="mt-3 grid gap-2 text-[#435467]">
              <div><dt className="inline font-semibold">Service: </dt><dd className="inline">{capability.name}</dd></div>
              <div><dt className="inline font-semibold">Team: </dt><dd className="inline">{headcount}</dd></div>
              <div><dt className="inline font-semibold">Timeline: </dt><dd className="inline">{timeline}</dd></div>
              {scope.trim() && <div><dt className="inline font-semibold">Notes: </dt><dd className="inline break-words">{scope}</dd></div>}
            </dl>
            <p className="mt-3 text-xs text-[#576776]">This preview stays in your browser and is not delivered to a company inbox.</p>
          </div>}
        </form>
      </section>}

      <footer className="border-t-4 border-[#1D4ED8] bg-[#0B1B33] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div><p className="text-xl font-extrabold">CoreAxis <span className="text-[#8ebaff]">BPO</span></p>
            <p className="mt-2 text-xs text-white/60">Fictional corporate concept — no real jobs, customers or certifications.</p></div>
          <p className="text-xs text-[#8ebaff]">Built as a Web Design Pampanga interactive study</p>
        </div>
      </footer>
    </div>
  );
}
