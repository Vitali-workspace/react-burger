import { RootState, TActionsApp } from "../types/services-types";
import type { ThunkDispatch } from 'redux-thunk';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as selectorHook
} from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useAppDispatch: (() => ThunkDispatch<RootState, unknown, TActionsApp>) = useDispatch;
