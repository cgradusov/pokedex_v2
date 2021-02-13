import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';

export const history = createHashHistory();

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: [routerMiddleware(history), ...getDefaultMiddleware()],
});

export default store;
