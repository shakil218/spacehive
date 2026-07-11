"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { signUp } from "@/lib/auth-client";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[0-9]/, "Include at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function SignUpPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setServerError(null);
    setIsSubmitting(true);

    const { error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    setIsSubmitting(false);

    if (error) {
      setServerError(
        error.message || "Could not create your account. Please try again.",
      );
      return;
    }

    router.push("/spaces");
    router.refresh();
  };

  return (
    <section className="relative overflow-hidden bg-base-100">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-36 left-0 h-80 w-80 rounded-full bg-violet-500/15 blur-[120px]" />

        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-pink-500/15 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/15 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-4 py-16">
        <div className="card w-full max-w-md overflow-hidden rounded-3xl border border-base-300/70 bg-base-100/90 shadow-2xl backdrop-blur-xl">
          <div className="card-body p-8 md:p-10">
            {/* Logo */}

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 text-white shadow-lg">
              <Sparkles className="h-8 w-8" />
            </div>

            <h1 className="text-center text-3xl font-bold">Create Account</h1>

            <p className="mt-2 text-center text-sm text-base-content/60">
              Join{" "}
              <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text font-semibold text-transparent">
                SpaceHive
              </span>{" "}
              and start discovering amazing workspaces.
            </p>

            {serverError && (
              <div className="alert alert-error mt-6 rounded-xl">
                <span>{serverError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              {/* Full Name */}
              <div>
                <label className="label pb-2">
                  <span className="label-text font-medium">Full Name</span>
                </label>

                <label
                  className={`input w-full rounded-2xl border transition-all ${
                    errors.name
                      ? "input-error"
                      : "border-base-300 hover:border-primary focus-within:border-primary"
                  }`}
                >
                  <User className="h-5 w-5 text-base-content/50" />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="grow border-none bg-transparent outline-none"
                    {...register("name")}
                  />
                </label>

                {errors.name && (
                  <p className="mt-2 text-xs text-error">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="label pb-2">
                  <span className="label-text font-medium">Email Address</span>
                </label>

                <label
                  className={`input w-full rounded-2xl border transition-all ${
                    errors.email
                      ? "input-error"
                      : "border-base-300 hover:border-primary focus-within:border-primary"
                  }`}
                >
                  <Mail className="h-5 w-5 text-base-content/50" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="grow border-none bg-transparent outline-none"
                    {...register("email")}
                  />
                </label>

                {errors.email && (
                  <p className="mt-2 text-xs text-error">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label pb-2">
                  <span className="label-text font-medium">Password</span>
                </label>

                <label
                  className={`input w-full rounded-2xl border transition-all ${
                    errors.password
                      ? "input-error"
                      : "border-base-300 hover:border-primary focus-within:border-primary"
                  }`}
                >
                  <Lock className="h-5 w-5 text-base-content/50" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="grow border-none bg-transparent outline-none"
                    {...register("password")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer text-base-content/60 hover:text-primary"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </label>

                {errors.password ? (
                  <p className="mt-2 text-xs text-error">
                    {errors.password.message}
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-base-content/50">
                    Minimum 8 characters, one uppercase letter and one number.
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label pb-2">
                  <span className="label-text font-medium">
                    Confirm Password
                  </span>
                </label>

                <label
                  className={`input w-full rounded-2xl border transition-all ${
                    errors.confirmPassword
                      ? "input-error"
                      : "border-base-300 hover:border-primary focus-within:border-primary"
                  }`}
                >
                  <Lock className="h-5 w-5 text-base-content/50" />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="grow border-none bg-transparent outline-none"
                    {...register("confirmPassword")}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="cursor-pointer text-base-content/60 hover:text-primary"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </label>

                {errors.confirmPassword && (
                  <p className="mt-2 text-xs text-error">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-full rounded-2xl border-0 text-white bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider my-7 text-xs text-base-content/40">OR</div>

            {/* Login */}
            <p className="text-center text-sm text-base-content/70">
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-semibold bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent hover:opacity-80 transition"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
