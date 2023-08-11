//dependenciesr
import createPersistedStore from '../store';

const {store} = createPersistedStore();
export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
