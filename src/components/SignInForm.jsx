import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignInForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-10">
      <h2 className="text-3xl font-extrabold text-white syne-font">Sign in</h2>
      <p className="mt-2 text-white/50">Enter your credentials to continue</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* Email */}
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-4 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-4 pl-12 pr-12 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#CFFF04] py-4 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99] syne-font"
        >
          Sign in
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      <p className="mt-6 text-center text-white/50">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="font-bold text-[#CFFF04] hover:underline">
          Create one
        </a>
      </p>
    </div>
  );
}