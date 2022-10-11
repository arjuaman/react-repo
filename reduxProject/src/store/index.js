// const redux = require('redux');
import {createStore} from 'redux';

const reducerFunc = (state={counter:0}, action) => {
    if(action.type==='increment'){
        return {counter: state.counter + 1}
    }
    if(action.type==='decrement'){
        return {counter: state.counter - 1}
    }
    if(action.type==='increase'){
        return {counter: state.counter + action.toIncreaseBy}
    }
    return state;
}

const store = createStore(reducerFunc);

// const subscriberFunc = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// }

// store.subscribe(subscriberFunc);

// store.dispatch({type:'increment'});
// store.dispatch({type:'decrement'});

export default store;