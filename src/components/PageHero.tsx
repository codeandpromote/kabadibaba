import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "saffron" | "green" | "navy";
}

const gradients = {
  saffron: "from-saffron-50 via-white to-amber-50",
  green: "from-india-green-50 via-white to-emerald-50",
  navy: "from-blue-50 via-white to-indigo-50",
};

const badgeColors = {
  saffron: "bg-saffron-50 border-saffron-100 text-saffron-dark",
  green: "bg-india-green-50 border-green-200 text-india-green",
  navy: "bg-blue-50 border-blue-200 text-india-navy",
};

export default function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
  ctaLabel,
  ctaHref,
  variant = "saffron",
}: PageHeroProps) {
  return (
    <section className={`pt-28 pb-14 bg-gradient-to-br ${gradients[variant]} relative overflow-hidden`}>
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-5">
            <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-saffron transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 ${badgeColors[variant]}`}>
            {badge}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight max-w-2xl">
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className={variant === "green" ? "text-india-green" : "text-saffron"}>
                {titleHighlight}
              </span>
            </>
          )}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg text-gray-500 max-w-xl leading-relaxed">{subtitle}</p>
        )}

        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="mt-7 inline-flex items-center gap-2 bg-saffron hover:bg-saffron-dark text-white font-bold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
