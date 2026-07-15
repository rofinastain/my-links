"use client";

import { useState, type MouseEvent } from "react";
import { Link as LinkIcon, Briefcase, Terminal, GitBranch, BookOpen, Download, Mail } from "lucide-react";

export default function Page() {
  const links = [
    {
      title: "LinkedIn",
      subtitle: "linkedin.com/in/rofinastain",
      href: "https://www.linkedin.com/in/rofinastain/",
      icon: LinkIcon,
    },
    {
      title: "Portfolio: IT Business Analyst",
      subtitle: "Portfolio",
      href: "#",
      icon: Briefcase,
    },
    {
      title: "Portfolio: Python",
      subtitle: "Eksplorasi AI dan Python",
      href: "#",
      icon: Terminal,
    },
    {
      title: "GitHub",
      subtitle: "github.com/rofinastain",
      href: "https://github.com/rofinastain",
      icon: GitBranch,
    },
    {
      title: "Journaling",
      subtitle: "Jurnal menulis",
      href: "https://substack.com/@rofinastain",
      icon: BookOpen,
    },
    {
      title: "Unduh Resume / CV",
      subtitle: "Download",
      href: "https://app.notion.com/p/Rofi-Nastain-Resume-39d1ba56c8fd802bbd5ddfe844753df2",
      icon: Download,
    },
    {
      title: "Email",
      subtitle: "nastainrofi1103@gmail.com",
      href: "mailto:nastainrofi1103@gmail.com",
      icon: Mail,
    },
  ];

  const [comingSoon, setComingSoon] = useState<Record<string, boolean>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleComingSoon = (title: string, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setComingSoon((current) => ({ ...current, [title]: true }));

    window.setTimeout(() => {
      setComingSoon((current) => ({ ...current, [title]: false }));
    }, 2000);
  };

  const handleCopyEmail = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText("nastainrofi1103@gmail.com");
    }

    setCopiedEmail(true);
    window.setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  return (
    <main
      className="min-h-screen bg-slate-50 text-slate-800 font-sans flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    >
      <div className="w-full max-w-md flex flex-col items-center gap-8">

        {/* Profile Section */}
        <section className="w-full flex justify-center">
          <div className="flex flex-col items-center justify-center p-8 mb-6 w-full max-w-2xl mx-auto rounded-3xl bg-white/40 backdrop-blur-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] border border-white/50 space-y-3">
            <img src="/avatar.png" alt="Rofi Nastain" className="w-24 h-24 rounded-full object-cover border-2 border-slate-200 shadow-md" />
            <h1 className="text-4xl font-bold text-slate-900">Rofi Nastain</h1>
            <p className="text-sm text-slate-600">IT Business Analyst | AI & Python Explorer</p>
          </div>
        </section>

        {/* Links Section */}
        <section className="w-full flex flex-col gap-4 mt-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isPlaceholder = link.href === "#";
            const isEmail = link.title === "Email";
            const isResume = link.title === "Unduh Resume / CV";
            const isActiveComingSoon = isPlaceholder && comingSoon[link.title];
            const displaySubtitle = isEmail
              ? copiedEmail
                ? "✅ Email copied!"
                : link.subtitle
              : isResume
                ? link.subtitle
                : isActiveComingSoon
                  ? "⏳ Coming Soon..."
                  : link.subtitle;
            const sharedClasses =
              "group flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:-translate-y-1 hover:bg-white/70 transition-transform duration-200";

            return isPlaceholder ? (
              <button
                key={link.title}
                type="button"
                onClick={(e) => handleComingSoon(link.title, e)}
                className={sharedClasses}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-slate-800">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-semibold text-slate-900 truncate">{link.title}</span>
                  <span className="text-xs text-slate-600 truncate">{displaySubtitle}</span>
                </div>
              </button>
            ) : isEmail ? (
              <button
                key={link.title}
                type="button"
                onClick={handleCopyEmail}
                className={sharedClasses}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-slate-800">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-semibold text-slate-900 truncate">{link.title}</span>
                  <span className="text-xs text-slate-600 truncate">{displaySubtitle}</span>
                </div>
              </button>
            ) : (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClasses}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-slate-800">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col min-w-0 text-left">
                  <span className="font-semibold text-slate-900 truncate">{link.title}</span>
                  <span className="text-xs text-slate-600 truncate">{link.subtitle}</span>
                </div>
              </a>
            );
          })}
        </section>

        {/* Footer */}
        <footer className="w-full text-center mt-6">
          <div className="font-semibold text-slate-700">Powered by Logic & Coffee</div>
          <div className="text-sm italic text-slate-500 mt-1">&quot;The little things are infinitely the most important.&quot; <br /> - Sir Arthur Conan Doyle</div>
        </footer>
      </div>
    </main>
  );
}