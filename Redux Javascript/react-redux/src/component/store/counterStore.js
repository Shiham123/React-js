import { createStore } from 'redux';
import counterReducer from '../reducer/counterReducer';

const counterStore = createStore(counterReducer);

export default counterStore;
