import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section className="relative py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8 sm:p-10 grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Stay in the loop</h3>
            <p className="mt-2 text-slate-600">Get updates on new drops, exclusive offers, and style tips.</p>
          </div>
          <form onSubmit={subscribe} className="flex gap-3">
            <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-300 bg-white shadow-sm">
              <Mail className="h-4 w-4 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
