# redux-educational
Just me reading redux doc

State Management

```function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}
```

It is a self-contained app with the following parts:

- The state, the source of truth that drives our app;
- The view, a declarative description of the UI based on the current state
- The actions, the events that occur in the app based on user input, and trigger updates in the state

1. Action
An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

A typical action object might look like this:

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

2. Reducer
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

```
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

3. View
The view is a declarative description of the UI based on the current state.

```
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )

}
```

4. Store
The current Redux application state lives in an object called the store.

```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

5. Dispatch
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. 

```
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

```
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

6. Selectors
Selectors are functions that know how to extract specific pieces of information from a store state value.

```
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

## More about the [example](https://www.taniarascia.com/redux-react-guide/)

1. Setting up the Redux Store

In index.js, we'll be bringing in a few things.

- createStore, to create the store that will maintain the Redux state
- applyMiddleware, to be able to use middleware, in this case thunk
- Provider, to wrap the entire application in Redux
- thunk, a middleware that allows us to make asynchronous actions in Redux
- composeWithDevTools, code that connects your app to Redux DevTools

2. Bringing in reducers

A reducer is a function that determines changes to Redux state. It is a pure function that returns a copy of the state with the new change.

Having this ***combineReducers*** method allows us to bring whatever we want in - a commentsReducer, an authReducer, and so on.

3. Setting up Redux Actions

For this blog app, we're going to want to fetch posts from an API and put them in our Redux state.

- getPosts - begin telling Redux we're going to fetch posts from an API
- getPostsSuccess - pass the posts to Redux on successful API call
- getPostsFailure - inform Redux that an error was encountered during Redux on failed API call

What Dispatch really does is to send an action to Redux.

## Post

## Counter 

## Auth 