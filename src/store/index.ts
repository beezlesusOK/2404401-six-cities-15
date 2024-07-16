import { configureStore } from '@reduxjs/toolkit';
import reduser from './reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, State} from './state';

export const store = configureStore({
  reducer: reduser
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
