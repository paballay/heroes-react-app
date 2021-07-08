import { heroes } from "../../data/heroes";

const getHeroByPublisher = ( publisher ) => {
  const validatePublishers = ["DC Comics", "Marvel Comics"];

  if (!validatePublishers.includes( publisher )) {
    console.log(`Publisher ${publisher} no es correcto`);
  }

  return heroes.filter( hero => hero.publisher === publisher );
};

export default getHeroByPublisher
