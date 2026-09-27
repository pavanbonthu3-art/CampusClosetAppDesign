import { createElement, useState, type ReactNode } from "react";

type Screen =
  | "home"
  | "explore"
  | "add"
  | "bookings"
  | "profile"
  | "detail"
  | "request"
  | "messages"
  | "closet"
  | "trust"
  | "welcome"
  | "login";

type IconName =
  | "home"
  | "search"
  | "plus"
  | "calendar"
  | "user"
  | "bell"
  | "chevron"
  | "heart"
  | "star"
  | "pin"
  | "sliders"
  | "arrow"
  | "message"
  | "shield"
  | "camera"
  | "check"
  | "sparkle"
  | "closet"
  | "clock";

const photos = {
  blue: "https://images.unsplash.com/photo-1622207691293-5cd80466dab3?auto=format&fit=crop&w=900&q=85",
  black: "https://images.unsplash.com/photo-1716504628204-47f2df8d2634?auto=format&fit=crop&w=900&q=85",
  pastel: "https://images.unsplash.com/photo-1706685481823-b8f1a1c11fca?auto=format&fit=crop&w=900&q=85",
  kurta: "https://images.unsplash.com/photo-1722851721443-e3a83a31a5cc?auto=format&fit=crop&w=900&q=85",
  profile: "https://images.unsplash.com/photo-1764740146693-4955d02c98f9?auto=format&fit=crop&w=300&q=85",
  red: "https://images.unsplash.com/photo-1761125135357-99cbe52a6271?auto=format&fit=crop&w=900&q=85",
};

