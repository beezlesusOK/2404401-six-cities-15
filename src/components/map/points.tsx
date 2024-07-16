import React from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../store';
import {changeCity} from '../../store/action';
import {selectCity} from '../../store/selector';
import {TCity} from '../../util/types';


export default function LocationItem({city}: {city: TCity}): React.JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(selectCity);
  const isActive = activeCity === city;
  const handleClick = () => {
    if (!isActive) {
      dispatch(changeCity(city));
    }
  };

  return (
    <li
      className="locations__item"
      onClick={handleClick}
    >
      <a
        className={classNames('locations__item-link tabs__item', {'tabs__item--active': isActive})}
        href="#"
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}
