import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import useAuth from "../hooks/AuthHooks";

export default function SignInForm() {
  const { getLS, setLS } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = (data) => {
    try {
      console.log("Form Data:", data);

      let users = getLS("skymart-user-list") || [];
      console.log("Users from localStorage:", users);
      let user = users.find((user) => user.email === data.email && user.password === data.password);

      if (!user) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Signed in successfully!");
      navigate("/main");
      console.log("Current User Key:", "skymart-current-user");
      setLS("skymart-current-user", user);
    } catch (err) {
      toast.error(err?.message || "Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-9">
      <h2 className="text-3xl font-bold text-white syne-font">
        Sign in
      </h2>
      <p className="mt-1.5 text-white/50">
        Enter your credentials to continue
      </p>

      <form onSubmit={handleSubmit(submitHandler)} className="mt-6 space-y-3">
        {/* Email */}
        <div>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-3.5 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-3.5 pl-12 pr-12 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
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
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#CFFF04] py-3.5 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99] disabled:opacity-60"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
          {!isSubmitting && (
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          )}
        </button>
      </form>

      <p className="mt-5 text-center text-white/50">
        Don&apos;t have an account?{" "}
        <NavLink to="/register" className="font-bold text-[#CFFF04] hover:underline">
          Create one
        </NavLink>
      </p>
    </div>
  );
}