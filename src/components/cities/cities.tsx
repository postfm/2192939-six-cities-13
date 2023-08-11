import classNames from 'classnames';
import { CITIES, DEFAULT_CITY, StylesForMapMainPage } from '../../settings';
import CitiesList from '../../components/cities-list';
import Map from '../../components/map';
import PlaceListEmpty from '../../components/place-list-empty';
import PlaceWithSorting from '../place-with-sorting';
import { useRef, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Offers } from '../../types/data-types';
import { getCityName } from '../../store/app-data/selectors';

type CitiesProps = {
  offers: Offers;
}

export default function Cities({ offers }: CitiesProps): JSX.Element {
  const [prevCity, setPrevCity] = useState(DEFAULT_CITY);
  const cityName = useAppSelector(getCityName);
  const scrollRef = useRef<HTMLDivElement>(null);

  if (prevCity !== cityName) {
    scrollRef.current?.scroll(0, 0);
    setPrevCity(cityName);
  }

  const cityOffers = offers.filter((offer) => offer.city.name === cityName);

  return (
    <main className={classNames('page__main', 'page__main--index',
      { 'page__main--index-empty': !cityOffers.length })}
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList cities={CITIES} />
      </div>
      <div className="cities">
        {!cityOffers.length && <PlaceListEmpty />}
        {cityOffers.length &&
          <div className="cities__places-container container">
            <section className="cities__places places" ref={scrollRef}>
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityOffers.length} places to stay in {cityName}
              </b>
              <PlaceWithSorting cityOffers={cityOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={cityOffers[0].city} offers={cityOffers}
                  styles={StylesForMapMainPage}
                />
              </section>
            </div>
          </div>}
      </div>
    </main>
  );
}