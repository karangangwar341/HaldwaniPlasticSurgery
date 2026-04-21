import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  category: string;
}

export default function ServiceCard({
  title,
  slug,
  shortDescription,
  image,
  category,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group block">
      <article className="relative h-[420px] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-accent/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-xl font-bold text-white md:text-2xl">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
            {shortDescription}
          </p>
          <div className="mt-4 flex items-center gap-2 text-accent font-medium text-sm transition-all group-hover:gap-3">
            <span>Learn More</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
