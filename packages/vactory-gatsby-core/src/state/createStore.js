import {createStore as reduxCreateStore} from "redux"
import reducer from "./reducers"

export default (preloadedState) => {
    const windowExist = typeof window === "object";

    const enhancers = windowExist && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined

    const createStore = () => reduxCreateStore(
        reducer,
        preloadedState,
        enhancers,
    );

    return createStore()
};
