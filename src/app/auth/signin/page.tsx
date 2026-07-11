"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { DEMO_USER } from "@/lib/demo-credentials";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const doLogin = async (data: LoginForm) => {
    setServerError(null);
    const { error } = await signIn.email({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setServerError(
        error.message || "Invalid email or password. Please try again.",
      );
      return;
    }

    router.push("/spaces");
    router.refresh();
  };

  const onSubmit = async (data: LoginForm) => {
    setIsSubmitting(true);
    await doLogin(data);
    setIsSubmitting(false);
  };

  const handleDemoLogin = async () => {
    setValue("email", DEMO_USER.email);
    setValue("password", DEMO_USER.password);
    setIsDemoLoading(true);
    await doLogin(DEMO_USER);
    setIsDemoLoading(false);
  };

  const handleGoogleLogin = async () => {
    await signIn.social({ provider: "google", callbackURL: "/spaces" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-base-100 px-4 py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
      </div>

      <div className="card w-full max-w-md border border-base-300 bg-base-100/90 backdrop-blur-xl shadow-2xl rounded-3xl">
        <div className="card-body p-8">
          {/* Badge */}
          <div className="badge badge-outline border-primary/30 text-primary mx-auto">
            Welcome Back
          </div>

          {/* Heading */}
          <div className="text-center mt-4">
            <h1 className="text-4xl font-extrabold">
              Sign in to{" "}
              <span className="bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                SpaceHive
              </span>
            </h1>

            <p className="mt-3 text-base-content/60">
              Book workspaces, studios, and venues in just a few clicks.
            </p>
          </div>

          {serverError && (
            <div className="alert alert-error mt-6 rounded-xl">
              <span>{serverError}</span>
            </div>
          )}

          {/* FORM */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
            {/* Email */}

            <div>
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>

              <label
                className={`input input-bordered w-full rounded-2xl flex items-center gap-3 transition-all ${
                  errors.email ? "input-error" : "focus-within:border-primary"
                }`}
              >
                <Mail className="w-4 h-4 opacity-60" />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="grow"
                />
              </label>

              {errors.email && (
                <p className="text-error text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <label
                className={`input input-bordered w-full rounded-2xl flex items-center gap-3 transition-all ${
                  errors.password
                    ? "input-error"
                    : "focus-within:border-primary"
                }`}
              >
                <Lock className="w-4 h-4 opacity-60" />

                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="grow"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </label>

              {errors.password && (
                <p className="text-error text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-full rounded-2xl border-0 text-white bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/20 transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  Log In
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Demo */}

          <button
            onClick={handleDemoLogin}
            disabled={isSubmitting || isDemoLoading}
            className="btn btn-outline w-full rounded-2xl mt-4 hover:border-primary hover:text-primary"
          >
            {isDemoLoading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Try Demo Account"
            )}
          </button>

          {/* Divider */}

          <div className="divider text-xs text-base-content/40 uppercase tracking-widest">
            or continue with
          </div>

          {/* Google */}

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full rounded-2xl hover:border-primary"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.8-.4-4.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 16.2 3 9.5 7.4 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 45c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.7 36.4 27 37 24 37c-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9.4 40.6 16.1 45 24 45z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4 5.6l6.6 5.4C41.4 36 45 30.9 45 24c0-1.4-.1-2.8-.4-3.5z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Bottom */}

          <p className="text-center text-sm text-base-content/60 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold bg-linear-to-r from-violet-600 via-pink-500 to-amber-400 bg-clip-text text-transparent hover:opacity-80"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
