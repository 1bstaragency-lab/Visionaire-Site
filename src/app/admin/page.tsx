import React from "react";
import Link from "next/link";
import AdminLogin from "@/components/AdminLogin";
import { logout } from "@/app/admin/actions";
import { isAdminConfigured, isAuthenticated } from "@/lib/admin-auth";
import { fetchInquiries, type Inquiry } from "@/lib/supabase-admin";

export const metadata = {
  title: "Admin — Visionaire",
  robots: { index: false, follow: false },
};

// Inquiries change as they arrive; never serve this from a cache.
export const dynamic = "force-dynamic";

function Notice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-black/30 p-6 md:p-8 max-w-2xl">
      <p className="font-mono text-[11px] tracking-widest uppercase pb-3">[ ! ]&nbsp;&nbsp;{title}</p>
      <div className="text-sm leading-relaxed text-black/60 space-y-2">{children}</div>
    </div>
  );
}

function InquiryCard({ inquiry, index }: { inquiry: Inquiry; index: number }) {
  const num = String(index + 1).padStart(3, "0");
  const date = inquiry.created_at
    ? new Date(inquiry.created_at).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "—";
  const responses = inquiry.responses ?? {};

  return (
    <article className="border-b border-black/15 py-6 md:py-8">
      <div className="grid md:grid-cols-[4rem_1fr_14rem] gap-3 md:gap-6 items-start">
        <span className="font-mono text-[11px] tracking-widest text-black/35">{num}</span>

        <div>
          <h2 className="font-sans font-medium uppercase tracking-tight text-xl md:text-2xl leading-none">
            {inquiry.name || "Unnamed"}
          </h2>
          <p className="pt-2 font-mono text-[10px] tracking-widest uppercase text-black/50">
            {inquiry.subject || inquiry.category || "—"}
          </p>

          <a
            href={
              inquiry.contact_info?.includes("@")
                ? `mailto:${inquiry.contact_info}`
                : `tel:${inquiry.contact_info ?? ""}`
            }
            className="inline-block pt-3 text-sm underline underline-offset-4 hover:opacity-60 transition-opacity break-all"
          >
            {inquiry.contact_info || "No contact provided"}
          </a>

          <dl className="pt-4 space-y-2">
            {Object.entries(responses).map(([key, value]) => (
              <div key={key} className="text-sm">
                <dt className="font-mono text-[9px] tracking-widest uppercase text-black/40">{key}</dt>
                <dd className="text-black/70">{String(value)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:text-right">
          <p className="font-mono text-[10px] tracking-widest uppercase text-black/40">{date}</p>
        </div>
      </div>
    </article>
  );
}

export default async function AdminPage() {
  if (!isAdminConfigured()) {
    return (
      <main className="min-h-screen bg-white text-black font-sans px-5 md:px-10 py-16">
        <Notice title="Admin password not configured">
          <p>
            Set <code className="font-mono">ADMIN_PASSWORD</code> in your environment (Vercel project settings and{" "}
            <code className="font-mono">.env.local</code>) to enable the admin panel.
          </p>
        </Notice>
      </main>
    );
  }

  if (!(await isAuthenticated())) {
    return (
      <main className="min-h-screen bg-white text-black font-sans px-5 md:px-10">
        <AdminLogin />
      </main>
    );
  }

  const result = await fetchInquiries();

  return (
    <main className="min-h-screen bg-white text-black font-sans px-5 md:px-10 pb-20">
      <header className="flex items-center justify-between py-5">
        <Link href="/">
          <img src="/logo.png" alt="Visionaire" className="h-8 md:h-10 w-auto object-contain hover:opacity-70 transition-opacity" />
        </Link>
        <form action={logout}>
          <button
            type="submit"
            className="font-mono text-[11px] tracking-widest uppercase hover:opacity-60 transition-opacity cursor-pointer"
          >
            <span className="opacity-40">[&nbsp;</span>Sign Out<span className="opacity-40">&nbsp;]</span>
          </button>
        </form>
      </header>

      <div className="pt-8 pb-10">
        <div className="flex items-end justify-between border-b border-black pb-3">
          <span className="font-mono text-[11px] tracking-widest uppercase">Inquiries</span>
          <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">
            [&nbsp;{result.ok ? result.inquiries.length : "—"}&nbsp;]
          </span>
        </div>
        <h1 className="pt-10 font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-7xl">
          Inbox
        </h1>
      </div>

      {!result.ok ? (
        <Notice title="Could not load inquiries">
          <p className="font-mono text-[11px]">{result.error}</p>
          <p>
            The admin panel reads with the Supabase <strong>service role</strong> key, which bypasses row-level
            security. Set <code className="font-mono">SUPABASE_SERVICE_ROLE_KEY</code> in your environment.
          </p>
        </Notice>
      ) : result.inquiries.length === 0 ? (
        <Notice title="No inquiries yet">
          <p>
            Nothing has been captured in <code className="font-mono">leadcaptures2</code> yet. If you expected
            submissions here, check that the table has an INSERT policy for the <code className="font-mono">anon</code>{" "}
            role — without one, every contact form submission is rejected by row-level security.
          </p>
        </Notice>
      ) : (
        <div>
          {result.inquiries.map((inquiry, i) => (
            <InquiryCard key={inquiry.id ?? i} inquiry={inquiry} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}
