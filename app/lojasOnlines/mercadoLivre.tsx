"use client";
import Card from "../components/Cards";

export function MercadoLivre() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <Card
        title="Perfume Nautica Voyage Eau De Toilette Masculino 100ml"
        description="🌊força em uma única fragrância. Ideal para o dia a dia e para quem gosta de marcar presença sem exageros. ✨💙"
        imageSrc="/nautica.webp"
        badge="Mais vendido"
        price="R$ 104,06"
        buttonText="Ver produto"
        href="https://meli.la/2Htw2DX"
      />
      <Card
        title="Perfume Ulric de Varens UDV For Men Eau de Toilette 100ml Chipre Amadeirado"
        description="💙 UDV for Men: uma fragrância marcante, elegante e versátil para quem gosta de presença e sofisticação no dia a dia. ✨"
        imageSrc="/Ulric.webp"
        badge="Mais vendido"
        price="R$ 59,90"
        buttonText="Ver produto"
        href="https://meli.la/1XRCiGf"
      />
      <Card
        title="Eudora Club 6 Voyage Deo-colônia 95ml para masculino"
        description="☕ Club 6 Voyage: uma fragrância envolvente, sofisticada e marcante. Perfeita para quem busca elegância e personalidade em qualquer ocasião. ✨"
        imageSrc="/Eudora.webp"
        badge="Mais vendido"
        price="R$ 99,63"
        buttonText="Ver produto"
        href="https://meli.la/1hBAQcX"
      />
    </div>
  );
}
