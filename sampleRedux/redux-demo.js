const redux = require('redux');

const reducerFunc = (state={counter:0}, action) => {
    if(action.type === 'increment') {
        return {
            //returns an object often
            counter: state.counter + 1
        };
    }

    return state;
}

const store = redux.createStore(reducerFunc);

const subscriberFunc = () => {
    //takes no input
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(subscriberFunc);

store.dispatch({type: "increment"});