import { ArrowRight } from "lucide-react";
import useAuth from "../hooks/AuthHooks";


function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "GOOD MORNING", emoji: "☀️" };
  if (hour < 17) return { text: "GOOD AFTERNOON", emoji: "🌤️" };
  return { text: "GOOD EVENING", emoji: "👋" };
}

const WelcomeBanner = () => {
  const {getLS} = useAuth();
  const userName = getLS("skymart-current-user")?.fullName || null;
  console.log("Current User Name:", userName);

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-white bg-black px-8 py-10 dm-sans-font sm:px-12 sm:py-12 mt-30"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.05) 2px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    >
      <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        {/* Left: greeting + CTAs */}
        <div className="max-w-xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-amber-400">

             <span className="text-base">

             </span>
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Welcome back,
            <br />
            <span className="text-[#CFFF04]">{userName}!</span>
          </h1>
          <p className="mt-5 max-w-md text-white/50">
            Discover today&apos;s picks — hand-curated products across
            electronics, fashion, and more.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="group flex items-center gap-2 rounded-xl bg-[#CFFF04] px-6 py-3 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/5"
            >
              View All Products
            </button>
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="flex shrink-0 gap-4">
          <div className="w-40 rounded-2xl border border-[#CFFF04]/30 bg-[#CFFF04]/10 px-5 py-5 text-center">
            <p className="text-3xl font-extrabold text-[#CFFF04]">
                {/* product count to be shown */}
            </p>
            <p className="mt-1 text-sm text-white/60">Products Available</p>
          </div>
          <div className="w-40 rounded-2xl border border-white/20 px-5 py-5 text-center">
            <p className="text-3xl font-extrabold text-white">Free</p>
            <p className="mt-1 text-sm text-white/60">
              Delivery on 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;