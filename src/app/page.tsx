export default function Page() {
  const links = [
    {
      title: "Portfolio",
      url: "https://yourportfolio.com",
      clicks: "1.2K",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
      ),
    },
    {
      title: "GitHub",
      url: "https://github.com/yourname",
      clicks: "856",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
      ),
    },
    {
      title: "Twitter / X",
      url: "https://twitter.com/yourname",
      clicks: "2.4K",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
      ),
    },
    {
      title: "YouTube",
      url: "https://youtube.com/@yourname",
      clicks: "540+",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.45 29.45 0 0 0 1 12a29.45 29.45 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.45 29.45 0 0 0 23 12a29.45 29.45 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
      ),
    },
    {
      title: "Email",
      url: "mailto:hello@yourname.com",
      clicks: "100+",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-neutral-900 via-black to-black text-white font-sans flex justify-center px-4 py-12 selection:bg-red-600 selection:text-white overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="w-24 h-24 rounded-full bg-linear-to-tr from-red-600 to-orange-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-red-600/25 border-2 border-white/10">
            YN
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Your Name</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Vibe Coder ✨ | Building cool stuff with AI
          </p>
        </section>

        {/* Links Section */}
        <section className="w-full flex flex-col gap-3 mt-2">
          {links.map((link, index) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-red-600/50 hover:bg-red-600/10 hover:scale-105 hover:shadow-[0_0_25px_rgba(229,9,20,0.25)] active:scale-[0.97] transition-all duration-200 ease-out opacity-0 animate-fade-in-up cursor-pointer will-change-transform"
              style={{ animationDelay: `${(index + 1) * 0.12 + 0.2}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-200">
                {link.icon}
              </div>

              {/* Text & Badge */}
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-white group-hover:text-red-600 transition-colors duration-200 truncate">
                  {link.title}
                </span>
                <span className="text-xs text-gray-500 truncate">
                  {link.url.replace(/^https?:\/\//, "").replace(/^mailto:/, "")}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-400/80 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full w-fit mt-1.5">
                  🔥 {link.clicks} clicks
                </span>
              </div>

              {/* Arrow */}
              <svg className="ml-auto w-5 h-5 text-gray-500 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 text-xs mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          Made with 💚 and vibes
        </footer>
      </div>

      {/* Stagger Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </main>
  );
}