const iconPaths: Record<IconName, ReactNode> = {
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  chevron: <path d="m9 6 6 6-6 6" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  star: <path d="m12 2 3 6 7 .9-5 4.8 1.3 6.8L12 17.3l-6.3 3.2L7 13.7 2 8.9 9 8l3-6Z" />,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  sliders: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
  arrow: <><path d="M19 12H5M11 18l-6-6 6-6" /></>,
  message: <><path d="M21 12a8 8 0 0 1-8 8H5l-3 2 1-6a9 9 0 1 1 18-4Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-5" /></>,
  camera: <><path d="M4 7h3l2-3h6l2 3h3v13H4Z" /><circle cx="12" cy="13" r="4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  sparkle: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
  closet: <><path d="M5 3h14v18H5Z" /><path d="M12 3v18M9 12h.01M15 12h.01" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

function Icon({ name, size = "md", filled = false }: { name: IconName; size?: "sm" | "md" | "lg"; filled?: boolean }) {
  const dimensions = size === "sm" ? "size-4" : size === "lg" ? "size-7" : "size-5";
  return (
    <svg className={dimensions} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function Button({ children, className = "", onClick, ariaLabel }: { children: ReactNode; className?: string; onClick?: () => void; ariaLabel?: string }) {
  return createElement("button", { className, onClick, "aria-label": ariaLabel, type: "button" }, children);
}

function TextInput({ placeholder, className = "" }: { placeholder: string; className?: string }) {
  return createElement("input", { className, placeholder, "aria-label": placeholder });
}

const outfits = [
  { name: "Royal Blue Chaniya Choli", price: "₹450", owner: "Ananya", rating: "4.8", location: "Block B · 400m", image: photos.blue, tag: "Available" },
  { name: "Black Formal Blazer", price: "₹300", owner: "Rohan", rating: "4.9", location: "Main gate · 700m", image: photos.black, tag: "Tomorrow" },
  { name: "Pastel Saree", price: "₹400", owner: "Meera", rating: "4.7", location: "Girls hostel · 250m", image: photos.pastel, tag: "Available" },
  { name: "Ivory Kurta Set", price: "₹250", owner: "Aarav", rating: "4.8", location: "Library · 600m", image: photos.kurta, tag: "Available" },
];

function TopBar({ onMessages }: { onMessages: () => void }) {
  return (
    <div className="flex items-center justify-between pt-2">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-coral">CampusCloset</p>
        <p className="mt-1 font-display text-2xl font-semibold leading-tight text-ink">Hey, what are you<br />wearing next?</p>
      </div>
      <Button onClick={onMessages} ariaLabel="Open messages" className="relative grid size-11 place-items-center rounded-full bg-white text-ink shadow-soft">
        <Icon name="bell" />
        <span className="absolute right-1 top-1 size-2.5 rounded-full border-2 border-white bg-coral" />
      </Button>
    </div>
  );
}

function SearchBox({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="flex w-full items-center gap-3 rounded-2xl border border-plum/5 bg-white p-4 text-left text-sm text-muted shadow-soft">
      <Icon name="search" />
      <span className="flex-1">Search outfits, events, styles…</span>
      <span className="rounded-xl bg-cream p-2 text-plum"><Icon name="sliders" size="sm" /></span>
    </Button>
  );
}

function OutfitCard({ outfit, onClick, compact = false }: { outfit: typeof outfits[number]; onClick: () => void; compact?: boolean }) {
  return (
    <Button onClick={onClick} className={`${compact ? "w-full" : "w-64 shrink-0"} overflow-hidden rounded-3xl bg-white text-left shadow-card transition-transform active:scale-95`}>
      <div className={`${compact ? "h-56" : "h-72"} relative overflow-hidden`}>
        <img src={outfit.image} alt={outfit.name} className="size-full object-cover transition-transform duration-500 hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-mint backdrop-blur">{outfit.tag}</span>
        <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-plum backdrop-blur"><Icon name="heart" size="sm" /></span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="line-clamp-1 font-bold text-ink">{outfit.name}</p>
          <p className="shrink-0 font-bold text-plum">{outfit.price}<span className="text-xs font-medium text-muted">/day</span></p>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-muted">
          <span>by {outfit.owner} · <span className="text-gold">★</span> {outfit.rating}</span>
          <span>{outfit.location}</span>
        </div>
      </div>
    </Button>
  );
}

function Home({ go }: { go: (screen: Screen) => void }) {
  const categories = ["Garba", "Fest", "Farewell", "Wedding", "Tech Meetup", "Formal", "Western", "Ethnic"];
  return (
    <div className="space-y-6 pb-28">
      <TopBar onMessages={() => go("messages")} />
      <Button className="flex items-center gap-2 text-sm font-semibold text-plum"><Icon name="pin" size="sm" /> Hyderabad <span className="rotate-90"><Icon name="chevron" size="sm" /></span></Button>
      <SearchBox onClick={() => go("explore")} />
      <section className="relative overflow-hidden rounded-3xl bg-plum p-5 text-white shadow-purple">
        <div className="relative z-10 max-w-2/3">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">Garba season</span>
          <p className="mt-4 font-display text-2xl font-semibold leading-tight">Why buy it when you can borrow it?</p>
          <p className="mt-2 text-sm text-white/75">Campus looks from just ₹250/day.</p>
          <Button onClick={() => go("explore")} className="mt-4 rounded-full bg-coral px-5 py-3 text-sm font-bold text-white">Explore the edit</Button>
        </div>
        <div className="absolute -bottom-10 -right-8 size-44 rounded-full bg-pink/30 blur-2xl" />
        <Icon name="sparkle" size="lg" />
      </section>
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {categories.map((category, index) => (
          <Button key={category} onClick={() => go("explore")} className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${index === 0 ? "bg-plum text-white" : "border border-plum/10 bg-white text-ink"}`}>{category}</Button>
        ))}
      </div>
      <section>
        <div className="mb-4 flex items-end justify-between">
          <div><p className="font-display text-xl font-semibold text-ink">Trending on campus <span className="text-coral">↗</span></p><p className="mt-1 text-sm text-muted">Loved by students near you</p></div>
          <Button onClick={() => go("explore")} className="text-sm font-bold text-plum">See all</Button>
        </div>
        <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-3">
          {outfits.map((outfit) => <OutfitCard key={outfit.name} outfit={outfit} onClick={() => go("detail")} />)}
        </div>
      </section>
      <section className="rounded-3xl bg-yellow p-5">
        <div className="flex items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-plum"><Icon name="closet" /></span>
          <div className="flex-1"><p className="font-bold text-ink">Your closet could pay for coffee.</p><p className="mt-1 text-sm text-muted">List in 2 minutes. You set the price.</p></div>
          <Button onClick={() => go("add")} className="grid size-10 place-items-center rounded-full bg-ink text-white"><Icon name="chevron" /></Button>
        </div>
      </section>
    </div>
  );
}

function Explore({ go }: { go: (screen: Screen) => void }) {
  return (
    <div className="pb-28">
      <div className="flex items-center justify-between pt-2"><p className="font-display text-3xl font-semibold">Find your look</p><span className="grid size-10 place-items-center rounded-full bg-white shadow-soft"><Icon name="sliders" /></span></div>
      <p className="mt-1 text-sm text-muted">312 outfits at MLRIT</p>
      <div className="mt-5"><SearchBox onClick={() => {}} /></div>
      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto">
        {["Event", "Size", "Price", "Color", "Available"].map((filter, index) => <Button key={filter} className={`flex shrink-0 items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold ${index === 0 ? "bg-plum text-white" : "border border-plum/10 bg-white"}`}>{filter}<span className="rotate-90"><Icon name="chevron" size="sm" /></span></Button>)}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {outfits.concat(outfits.slice(0, 2)).map((outfit, index) => <OutfitCard key={`${outfit.name}-${index}`} outfit={outfit} compact onClick={() => go("detail")} />)}
      </div>
    </div>
  );
}

function BackHeader({ title, go }: { title: string; go: (screen: Screen) => void }) {
  return <div className="flex items-center gap-3 pt-2"><Button onClick={() => go("home")} className="grid size-10 place-items-center rounded-full bg-white shadow-soft"><Icon name="arrow" /></Button><p className="font-display text-2xl font-semibold">{title}</p></div>;
}

function Detail({ go }: { go: (screen: Screen) => void }) {
  return (
    <div className="-mx-5 -mt-5 pb-28">
      <div className="relative h-120 overflow-hidden rounded-b-4xl">
        <img src={photos.blue} alt="Royal blue chaniya choli" className="size-full object-cover" />
        <Button onClick={() => go("home")} className="absolute left-5 top-7 grid size-11 place-items-center rounded-full bg-white/90 shadow-soft backdrop-blur"><Icon name="arrow" /></Button>
        <Button className="absolute right-5 top-7 grid size-11 place-items-center rounded-full bg-white/90 text-coral shadow-soft backdrop-blur"><Icon name="heart" /></Button>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5"><span className="h-2 w-5 rounded-full bg-white" /><span className="size-2 rounded-full bg-white/50" /><span className="size-2 rounded-full bg-white/50" /></div>
      </div>
      <div className="px-5 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div><span className="rounded-full bg-green-soft px-3 py-1 text-xs font-bold text-mint">Available Oct 5–10</span><p className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">Royal Blue<br />Chaniya Choli</p></div>
          <div className="text-right"><p className="text-2xl font-bold text-plum">₹500</p><p className="text-sm text-muted">per day</p></div>
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-soft">
          <img src={photos.profile} alt="Ananya" className="size-12 rounded-full object-cover" />
          <div className="flex-1"><p className="font-bold">Ananya Shah</p><p className="flex items-center gap-1 text-xs text-muted"><span className="text-mint"><Icon name="shield" size="sm" /></span> Verified MLRIT student</p></div>
          <span className="flex items-center gap-1 rounded-full bg-yellow px-3 py-1 text-sm font-bold"><span className="text-gold">★</span> 4.8</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[["Size", "M"], ["Condition", "Like new"], ["Deposit", "₹300"]].map(([label, value]) => <div key={label} className="rounded-2xl border border-plum/5 bg-white p-3 text-center"><p className="text-xs text-muted">{label}</p><p className="mt-1 text-sm font-bold">{value}</p></div>)}
        </div>
        <div className="mt-6"><p className="font-bold">About this outfit</p><p className="mt-2 text-sm leading-6 text-muted">Hand-embroidered mirror work with a flowing skirt and matching dupatta. Perfect for garba night. Dry cleaned after every borrow.</p></div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-4"><span className="text-plum"><Icon name="pin" /></span><div><p className="text-xs text-muted">Campus pickup</p><p className="text-sm font-bold">Girls Hostel, Block B</p></div></div>
          <div className="flex items-center gap-3 rounded-2xl bg-white p-4"><span className="text-plum"><Icon name="shield" /></span><div><p className="text-xs text-muted">CampusCloset protection</p><p className="text-sm font-bold">Deposit held safely until return</p></div></div>
        </div>
        <div className="mt-6"><div className="flex items-center justify-between"><p className="font-bold">Student reviews</p><p className="text-sm font-bold text-plum">4.8 · 12 reviews</p></div><p className="mt-3 rounded-2xl bg-white p-4 text-sm leading-6 text-muted">“Even prettier in person and Ananya made pickup super easy.” <span className="font-bold text-ink">— Riya, CSE ’26</span></p></div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 mx-auto flex max-w-md gap-3 border-t border-plum/5 bg-cream/90 p-4 backdrop-blur-xl">
        <Button onClick={() => go("messages")} className="grid size-14 shrink-0 place-items-center rounded-2xl border border-plum/15 bg-white text-plum"><Icon name="message" /></Button>
        <Button onClick={() => go("request")} className="flex-1 rounded-2xl bg-plum font-bold text-white shadow-purple">Borrow now · ₹500/day</Button>
      </div>
    </div>
  );
}

function Request({ go }: { go: (screen: Screen) => void }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="pb-8">
      <BackHeader title="Borrow request" go={go} />
      {sent ? (
        <div className="mt-24 text-center"><span className="mx-auto grid size-20 place-items-center rounded-full bg-green-soft text-mint"><Icon name="check" size="lg" /></span><p className="mt-6 font-display text-3xl font-semibold">Request sent!</p><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted">Ananya usually responds within 20 minutes. We’ll notify you when she accepts.</p><Button onClick={() => go("bookings")} className="mt-8 w-full rounded-2xl bg-plum py-4 font-bold text-white">View my bookings</Button></div>
      ) : (
        <>
          <div className="mt-6 flex gap-4 rounded-3xl bg-white p-4 shadow-soft"><img src={photos.blue} alt="" className="size-24 rounded-2xl object-cover" /><div className="py-1"><p className="text-xs font-bold uppercase tracking-wider text-coral">Garba ready</p><p className="mt-1 font-display text-xl font-semibold">Royal Blue Chaniya Choli</p><p className="mt-2 text-sm text-muted">Size M · Like new</p></div></div>
          <div className="mt-6"><p className="font-bold">Choose your dates</p><div className="mt-3 grid grid-cols-2 gap-3">{[["From", "Oct 07"], ["Return", "Oct 08"]].map(([label, value]) => <Button key={label} className="flex items-center gap-3 rounded-2xl border border-plum/10 bg-white p-4 text-left"><span className="text-plum"><Icon name="calendar" /></span><span><span className="block text-xs text-muted">{label}</span><span className="font-bold">{value}</span></span></Button>)}</div></div>
          <div className="mt-6"><p className="font-bold">Pickup point</p><Button className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-plum/10 bg-white p-4 text-left"><span className="text-coral"><Icon name="pin" /></span><span className="flex-1"><span className="block text-xs text-muted">Safe campus spot</span><span className="font-bold">Girls Hostel, Block B gate</span></span><Icon name="chevron" /></Button></div>
          <div className="mt-6 rounded-3xl bg-white p-5 shadow-soft"><div className="space-y-3 text-sm"><div className="flex justify-between"><span className="text-muted">Rental · 1 day</span><span className="font-semibold">₹500</span></div><div className="flex justify-between"><span className="text-muted">Refundable deposit</span><span className="font-semibold">₹300</span></div><div className="h-px bg-plum/5" /><div className="flex justify-between text-lg font-bold"><span>Total</span><span>₹800</span></div></div><p className="mt-4 flex gap-2 rounded-xl bg-green-soft p-3 text-xs leading-5 text-mint"><Icon name="shield" size="sm" /> Your deposit is refunded after a successful return.</p></div>
          <Button onClick={() => setSent(true)} className="mt-6 w-full rounded-2xl bg-plum py-4 font-bold text-white shadow-purple">Send borrow request</Button>
        </>
      )}
    </div>
  );
}

function AddOutfit() {
  const [listed, setListed] = useState(false);
  const fields = ["Outfit name", "Category", "Size", "Condition", "Rental price / day", "Security deposit", "Available dates", "Pickup location"];
  return (
    <div className="pb-28">
      <p className="pt-2 font-display text-3xl font-semibold">List an outfit</p><p className="mt-1 text-sm text-muted">Turn your unworn fits into campus cash.</p>
      <Button className="mt-6 flex h-52 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-plum/20 bg-lilac text-plum"><span className="grid size-14 place-items-center rounded-full bg-white shadow-soft"><Icon name="camera" size="lg" /></span><span className="mt-3 font-bold">Add up to 6 photos</span><span className="mt-1 text-xs text-muted">Good lighting gets 2× more requests</span></Button>
      <div className="mt-5 space-y-3">{fields.map((field, index) => <div key={field} className="rounded-2xl border border-plum/10 bg-white px-4 py-3"><p className="text-xs text-muted">{field}</p>{index === 0 ? <TextInput placeholder="e.g. Sequin Farewell Saree" className="mt-1 w-full bg-transparent text-sm font-semibold outline-none placeholder:text-muted/50" /> : <p className="mt-1 text-sm font-semibold">{index === 4 ? "₹ 400" : index === 5 ? "₹ 300" : "Tap to select"}</p>}</div>)}</div>
      <Button onClick={() => setListed(true)} className={`mt-6 w-full rounded-2xl py-4 font-bold text-white ${listed ? "bg-mint" : "bg-plum shadow-purple"}`}>{listed ? "Listed successfully ✓" : "List my outfit"}</Button>
    </div>
  );
}

function Bookings() {
  const [tab, setTab] = useState("Upcoming");
  return (
    <div className="pb-28"><p className="pt-2 font-display text-3xl font-semibold">My bookings</p><div className="mt-5 flex rounded-2xl bg-white p-1 shadow-soft">{["Upcoming", "Active", "Completed"].map((item) => <Button key={item} onClick={() => setTab(item)} className={`flex-1 rounded-xl py-3 text-sm font-bold ${tab === item ? "bg-plum text-white" : "text-muted"}`}>{item}</Button>)}</div>
      {tab === "Upcoming" ? <div className="mt-6 rounded-3xl bg-white p-4 shadow-card"><div className="flex gap-4"><img src={photos.blue} alt="" className="size-24 rounded-2xl object-cover" /><div className="flex-1"><span className="text-xs font-bold text-coral">WAITING FOR ANANYA</span><p className="mt-1 font-bold">Royal Blue Chaniya Choli</p><p className="mt-2 text-xs text-muted">Oct 7–8 · ₹800 total</p></div></div><div className="mt-4 flex items-center gap-2 rounded-xl bg-yellow/70 p-3 text-xs font-semibold"><Icon name="clock" size="sm" /> Owner usually responds in 20 min</div></div> : <div className="mt-20 text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-lilac text-plum"><Icon name="calendar" size="lg" /></span><p className="mt-4 font-bold">Nothing here yet</p><p className="mt-1 text-sm text-muted">Your {tab.toLowerCase()} rentals will appear here.</p></div>}
    </div>
  );
}

function Profile({ go }: { go: (screen: Screen) => void }) {
  return (
    <div className="pb-28"><div className="pt-2 text-center"><img src={photos.profile} alt="Maya Patel" className="mx-auto size-24 rounded-full border-4 border-white object-cover shadow-card" /><div className="mt-3 flex items-center justify-center gap-1"><p className="font-display text-2xl font-semibold">Maya Patel</p><span className="text-mint"><Icon name="shield" size="sm" /></span></div><p className="mt-1 text-sm text-muted">CSE · 3rd Year · MLRIT</p><span className="mt-3 inline-flex rounded-full bg-green-soft px-3 py-1 text-xs font-bold text-mint">Verified student</span></div>
      <div className="mt-7 grid grid-cols-3 gap-2 rounded-3xl bg-plum p-5 text-center text-white shadow-purple">{[["12", "Listed"], ["8", "Rentals"], ["₹4.5k", "Earned"]].map(([value, label]) => <div key={label}><p className="text-xl font-bold">{value}</p><p className="mt-1 text-xs text-white/60">{label}</p></div>)}</div>
      <div className="mt-5 overflow-hidden rounded-3xl bg-white shadow-soft">{[["closet", "My closet", "closet"], ["message", "Messages", "messages"], ["shield", "Trust & safety", "trust"], ["star", "My reviews", "profile"]].map(([icon, label, screen], index) => <Button key={label} onClick={() => go(screen as Screen)} className={`flex w-full items-center gap-3 p-4 text-left ${index ? "border-t border-plum/5" : ""}`}><span className="grid size-10 place-items-center rounded-xl bg-lilac text-plum"><Icon name={icon as IconName} /></span><span className="flex-1 font-semibold">{label}</span><Icon name="chevron" size="sm" /></Button>)}</div>
      <Button onClick={() => go("welcome")} className="mt-5 w-full rounded-2xl border border-plum/10 bg-white py-4 text-sm font-bold text-plum">Preview welcome experience</Button>
    </div>
  );
}

function SimplePage({ type, go }: { type: "messages" | "closet" | "trust"; go: (screen: Screen) => void }) {
  const content = {
    messages: { title: "Messages", icon: "message" as IconName, body: [["Ananya Shah", "Yes, Oct 7 works! Pickup after 5?", photos.profile], ["Rohan Mehta", "The blazer is freshly dry-cleaned.", photos.kurta]] },
    closet: { title: "My closet", icon: "closet" as IconName, body: [["Pastel Satin Saree", "Listed · ₹400/day", photos.pastel], ["Red Fest Kurta", "Rented until Oct 10", photos.red]] },
    trust: { title: "Trust & safety", icon: "shield" as IconName, body: [["Verified students only", "Every member joins with a college email.", ""], ["Protected deposits", "Deposits are held safely until return.", ""], ["Safe pickup points", "Meet at busy, well-lit campus landmarks.", ""], ["Community ratings", "Reviews keep every exchange accountable.", ""]] },
  }[type];
  return <div><BackHeader title={content.title} go={go} /><div className="mt-7 space-y-3">{content.body.map(([title, detail, image]) => <div key={title} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft">{image ? <img src={image} alt="" className="size-12 rounded-full object-cover" /> : <span className="grid size-12 place-items-center rounded-2xl bg-green-soft text-mint"><Icon name={content.icon} /></span>}<div className="flex-1"><p className="font-bold">{title}</p><p className="mt-1 text-sm text-muted">{detail}</p></div><Icon name="chevron" size="sm" /></div>)}</div>{type === "trust" && <Button className="mt-6 w-full rounded-2xl border border-coral/20 bg-pink/30 py-4 text-sm font-bold text-coral">Report a safety concern</Button>}</div>;
}

function Welcome({ go }: { go: (screen: Screen) => void }) {
  const [slide, setSlide] = useState(0);
  const slides = [
    { eyebrow: "Welcome to CampusCloset", title: <>Wear more.<br /><span className="text-yellow">Spend less.</span></>, body: "Why buy it when you can borrow it from your campus?", image: photos.red },
    { eyebrow: "01 · DISCOVER", title: <>Find outfits<br /><span className="text-yellow">on your campus.</span></>, body: "From garba night to placement day, your next look is closer than you think.", image: photos.blue },
    { eyebrow: "02 · BORROW", title: <>Borrow instead<br /><span className="text-yellow">of buying.</span></>, body: "Choose your dates, request in a tap, and pick up at a safe campus spot.", image: photos.pastel },
    { eyebrow: "03 · EARN", title: <>Your closet can<br /><span className="text-yellow">pay you back.</span></>, body: "List clothes you already own and earn from every successful rental.", image: photos.kurta },
  ];
  const item = slides[slide];
  return <div className="-mx-5 -my-5 flex min-h-screen flex-col overflow-hidden bg-plum p-6 text-white"><div className="flex items-center justify-between pt-3"><div className="flex items-center gap-2"><span className="grid size-10 place-items-center rounded-2xl bg-coral"><Icon name="sparkle" /></span><p className="font-display text-2xl font-semibold">CampusCloset</p></div>{slide > 0 && <Button onClick={() => go("login")} className="text-sm font-bold text-white/70">Skip</Button>}</div><div className="relative mt-8 flex-1 overflow-hidden rounded-4xl"><img src={item.image} alt="Student styling a campus outfit" className="size-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-plum via-transparent to-transparent" /><span className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">MLRIT students only</span><div className="absolute inset-x-6 bottom-8"><p className="text-xs font-bold tracking-widest text-pink">{item.eyebrow}</p><p className="mt-3 font-display text-4xl font-semibold leading-tight">{item.title}</p><p className="mt-3 max-w-xs text-sm leading-6 text-white/75">{item.body}</p></div></div><div className="pt-6"><div className="mb-4 flex justify-center gap-2">{slides.map((_, index) => <span key={index} className={`h-1.5 rounded-full ${index === slide ? "w-7 bg-coral" : "w-2 bg-white/25"}`} />)}</div><Button onClick={() => slide < slides.length - 1 ? setSlide(slide + 1) : go("login")} className="w-full rounded-2xl bg-coral py-4 font-bold shadow-card">{slide === 0 ? "See how it works" : slide === slides.length - 1 ? "Join CampusCloset" : "Continue"}</Button><p className="mt-4 text-center text-xs text-white/60">Verified campus students · Safe pickups · Protected deposits</p></div></div>;
}

function Login({ go }: { go: (screen: Screen) => void }) {
  return <div className="-mx-5 -my-5 flex min-h-screen flex-col bg-cream px-6 py-8"><Button onClick={() => go("welcome")} className="grid size-10 place-items-center rounded-full bg-white shadow-soft"><Icon name="arrow" /></Button><div className="mt-12"><span className="grid size-14 place-items-center rounded-2xl bg-plum text-white shadow-purple"><Icon name="sparkle" size="lg" /></span><p className="mt-6 font-display text-4xl font-semibold leading-tight">Your campus closet<br />starts here.</p><p className="mt-3 text-sm leading-6 text-muted">Sign in to borrow from people you can trust — students from your college.</p></div><div className="mt-8 rounded-3xl bg-white p-5 shadow-card"><p className="text-xs font-bold uppercase tracking-widest text-plum">College email</p><TextInput placeholder="name@mlrit.ac.in" className="mt-3 w-full rounded-2xl border border-plum/10 bg-cream p-4 text-sm outline-none" /><Button onClick={() => go("home")} className="mt-3 w-full rounded-2xl bg-plum py-4 font-bold text-white shadow-purple">Continue with college email</Button><div className="my-5 flex items-center gap-3"><span className="h-px flex-1 bg-plum/10" /><span className="text-xs text-muted">or</span><span className="h-px flex-1 bg-plum/10" /></div><Button onClick={() => go("home")} className="w-full rounded-2xl border border-plum/10 bg-white py-4 text-sm font-bold">Continue with Google</Button><Button onClick={() => go("home")} className="mt-3 w-full rounded-2xl border border-plum/10 bg-white py-4 text-sm font-bold">Continue with phone number</Button></div><div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-mint"><Icon name="shield" /> Verified Campus Students</div><p className="mt-auto pt-8 text-center text-xs leading-5 text-muted">By continuing, you agree to our community guidelines and campus safety standards.</p></div>;
}

function BottomNav({ current, go }: { current: Screen; go: (screen: Screen) => void }) {
  const nav: { screen: Screen; label: string; icon: IconName }[] = [
    { screen: "home", label: "Home", icon: "home" }, { screen: "explore", label: "Explore", icon: "search" }, { screen: "add", label: "Add", icon: "plus" }, { screen: "bookings", label: "Bookings", icon: "calendar" }, { screen: "profile", label: "Profile", icon: "user" },
  ];
  return <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto flex max-w-md items-end justify-around border-t border-plum/5 bg-white/90 px-3 pb-3 pt-2 backdrop-blur-xl">{nav.map((item) => <Button key={item.label} onClick={() => go(item.screen)} className={`flex min-w-14 flex-col items-center gap-1 text-xs font-bold ${current === item.screen ? "text-plum" : "text-muted"}`}>{item.screen === "add" ? <span className="-mt-7 grid size-14 place-items-center rounded-full border-4 border-cream bg-coral text-white shadow-card"><Icon name="plus" size="lg" /></span> : <Icon name={item.icon} filled={current === item.screen && item.icon === "home"} />}<span>{item.label}</span></Button>)}</nav>;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const go = (next: Screen) => { setScreen(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const mainScreens = ["home", "explore", "add", "bookings", "profile"];
  return (
    <main className="min-h-screen bg-shell font-sans text-ink">
      <div className="relative mx-auto min-h-screen max-w-md overflow-hidden bg-cream px-5 py-5 shadow-phone">
        {screen === "home" && <Home go={go} />}
        {screen === "explore" && <Explore go={go} />}
        {screen === "detail" && <Detail go={go} />}
        {screen === "request" && <Request go={go} />}
        {screen === "add" && <AddOutfit />}
        {screen === "bookings" && <Bookings />}
        {screen === "profile" && <Profile go={go} />}
        {(screen === "messages" || screen === "closet" || screen === "trust") && <SimplePage type={screen} go={go} />}
        {screen === "welcome" && <Welcome go={go} />}
        {screen === "login" && <Login go={go} />}
        {mainScreens.includes(screen) && <BottomNav current={screen} go={go} />}
      </div>
    </main>
  );
}
