import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reduces/root.reducer';

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}