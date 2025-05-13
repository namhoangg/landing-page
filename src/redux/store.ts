import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { langReducer, menuReducer, sidebarReducer, userReducer, aclReducer } from './index';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import {
  AuthAPI,
  CategoryAPI,
  EventsAPI,
  FormAPI,
  NewPressAPI,
  FeatureNewPressAPI,
  PostAPI,
  StoreAPI,
  StorePublicAPI,
  TagAPI,
  PortfolioAPI,
  GalleryAPI,
  UserAPI,
  FormSubmissionAPI,
  ArticlesAPI, QuotesAPI, UnlocoAPI,
} from '@/services';

const rootReducer = combineReducers({
  langReducer,
  menuReducer,
  sidebarReducer,
  userReducer,
  aclReducer,
  [AuthAPI.reducerPath]: AuthAPI.reducer,
  [CategoryAPI.reducerPath]: CategoryAPI.reducer,
  [FormAPI.reducerPath]: FormAPI.reducer,
  [NewPressAPI.reducerPath]: NewPressAPI.reducer,
  [TagAPI.reducerPath]: TagAPI.reducer,
  [PostAPI.reducerPath]: PostAPI.reducer,
  [StoreAPI.reducerPath]: StoreAPI.reducer,
  [StorePublicAPI.reducerPath]: StorePublicAPI.reducer,
  [FeatureNewPressAPI.reducerPath]: FeatureNewPressAPI.reducer,
  [EventsAPI.reducerPath]: EventsAPI.reducer,
  [PortfolioAPI.reducerPath]: PortfolioAPI.reducer,
  [GalleryAPI.reducerPath]: GalleryAPI.reducer,
  [UserAPI.reducerPath]: UserAPI.reducer,
  [FormSubmissionAPI.reducerPath]: FormSubmissionAPI.reducer,
  [ArticlesAPI.reducerPath]: ArticlesAPI.reducer,
  [QuotesAPI.reducerPath]: QuotesAPI.reducer,
  [UnlocoAPI.reducerPath]: UnlocoAPI.reducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(AuthAPI.middleware)
        .concat(CategoryAPI.middleware)
        .concat(FormAPI.middleware)
        .concat(CategoryAPI.middleware)
        .concat(NewPressAPI.middleware)
        .concat(TagAPI.middleware)
        .concat(PostAPI.middleware)
        .concat(StoreAPI.middleware)
        .concat(StorePublicAPI.middleware)
        .concat(FeatureNewPressAPI.middleware)
        .concat(EventsAPI.middleware)
        .concat(PortfolioAPI.middleware)
        .concat(GalleryAPI.middleware)
        .concat(UserAPI.middleware)
        .concat(FormSubmissionAPI.middleware)
        .concat(ArticlesAPI.middleware)
        .concat(QuotesAPI.middleware)
        .concat(UnlocoAPI.middleware),
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;

// export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action<string>
// >;

// export const CommonContext = createContext(null as any);
export const useCommonDispatch = useAppDispatch; //createDispatchHook(CommonContext);
export const useCommonSelector = useAppSelector; //createSelectorHook(CommonContext);

export default store;
