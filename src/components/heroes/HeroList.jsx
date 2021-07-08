import React from 'react';
import getHeroByPublisher from '../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

  const heroes = getHeroByPublisher( publisher );

  return (
    <div className="card-columns">
      {heroes.map((e) => (
        <HeroCard key={e.id} {...e}/>
      ))}
    </div>
  );
}

export default HeroList
