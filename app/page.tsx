import Image from "next/image";
import { MercadoLivre } from "./lojasOnlines/mercadoLivre";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <main className="flex w-full max-w-7xl flex-col items-center gap-10 py-24 px-6 sm:px-10">
        <div className="w-full rounded-4xl border border-zinc-200 bg-white/90 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-black/20">
          <div className="flex flex-col items-center gap-6 text-center sm:text-left">
            <Image
              className="dark:invert-25"
              src="/icon.webp"
              alt="Next.js logo"
              width={100}
              height={20}
            />
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Encontre as melhores ofertas sem perder tempo procurando
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Selecionamos produtos com excelente custo-benefício, avaliações
                positivas e promoções atualizadas. Explore nossas recomendações
                e descubra oportunidades de compra em diversas categorias.
              </p>
            </div>
          </div>
        </div>

        <div className="gap-3 flex-auto">
          <h2 className="flex items-center justify-center text-3xl pb-5 font-bold">
            Produtos do Mercado Livre
          </h2>
          <MercadoLivre />
        </div>
      </main>
    </div>
  );
}
