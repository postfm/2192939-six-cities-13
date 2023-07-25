import { Helmet } from 'react-helmet-async';
import OfferList from '../../components/offer-list';
import { Offers } from '../../types/types';
import Header from '../../components/header';
import { AuthStatus, CITIES } from '../../settings';
import CitiesList from '../../components/cities-list';
import Map from '../../components/map';

type MainPageProps = {
  offers: Offers;
  authStatus: AuthStatus;
};
export default function MainPage({
  offers,
  authStatus,
}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header authStatus={authStatus} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={CITIES} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span> </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList offers={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offers[0].city} offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
