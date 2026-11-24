import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container flex flex-wrap items-center justify-between gap-4 py-6">
        <span className="flex items-center gap-2 text-sm text-muted">
          <span className="brand-mark w-6" aria-hidden="true" /> {profile.name} · {profile.title}
        </span>
        <a className="footer-link" href="#home">Back to top</a>
      </div>
    </footer>
  );
}
