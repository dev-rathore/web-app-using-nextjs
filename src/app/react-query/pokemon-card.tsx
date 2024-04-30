import React from "react";

interface PokemonCardProps {
  imageUrl: string;
  title: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  imageUrl,
  title,
}) => (
  <div className="rounded-lg shadow-2xl cursor-pointer">
    <div
      className="w-full min-h-72 md:min-h-96"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
    <div className="px-4 py-2 md:px-12 md:py-6">
      <h4 className="text-xl font-semibold text-center">{title[0].toUpperCase() + title.slice(1)}</h4>
    </div>
  </div>
);

export default PokemonCard;
