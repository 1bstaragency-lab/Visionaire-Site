"use client";

import React, { useActionState } from "react";
import { login } from "@/app/admin/actions";

export default function AdminLogin() {
  const [state, formAction, isPending] = useActionState(login, { message: "" });

  return (
    <div className="w-full max-w-md mx-auto py-20 md:py-32">
      <div className="flex items-end justify-between border-b border-black pb-3">
        <span className="font-mono text-[11px] tracking-widest uppercase">Admin</span>
        <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">
          [&nbsp;Restricted&nbsp;]
        </span>
      </div>

      <h1 className="pt-10 font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-4xl md:text-5xl">
        Sign In
      </h1>

      {state?.message && (
        <div className="mt-8 border border-black/30 px-4 py-3 font-mono text-[11px] tracking-widest uppercase text-black/80">
          [ ! ]&nbsp;&nbsp;{state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-8 pt-10">
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-mono text-[10px] uppercase tracking-widest text-black/50">
            <span className="text-black/30">[01]</span>&nbsp;&nbsp;Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            autoComplete="current-password"
            className="w-full bg-transparent border-0 border-b border-black/30 px-0 py-3 text-black text-base placeholder:text-black/25 focus:outline-none focus:border-black transition-colors rounded-none"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full flex items-center justify-between border border-black/40 hover:bg-black hover:text-white transition-colors duration-300 px-6 py-4 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">
            {isPending ? "Checking..." : "Enter"}
          </span>
          <span className="font-mono text-[11px]">→</span>
        </button>
      </form>
    </div>
  );
}
