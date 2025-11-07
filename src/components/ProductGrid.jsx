import { useState } from "react";
import { Heart } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "Everyday Sneakers",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Minimal Watch",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Round Sunglasses",
    price: 69,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Cozy Hoodie",
    price: 79,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 119,
    image:
      "https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1600&auto=format&fit=crop",
  },
];

function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur border border-slate-200">
            {product.tag}
          </span>
        )}
        <button
          onClick={() => setLiked((v) => !v)}
          className={`absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full border bg-white/90 backdrop-blur ${
            liked ? "text-rose-600 border-rose-200" : "text-slate-700 border-slate-200"
          }`}
          aria-label="Like"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-slate-900 line-clamp-1">{product.name}</h3>
          <span className="font-semibold">${product.price}</span>
        </div>
        <button
          onClick={() => onAdd(product)}
          className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductGrid({ onAdd }) {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured products</h2>
          <p className="text-slate-600 mt-1">Handpicked essentials for your everyday.</p>
        </div>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
