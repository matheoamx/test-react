function PokemonCard({ pokemon }) {
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