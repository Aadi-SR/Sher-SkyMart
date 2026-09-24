import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
import AboutStatCard from "../components/AboutStatCard";
import ValueCard from "../components/ValueCard";
import TeamMemberCard from "../components/TeamMemberCard";
import { useNavigate } from "react-router";

const STATS = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    iconBg: "bg-[#2a3a10]",
    iconColor: "text-[#CFFF04]",
    title: "Trust",
    description: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Zap,
    iconBg: "bg-[#12233f]",
    iconColor: "text-sky-400",
    title: "Speed",
    description: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: Heart,
    iconBg: "bg-[#3a1230]",
    iconColor: "text-pink-400",
    title: "Community",
    description: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    iconBg: "bg-[#3f2c10]",
    iconColor: "text-amber-400",
    title: "Quality",
    description: "We curate the best — no filler, no junk, just great products.",
  },
];

const TEAM = [
  { name: "Aryan Shah", role: "Founder & CEO", avatarColor: "bg-[#CFFF04] text-black" },
  { name: "Priya Mehta", role: "Head of Product", avatarColor: "bg-sky-500 text-white" },
  { name: "Rohan Verma", role: "Lead Engineer", avatarColor: "bg-purple-500 text-white" },
  { name: "Sneha Kapoor", role: "Design Director", avatarColor: "bg-rose-500 text-white" },
];

export default function About() {

  let navigate = useNavigate()
  return (
    <div className="mx-auto max-w-4xl space-y-14 px-6 py-14 dm-sans-font">
      {/* Hero */}
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CFFF04]">
          <Zap className="h-6 w-6 fill-black text-black" strokeWidth={0} />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          About <span className="text-[#CFFF04]">SkyMart</span>
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-white/50">
          SkyMart is a next-generation e-commerce platform built to make
          online shopping fast, fair, and enjoyable — for everyone.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((stat) => (
          <AboutStatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Our Story */}
      <div className="rounded-3xl border border-white/15 p-7 sm:p-8">
        <h2 className="text-xl font-extrabold text-white">Our Story</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/50">
          <p>
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked
            ourselves: what if shopping online was actually{" "}
            <span className="font-semibold text-white/70">enjoyable?</span>
          </p>
          <p>
            Three years later, SkyMart serves over 50,000 customers across
            the country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don&apos;t require a second
            mortgage.
          </p>
          <p>
            We&apos;re still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you
            make here.
          </p>
        </div>
      </div>

      {/* What We Stand For */}
      <div>
        <h2 className="text-center text-2xl font-extrabold text-white">
          What We Stand For
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div>
        <h2 className="text-center text-2xl font-extrabold text-white">
          Meet the Team
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {TEAM.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl border border-[#CFFF04]/30 bg-[#CFFF04]/5 px-6 py-10 text-center">
        <h2 className="text-2xl font-extrabold text-white">Ready to shop?</h2>
        <p className="mt-2 text-white/50">
          Explore thousands of products at unbeatable prices.
        </p>
        <button
          type="button"
          onClick={()=>{navigate("/main/shop")}}
          className="group mx-auto mt-6 flex items-center gap-2 rounded-xl bg-[#CFFF04] px-6 py-3 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99]"
        >
          Browse Products
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}