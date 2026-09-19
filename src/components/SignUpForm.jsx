import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../hooks/AuthHooks";
import { useNavigate } from "react-router";

export default function SignUpForm() {
  const { getLS, setLS } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const previousUsers = getLS(import.meta.env.SK_USER_LIST_KEY) || [];
      console.log("Previous Users:", previousUsers);

      if (previousUsers.some((user) => user.email === data.email)) {
        toast.error("Email already exists. Please use a different email.");
        return;
      }
      console.log("Form Data:", data);
      toast.success("Account created successfully!");
      navigate("/");

      setLS(import.meta.env.SK_USER_LIST_KEY, [...previousUsers, data]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-8 sm:p-10">
      <h2 className="text-3xl font-bold text-white syne-font">
        Create account
      </h2>
      <p className="mt-1 text-white/50">Join SkyMart and start shopping</p>

      <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-4">
        {/* Full name */}
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Full name"
            autoComplete="name"
            className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-4 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
            {...register("fullName", {
              required: "Full name is required",
            })}
          />
        </div>

        {/* Email */}
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-4 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
            {...register("email", {
              required: "Email is required",
              autoComplete: "email",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password (min 6 chars)"
            autoComplete="new-password"
            className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-4 pl-12 pr-12 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
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
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm password */}
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            autoComplete="new-password"
            className="w-full rounded-xl border border-white/10 bg-[#1a1a1a] py-4 pl-12 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#CFFF04] py-4 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99]"
        >
          Create Account
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>

      <p className="mt-6 text-center text-white/50">
        Already have an account?{" "}
        <NavLink to={"/"} className="font-bold text-[#CFFF04] hover:underline">
          Sign in
        </NavLink>
      </p>
    </div>
  );
}
