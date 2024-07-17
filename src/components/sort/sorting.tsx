import React, {useState} from 'react';
import classNames from 'classnames';

import OffersSortItem from './sorting-item';
import {sortOptions} from '../../util/const';

export default function OffersSorting(): React.JSX.Element {
  const [isShowSort, setIsShowSort] = useState<boolean>(false);

  const handleShowSort = () => {
    setIsShowSort(!isShowSort);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">
        Sort by
      </span>
      <span
        className="places__sorting-type"
        onClick={handleShowSort}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', {'places__options--opened': isShowSort})}>
        {
          sortOptions.map((sort) => (
            <OffersSortItem
              key={sort.code}
              item={sort}
            />
          ))
        }
      </ul>
    </form>
  );
}
