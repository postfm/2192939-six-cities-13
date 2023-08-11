import PlaceList from '../place-list';
import Sorting from '../sorting';
import { Offers, SortingType } from '../../types/data-types';
import { PlacesCard } from '../../settings';
import { getSortedOffersBy } from '../../utils/offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useCallback } from 'react';
import { getSortingType } from '../../store/app-data/selectors';
import { setSortingType } from '../../store/app-data/app-data';


type PlaceWithSortingProps = {
  cityOffers: Offers;
}

export default function PlaceWithSorting({ cityOffers }: PlaceWithSortingProps) {
  const dispatch = useAppDispatch();
  const typeSorting = useAppSelector(getSortingType);

  const handleChangeSorting = useCallback((sortType: SortingType) => {
    dispatch(setSortingType(sortType));
  }, [dispatch]);

  return (
    <>
      <Sorting onChangeSorting={handleChangeSorting} typeSorting={typeSorting} />
      <PlaceList
        offers={getSortedOffersBy(cityOffers, typeSorting)}
        type={PlacesCard.Cities}
      />
    </>
  );
}