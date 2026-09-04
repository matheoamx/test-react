interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name, imgSrc } = pokemon;

  return (
    <figure>
      {imgSrc !== undefined ? (
        <img src={imgSrc} alt={name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;