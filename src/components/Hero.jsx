import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 grid md:grid-cols-2 items-center gap-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
            <Star className="h-3.5 w-3.5" />
            New season just dropped
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Discover products you’ll love
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Premium quality, modern design, and everyday comfort. Shop our curated collection and find your next favorite thing.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition shadow">
              Shop now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 bg-white transition">
              Explore collections
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-40 w-40 bg-indigo-200/60 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-violet-200/60 rounded-full blur-3xl" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <img
              src="https://images.unsplash.com/photo-1518449083421-9a4cc0efb6a1?q=80&w=1600&auto=format&fit=crop"
              alt="Lifestyle"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
