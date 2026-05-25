import Image from "next/image";
import Card from "./components/Cards";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-col items-center gap-12 py-24 px-6 sm:px-10">
        <div className="w-full rounded-4xl border border-zinc-200 bg-white/90 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-black/20">
          <div className="flex flex-col items-center gap-6 text-center sm:text-left">
            <Image
              className="dark:invert-25"
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={20}
            />
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Vitrinex
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
               Conheça os melhores produtos e serviços com a Vitrinex, a plataforma de vitrines digitais que conecta você às melhores ofertas do mercado. Explore uma variedade de categorias, desde tecnologia até moda, e descubra produtos incríveis com apenas alguns cliques.Voçê pode encontrar as melhores promoções. Não perca mais tempo procurando, deixe a Vitrinex ser sua guia para as melhores ofertas online!
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Card
            title="Plano Vitrine Premium"
            description="Design limpo, imagem centralizada e botão de ação configurável para destacar seu conteúdo."
            imageSrc="/next.svg"
            badge="Mais vendido"
            price="R$ 49,90"
            buttonText="Ver detalhes"
            href="#"
          />
          <Card
            title="Plano Vitrine Premium"
            description="Design limpo, imagem centralizada e botão de ação configurável para destacar seu conteúdo."
            imageSrc="/next.svg"
            badge="Mais vendido"
            price="R$ 49,90"
            buttonText="Ver detalhes"
            href="#"
          />
          <Card
            title="Plano Vitrine Premium"
            description="Design limpo, imagem centralizada e botão de ação configurável para destacar seu conteúdo."
            imageSrc="/next.svg"
            badge="Mais vendido"
            price="R$ 49,90"
            buttonText="Ver detalhes"
            href="#"
          />
        </div>
      </main>
    </div>
  );
}
