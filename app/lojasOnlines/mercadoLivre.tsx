"use client"
import Card from "../components/Cards";

export function MercadoLivre() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      <Card
        title="Perfume Nautica Voyage Eau De Toilette Masculino 100ml"
        description="🌊frça em uma única fragrância. Ideal para o dia a dia e para quem gosta de marcar presença sem exageros. ✨💙"
        imageSrc="/nautica.webp"
        badge="Mais vendido"
        // price="R$ 49,90"
        buttonText="Ver produto"
        href="https://meli.la/2Htw2DX"
      />
    </div>
  );
}
