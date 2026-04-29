import { PortableText, PortableTextComponents } from "@portabletext/react";

interface RichTextProps {
  value: any[];
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 text-base leading-relaxed text-primary/70 md:text-lg last:mb-0">{children}</p>,
    h1: ({ children }) => <h1 className="mb-6 font-heading text-4xl font-bold text-primary">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-8 mb-4 font-heading text-3xl font-bold text-primary">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-6 mb-3 font-heading text-2xl font-semibold text-primary">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-accent pl-4 italic text-primary/80 my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2 text-primary/70 text-base md:text-lg">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2 text-primary/70 text-base md:text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noindex nofollow" : undefined}
          className="font-medium text-accent hover:underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ value }: RichTextProps) {
  if (!value) return null;
  
  return (
    <div className="prose-custom">
      <PortableText value={value} components={components} />
    </div>
  );
}
