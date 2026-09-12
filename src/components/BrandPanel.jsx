import Logo from "./Logo";
import StatCard from "./StatCard";

export default function BrandPanel() {
  return (
    <div className="relative flex w-full flex-col justify-between overflow-hidden bg-black px-8 py-10 sm:px-14 sm:py-14 lg:w-1/2">
      {/* Ambient glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#CFFF04]/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-[#CFFF04]/5 blur-[100px]" />

      <Logo />

      <div className="relative z-10 mt-16 max-w-xl lg:mt-0">
        <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#CFFF04]">
          WELCOME BACK
        </p>
        <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
          Shop the future.
          <br />
          <span className="text-[#CFFF04]">Today.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-white/50">
          Thousands of products, lightning-fast delivery, and prices that
          make your wallet happy.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4">
          <StatCard value="20K+" label="Products" />
          <StatCard value="50K+" label="Users" />
          <StatCard value="4.9★" label="Rating" />
        </div>
      </div>

      <div className="hidden lg:block" />
    </div>
  );
}