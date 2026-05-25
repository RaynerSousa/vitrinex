import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  badge?: string;
  price?: string;
  buttonText: string;
  href?: string;
};

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  badge,
  price,
  buttonText,
  href,
}: CardProps) {
  return (
    <article className="max-w-sm rounded-4xl border border-zinc-200 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/75 dark:shadow-black/20">
      <div className="relative mb-6 h-52 overflow-hidden rounded-[1.75rem] bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain p-8"
        />
      </div>
      {badge ? (
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          {badge}
        </span>
      ) : null}
      <div className="mt-4 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            {title}
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          {price ? (
            <div>
              <p className="text-lg font-semibold text-zinc-950 dark:text-white">
                {price}
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500">
                Valor
              </p>
            </div>
          ) : null}
          {href ? (
            <a
              href={href}
              className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {buttonText}
            </a>
          ) : (
            <button className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
