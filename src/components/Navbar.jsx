import { ShoppingCart, Search } from "lucide-react";

export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-500" />
          <span className="font-semibold text-lg tracking-tight">Flames Shop</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#new" className="hover:text-slate-900 transition">New</a>
          <a href="#collections" className="hover:text-slate-900 transition">Collections</a>
          <a href="#sale" className="hover:text-slate-900 transition">Sale</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm w-64">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400"
            />
          </div>
          <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow transition">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
